/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-25 19:09:02
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-27 04:47:46
 */

import AppInstallation from '../_shared/assets/images/app_installation.svg';
import ConnectedWorld from '../_shared/assets/images/connected_world.svg';
import Hero from '../_shared/assets/images/CustxmerHero.png';
import ProfileData from '../_shared/assets/images/profile_data.svg';
import Services from '../_shared/assets/images/services.svg';
import { Carousel } from '../_shared/components/Carousel';

interface Props {}

const Home = (props: Props) => {
    const features = [
        {
            name: 'Competitive exchange rates',
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
        {
            name: 'Mobile notifications',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
            icon: ConnectedWorld,
        },
    ];

    return (
        <section className="">
            <h3 className="container mx-auto text-center text-2xl font-bold py-6">
                Manage and contact your service providers by simply tapping your
                phone!
            </h3>

            <div id="mb" className="flex justify-center">
                <img src={Hero} alt="hero-img" className="w-2/3 md:w-auto" />
            </div>

            <Carousel />

            <div className="bg-gray-100 p-12 mb-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mt-10">
                        <dl className="space-y-10 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10 md:space-y-0">
                            {features.map(feature => (
                                <div
                                    key={feature.name}
                                    className="relative flex flex-col items-center justify-center rounded-md bg-white shadow-md p-5 pb-10">
                                    <dt className="flex flex-col items-center">
                                        <div>
                                            <img
                                                src={feature.icon}
                                                className="h-24"
                                                aria-hidden="true"
                                                alt="feature-img"
                                            />
                                        </div>
                                        <p className="text-lg font-medium leading-6 text-center text-teal-500 mt-5">
                                            {feature.name}
                                        </p>
                                    </dt>
                                    <dd className="mt-2 text-base text-center text-gray-500">
                                        {feature.description}
                                    </dd>
                                    <a
                                        href="/"
                                        className="absolute -bottom-5 flex items-center justify-center border border-transparent bg-teal-500 px-3 py-2 text-base font-medium text-white hover:bg-teal-900 ">
                                        Get started
                                    </a>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
