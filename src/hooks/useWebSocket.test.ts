import { renderHook, act } from "@testing-library/react";
import { useWebSocket } from "./useWebSocket";
import { Instrument } from "../types";
import { vi } from "vitest";

describe("useWebSocket", () => {
  let originalWebSocket: any;
  let mockWebSocket: any;

  beforeAll(() => {
    originalWebSocket = global.WebSocket;
    mockWebSocket = {
      send: vi.fn(),
      close: vi.fn(),
    };
    global.WebSocket = vi.fn(() => mockWebSocket);
  });

  afterAll(() => {
    global.WebSocket = originalWebSocket;
  });

  it("should set WebSocket to open and ready state", async () => {
    const { result } = renderHook(() => useWebSocket());

    expect(result.current[0]).toBe(false); // isReady should be false initially

    // Simulate WebSocket open event
    act(() => {
      mockWebSocket.onopen();
    });

    expect(result.current[0]).toBe(true); // isReady should be true after WebSocket is opened
    expect(result.current[1]).toBeInstanceOf(Function); // send function should be defined
  });

  it("should update stocks on receiving a message", async () => {
    const { result } = renderHook(() => useWebSocket());

    const message: Instrument = {
      isin: "12345",
      name: "Test Stock",
      price: 100,
    };

    // Simulate WebSocket message event
    act(() => {
      mockWebSocket.onmessage({ data: JSON.stringify(message) });
    });

    expect(result.current[2]).toEqual([message]); // stocks should be updated with the new message
  });

  it("should update an existing stock", async () => {
    const { result } = renderHook(() => useWebSocket());

    const initialStock: Instrument = {
      isin: "12345",
      name: "Test Stock",
      price: 100,
    };
    const updatedStock: Instrument = {
      isin: "12345",
      name: "Test Stock Updated",
      price: 200,
    };

    act(() => {
      result.current[3]([initialStock]); // set initial stocks
      mockWebSocket.onmessage({ data: JSON.stringify(updatedStock) }); // simulate update message
    });

    expect(result.current[2]).toEqual([updatedStock]); // stock should be updated with new values
  });

  it("should set WebSocket to closed state", async () => {
    const { result } = renderHook(() => useWebSocket());

    // Simulate WebSocket close event
    act(() => {
      mockWebSocket.onclose();
    });

    expect(result.current[0]).toBe(false); // isReady should be false after WebSocket is closed
  });

  it("should close WebSocket on unmount", () => {
    const { unmount } = renderHook(() => useWebSocket());

    unmount();

    expect(mockWebSocket.close).toHaveBeenCalled(); // WebSocket close should be called on unmount
  });
});
