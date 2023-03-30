import { render, screen } from '@testing-library/react';
import App from './App';

test('Test dummy', () => {
  render(<App />);
  const linkElement = screen.getByText(/Initial Setup/i);
  expect(linkElement).toBeInTheDocument();
});
