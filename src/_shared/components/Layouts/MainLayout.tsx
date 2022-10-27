/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-25 23:43:51
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-27 03:32:34
 */

import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

interface Props {}

const MainLayout = (props: Props) => {
    return (
        <div>
            <Header />
            <div className="content-container mt-24 md:mt-20">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
