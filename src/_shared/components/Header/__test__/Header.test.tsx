import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '..';

test('renders correctly', () => {
    render(
        <Router>
            <Header />
        </Router>,
    );
    const linkElement = screen.getAllByText(/Home/i);
    expect(linkElement).toHaveLength(2);
});
