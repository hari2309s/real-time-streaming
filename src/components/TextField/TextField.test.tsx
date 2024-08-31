import { render, screen } from '@testing-library/react';
import React from 'react';
import { Textfield } from './TextField';

describe('TextField component ', () => {
    test('should render the component properly with its props ', () => {
        const mockFn = jest.fn();
        render(
            <Textfield
                id="isin-field"
                label="ISIN Code"
                placeholder="Ex. DE000BASF111"
                value="XY000BASF111"
                errorMessage="Invalid ISIN Code!"
                onChange={mockFn}
            />,
        );

        const labelElement = screen.getByText('ISIN Code');
        expect(labelElement).toBeInTheDocument();

        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveValue('XY000BASF111');

        const errorElement = screen.getByText('Invalid ISIN Code!');
        expect(errorElement).toBeInTheDocument();
    });
});
