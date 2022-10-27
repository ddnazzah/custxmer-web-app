/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-25 23:38:22
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-27 03:43:56
 */

import { useState } from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { routes, Sidebar } from '../Header/Header';

interface Props {}

const Footer = (props: Props) => {
    const { pathname } = useLocation();
    const [isToggle, setIsToggle] = useState(true);

    const onToggle = () => {
        setIsToggle(!isToggle);
    };

    return (
        <>
            <footer className="bg-indigo-900 px-2 sm:px-4 py-2.5  w-full z-20 top-0 left-0 border-b border-gray-200 ">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
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
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <ul className="hidden md:flex p-4 rounded-lg border border-gray-100 flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                        <li>
                            <a
                                href="https://twitter.com/custxmerapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block py-2 pr-4 pl-3 text-white md:p-0">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/company/custxmer/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block py-2 pr-4 pl-3 text-white md:p-0">
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                    <div className="flex md:order-2">
                        <div>
                            <h4 className="block text-white text-right">
                                +1 XXX XXXX XXXX
                            </h4>
                            <h4 className="block text-white text-right">
                                custxmer@myemail.world
                            </h4>
                        </div>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                            {routes.map(route => (
                                <li>
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
            </footer>
            <div className="container w-full flex flex-col md:flex-row p-4 text-center md:text-left">
                <div className="pr-2">Lorem ipsum dolor</div>
                <div className="pr-2">Lorem ipsum dolor</div>
                <div className="pr-2">Lorem ipsum dolor</div>
                <div className="pr-2">Lorem ipsum dolor</div>
                <div className="pr-2">Lorem ipsum dolor</div>
            </div>
            <Sidebar isToggle={isToggle} onToggle={onToggle} />
        </>
    );
};

export default Footer;
