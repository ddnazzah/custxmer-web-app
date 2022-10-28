import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from '..';

test('renders correctly', () => {
    render(
        <Router>
            <Footer />
        </Router>,
    );

    const linkElement = screen.getAllByText(/Home/i);
    expect(linkElement).toHaveLength(2);
});
