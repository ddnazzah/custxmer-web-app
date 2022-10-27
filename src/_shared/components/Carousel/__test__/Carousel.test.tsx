import { render, screen } from '@testing-library/react';
import { Carousel } from '..';

test('renders learn react link', () => {
    render(<Carousel />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
