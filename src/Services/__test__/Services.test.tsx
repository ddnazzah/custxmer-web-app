import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Services from '../Services';

test('renders correctly', () => {
    render(
        <Router>
            <Services />
        </Router>,
    );
    const linkElement = screen.getByText(/Services/i);
    expect(linkElement).toBeInTheDocument();
});
