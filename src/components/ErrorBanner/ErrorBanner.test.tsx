import { render, screen } from '@testing-library/react';
import React from 'react';
import { ErrorBanner } from './ErrorBanner';

describe('ErrorBanner component ', () => {
    test('should render the componet properly with its props ', () => {
        render(<ErrorBanner message="I am an Error!" />);

        expect(screen.getByText('I am an Error!')).toBeInTheDocument();
    });
});
