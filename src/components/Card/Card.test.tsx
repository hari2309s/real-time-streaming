import { describe, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Card } from './Card';
import userEvent from '@testing-library/user-event';

describe('Card component ', () => {
    test('should render the component properly with its props ', async () => {
        const mockFn = vi.fn();
        render(
            <Card
                isin="DE000BASF111"
                price={123.45512}
                bid={124.67813}
                ask={123.98442}
                handleUnsubscribe={mockFn}
            />,
        );

        expect(screen.getByText('DE000BASF111')).toBeInTheDocument();
        expect(screen.getByText('123.455€')).toBeInTheDocument();
        expect(screen.getByText('124.678€')).toBeInTheDocument();
        expect(screen.getByText('123.984€')).toBeInTheDocument();

        const unsubscribeButton = screen.getByRole('button');
        expect(unsubscribeButton).toBeInTheDocument();
        expect(unsubscribeButton).toHaveTextContent('Unsubscribe');

        userEvent.click(unsubscribeButton);

        await waitFor(() => expect(mockFn).toHaveBeenCalledTimes(1));
    });
});
