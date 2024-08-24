import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Button } from "./Button";

describe('Button component ', () => {
    test('should render Button component properly with its props ', () => {
        render(<Button color="red">Hello</Button>);

        const buttonElement = screen.getByRole('button');

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveStyle('background-color: red');
        expect(buttonElement).toHaveTextContent('Hello');
    })
})