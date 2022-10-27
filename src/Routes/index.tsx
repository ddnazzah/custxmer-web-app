/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-25 19:00:01
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-25 23:50:44
 */
import { createBrowserRouter } from 'react-router-dom';
import { About } from '../About';
import { Contact } from '../Contact';
import { Home } from '../Home';
import { Services } from '../Services';
import { MainLayout } from '../_shared/components/Layouts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'services',
                element: <Services />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
        ],
    },
]);

export default router;
