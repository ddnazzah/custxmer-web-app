/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-25 23:38:22
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-27 04:37:23
 */

import { useState } from 'react';
import { FaLinkedinIn, FaTimes, FaTwitter } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logonew.jpg';

interface Props {}

interface SideBarProps {
    isToggle: boolean;
    onToggle: () => void;
}

export const routes = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/services', name: 'Services' },
    { path: '/contact', name: 'Contact' },
];

const Header = (props: Props) => {
    const { pathname } = useLocation();
    const [isToggle, setIsToggle] = useState(false);

    const onToggle = () => {
        setIsToggle(!isToggle);
    };

    return (
        <>
            <nav className="bg-indigo-900 px-2 sm:px-4  fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center bg-white">
                        <img
                            src={logo}
                            className="mr-3 h-10 sm:h-16"
                            alt="custxmer-logo"
                        />
                        {/* <span className="self-center text-xl font-semibold whitespace-nowrap">
                        Custxmer
                    </span> */}
                    </Link>
                    <div className="flex md:order-2">
                        <ul className="flex p-4 rounded-lg flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <a
                                    href="https://twitter.com/custxmerapp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block py-2 pr-4 pl-3 text-white rounded  md:p-0">
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/custxmer/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block py-2 pr-4 pl-3 text-white rounded md:p-0">
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={onToggle}>
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                            {routes.map(route => (
                                <li key={route.name}>
                                    <Link
                                        to={route.path}
                                        className={`block py-2 pr-4 pl-3 text-white rounded hover:underline underline-offset-4 md:hover:bg-transparent  md:p-0 uppercase ${
                                            pathname === route.path
                                                ? 'underline'
                                                : ''
                                        }`}>
                                        {route.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <Sidebar isToggle={isToggle} onToggle={onToggle} />
        </>
    );
};

export const Sidebar = (props: SideBarProps) => {
    const { pathname } = useLocation();
    const { isToggle, onToggle } = props;

    return (
        <div
            className={`${
                isToggle ? 'translate-x-0 ' : '-translate-x-full'
            } bg-white transform ease-in-out transition-all duration-300 fixed md:hidden z-40 inset-0 h-full w-full`}>
            <div className="h-full overflow-y-auto scrolling-touch overflow-hidden mt-16">
                <div className="flex justify-end">
                    <button className="p-5 " onClick={onToggle}>
                        <FaTimes size={30} />
                    </button>
                </div>
                <nav
                    id="nav"
                    className="px-1 pt-6 overflow-y-auto pb-10 lg:pt-10 lg:pb-14 flex justify-center text-sm">
                    <ul>
                        {routes.map(route => (
                            <li key={route.name}>
                                <Link
                                    to={route.path}
                                    className={`block py-2 pr-4 pl-3 text-black text-2xl text-center font-medium rounded hover:underline underline-offset-4 md:hover:bg-transparent  md:p-0 uppercase ${
                                        pathname === route.path
                                            ? 'underline'
                                            : ''
                                    }`}
                                    onClick={onToggle}>
                                    {route.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
