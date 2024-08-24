import { describe, expect, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import React from "react";
import { List } from "./List";

describe('List component ', () => {
    test('should render the component properly with its props ', () => {
        const mockFn = vi.fn();

        render(<List isReady={true} stocks={[{ isin: 'DE000BASF111', price: 123.345, ask: 123.678, bid: 123.986 }]} send={mockFn} setStocks={mockFn} />);

        expect(screen.getByText('My stocks')).toBeInTheDocument();

        expect(screen.getByRole('list')).toBeInTheDocument();

        expect(screen.queryByTestId('empty-message')).not.toBeInTheDocument();
    });

    test('should render the empty info message when the stocks array is empty ', () => {
        const mockFn = vi.fn();

        render(<List isReady={true} stocks={[]} send={mockFn} setStocks={mockFn} />);

        expect(screen.getByTestId('empty-message')).toBeInTheDocument();
        expect(screen.getByTestId('empty-message')).toHaveTextContent('Your watchlist is empty. Please subscribe to some stocks!');
    });

    test('should not be able to call the send method when the connection is not ready ', () => {
        const mockFn = vi.fn();

        render(<List isReady={false} stocks={[{ isin: 'DE000BASF111', price: 123.345, ask: 123.678, bid: 123.986 }]} send={mockFn} setStocks={mockFn} />);

        expect(screen.getByText('My stocks')).toBeInTheDocument();

        const unsubscribeButton = screen.getByRole('button');
        expect(unsubscribeButton).toHaveTextContent('Unsubscribe');
        userEvent.click(unsubscribeButton);
        expect(mockFn).not.toHaveBeenCalled();
    });
})