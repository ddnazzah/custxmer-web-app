/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-25 23:38:22
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-27 05:21:39
 */

import { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
import AppInstallation from '../../assets/images/app_installation.svg';
import ProfileData from '../../assets/images/profile_data.svg';
import Services from '../../assets/images/services.svg';

interface Props {}

const features = [
    {
        name: 'Competitive  rates',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: AppInstallation,
    },
    {
        name: 'No hidden fees',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ProfileData,
    },
    {
        name: 'Transfers are instant',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: Services,
    },
];

const Carousel = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slideRight = () => {
        if (activeIndex === 2) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex + 1);
        }
    };

    const slideLeft = () => {
        if (activeIndex === 0) {
            setActiveIndex(2);
        } else {
            setActiveIndex(activeIndex - 1);
        }
    };

    return (
        <section className="p-12 mb-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative mt-10 bg-gray-200">
                    {features.map((feature, featIdx) => (
                        <div
                            key={feature.name}
                            className={`carousel-item bg-teal-500 relative  flex-col md:flex-row items-center justify-center rounded-md shadow-md p-10 ${
                                activeIndex === featIdx ? 'flex' : 'hidden'
                            }`}>
                            <dd className="mt-2 text-base text-center text-white flex-1 md:text-left">
                                <p className=" text-3xl md:text-5xl font-bold leading-6  my-10">
                                    {feature.name}
                                </p>
                                {feature.description}
                                {feature.description}
                                {feature.description}

                                <a
                                    href="/"
                                    className="flex w-24 mt-5 mb-10 items-center border border-transparent py-2 text-base font-medium text-white hover:text-gray-200 mx-auto md:mx-0">
                                    Get started
                                </a>
                            </dd>
                            <dt className="flex items-center justify-center flex-1">
                                <img
                                    src={feature.icon}
                                    className="md:w-2/3 h-96"
                                    aria-hidden="true"
                                    alt="feature-img"
                                />
                            </dt>
                        </div>
                    ))}
                    <BsArrowLeftSquareFill
                        className="absolute -left-5 bottom-1/2 cursor-pointer"
                        size={40}
                        onClick={slideLeft}
                    />
                    <BsArrowRightSquareFill
                        className="absolute -right-5 bottom-1/2 cursor-pointer"
                        size={40}
                        onClick={slideRight}
                    />
                    <div className="flex justify-center align-middle py-2">
                        <ul className="flex">
                            <li
                                className={`h-1 rounded w-10 md:w-20 mx-1 ${
                                    activeIndex === 0
                                        ? 'bg-slate-900'
                                        : 'bg-gray-300'
                                }`}></li>
                            <li
                                className={`h-1 rounded w-10 md:w-20 mx-1 ${
                                    activeIndex === 1
                                        ? 'bg-slate-900'
                                        : 'bg-gray-300'
                                }`}></li>
                            <li
                                className={`h-1 rounded w-10 md:w-20 mx-1 ${
                                    activeIndex === 2
                                        ? 'bg-slate-900'
                                        : 'bg-gray-300'
                                }`}></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
