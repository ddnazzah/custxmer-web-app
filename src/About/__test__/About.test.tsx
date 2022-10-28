import { render, screen } from '@testing-library/react';
import { About } from '..';

test('renders correctly', () => {
    render(<About />);
    const linkElement = screen.getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
});
