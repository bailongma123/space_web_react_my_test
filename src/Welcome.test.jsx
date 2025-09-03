// src/Welcome.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Welcome from './Welcome';

describe('Welcome component', () => {
  test('renders default name and button', () => {
    render(<Welcome />);
    const headingElement = screen.getByText('Hello, Guest!');
    expect(headingElement).toBeInTheDocument();

    const buttonElement = screen.getByTestId('welcome-button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders with provided name prop', () => {
    render(<Welcome name="Alice" />);
    expect(screen.getByText('Hello, Alice!')).toBeInTheDocument();
  });

  test('displays message after button click', async () => {
    const user = userEvent.setup();
    render(<Welcome />);

    const messageBeforeClick = screen.queryByTestId('welcome-message');
    expect(messageBeforeClick).not.toBeInTheDocument();

    const button = screen.getByTestId('welcome-button');
    await user.click(button);

    const messageAfterClick = screen.getByTestId('welcome-message');
    expect(messageAfterClick).toBeInTheDocument();
    expect(messageAfterClick).toHaveTextContent('Thank you for clicking');
  });
});