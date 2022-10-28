import { render, screen } from '@testing-library/react';
import { Carousel } from '..';

test('renders correctly', () => {
    render(<Carousel />);
    const linkElement = screen.getByTestId('carousel');
    expect(linkElement).toBeInTheDocument();
});
