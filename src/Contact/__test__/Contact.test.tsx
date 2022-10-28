import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Contact } from '..';

test('renders correctly', () => {
    render(
        <Router>
            <Contact />
        </Router>,
    );
    const linkElement = screen.getAllByText(/Contact/i);
    expect(linkElement).toHaveLength(3);
});
