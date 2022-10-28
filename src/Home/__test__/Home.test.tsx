import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from '..';

test('renders correctly', () => {
    render(
        <Router>
            <Home />
        </Router>,
    );
    const linkElement = screen.getByText(
        /Manage and contact your service providers by simply tapping your phone!/i,
    );
    expect(linkElement).toBeInTheDocument();
});
