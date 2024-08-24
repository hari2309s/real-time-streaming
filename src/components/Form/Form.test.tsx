import { describe, expect } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Form } from "./Form";

describe('Form component ', () => {
    test('should render the component properly with its props ', () => {
        const mockFn = vi.fn();
        render(<Form isReady={true} send={mockFn} stocks={[]} />)

        expect(screen.getByLabelText('ISIN Code')).toBeInTheDocument();

        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toHaveValue('');

        const subscribeButton = screen.getByRole('button');
        expect(subscribeButton).toHaveTextContent('Subscribe');
        expect(subscribeButton).toBeDisabled();

        fireEvent.change(inputElement, { target: { value: 'DE000BASF111' } });
        expect(inputElement).toHaveValue('DE000BASF111');
    });

    test('when a valid, unique ISIN Code is entered the Subscribe button becomes enabled ', () => {
        const mockFn = vi.fn();
        render(<Form isReady={true} send={mockFn} stocks={[]} />)

        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toHaveValue('');

        const subscribeButton = screen.getByRole('button');
        expect(subscribeButton).toHaveTextContent('Subscribe');
        expect(subscribeButton).toBeDisabled();

        fireEvent.change(inputElement, { target: { value: 'DE000BASF111' } });
        expect(inputElement).toHaveValue('DE000BASF111');

        expect(subscribeButton).toBeEnabled();
    });

    test('when an invalid ISIN Code is entered the Subscribe button stays disabled and the invalid error message is shown ', async () => {
        const mockFn = vi.fn();
        render(<Form isReady={true} send={mockFn} stocks={[]} />)

        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toHaveValue('');

        const subscribeButton = screen.getByRole('button');
        expect(subscribeButton).toHaveTextContent('Subscribe');
        expect(subscribeButton).toBeDisabled();

        fireEvent.change(inputElement, { target: { value: 'XY000BASF111' } });
        expect(inputElement).toHaveValue('XY000BASF111');

        await waitFor(() => {
            expect(subscribeButton).toBeDisabled();
            expect(screen.getByText('Invalid ISIN Code!')).toBeInTheDocument();
        });
    });

    test('when a duplicate ISIN Code is entered the Subscribe button stays disabled and the correct error message is thrown ', async () => {
        const mockFn = vi.fn();
        render(<Form isReady={true} send={mockFn} stocks={[{ isin: 'DE000BASF111', price: 123.456, ask: 123.765, bid: 123.984 }]} />)

        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toHaveValue('');

        const subscribeButton = screen.getByRole('button');
        expect(subscribeButton).toHaveTextContent('Subscribe');
        expect(subscribeButton).toBeDisabled();

        fireEvent.change(inputElement, { target: { value: 'DE000BASF111' } });
        expect(inputElement).toHaveValue('DE000BASF111');

        await waitFor(() => {
            expect(subscribeButton).toBeDisabled();
            expect(screen.getByText('Duplicate ISIN Code!')).toBeInTheDocument();
        });
    });

    test('when the socket connection is ready and a valid, unique ISIN Code is entered, button click should call the send method ', async () => {
        const mockFn = vi.fn();
        render(<Form isReady={true} send={mockFn} stocks={[{ isin: 'DE000BASF111', price: 123.456, ask: 123.765, bid: 123.984 }]} />)

        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toHaveValue('');

        const subscribeButton = screen.getByRole('button');
        expect(subscribeButton).toHaveTextContent('Subscribe');
        expect(subscribeButton).toBeDisabled();

        fireEvent.change(inputElement, { target: { value: 'DE000BASF112' } });
        expect(inputElement).toHaveValue('DE000BASF112');

        fireEvent.click(subscribeButton);
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
})