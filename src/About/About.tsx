/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2022-10-25 19:09:02
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2022-10-27 05:25:11
 */

import { BsChatQuote } from 'react-icons/bs';
import { FaBalanceScale, FaBolt, FaGlobe } from 'react-icons/fa';

interface Props {}

const features = [
    {
        name: 'Competitive exchange rates',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: FaGlobe,
    },
    {
        name: 'No hidden fees',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: FaBalanceScale,
    },
    {
        name: 'Transfers are instant',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: FaBolt,
    },
    {
        name: 'Mobile notifications',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: BsChatQuote,
    },
];

const About = (props: Props) => {
    return (
        <div>
            <div className="bg-white py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-lg font-semibold text-indigo-600">
                            About
                        </h2>
                        <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            A better way to contact Service Providers
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Lorem ipsum dolor sit amet consect adipisicing elit.
                            Possimus magnam voluptatum cupiditate veritatis in
                            accusamus quisquam.
                        </p>
                    </div>

                    <div>
                        <p className="mt-4 text-xl text-gray-500 lg:mx-auto">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime debitis quisquam velit, fuga alias,
                            aliquam quos beatae repellendus repellat error non
                            consequuntur maiores? Vel perferendis nihil alias
                            asperiores error architecto. Tempore quidem
                            similique dolorem. Excepturi quam obcaecati ratione
                            rem explicabo incidunt libero id consectetur
                            nostrum. Voluptatum possimus similique blanditiis
                            nihil autem sapiente odit explicabo nulla? Labore
                            natus officia omnis ab. Unde at excepturi a modi hic
                            commodi exercitationem est molestiae, provident
                            doloremque voluptas vel aspernatur porro veniam,
                            itaque nihil consequuntur tempore aliquam
                            consequatur accusamus quidem veritatis atque. Animi,
                            maiores rerum! Fugit eius consequatur modi delectus
                            fuga vitae maxime itaque autem dolore quia,
                            consequuntur provident, commodi quo tempora aperiam!
                            Quam provident soluta repudiandae totam accusamus
                            aspernatur consectetur nesciunt fugit dolor magnam.
                            Nihil necessitatibus veniam, harum rem maxime quidem
                            deleniti nesciunt reiciendis eaque, impedit
                            accusamus porro eos et blanditiis! Alias sequi
                            repudiandae a cum laboriosam tempore quae?
                            Accusantium numquam perspiciatis quod totam.
                        </p>

                        <div className="mt-10">
                            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                                {features.map(feature => (
                                    <div
                                        key={feature.name}
                                        className="relative">
                                        <dt>
                                            <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                                <feature.icon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                                                {feature.name}
                                            </p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <p className="mt-4 text-xl text-gray-500 lg:mx-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis pariatur eligendi perspiciatis! In,
                            impedit. Nulla tempore eos molestias dicta quos
                            eligendi delectus. Facere distinctio qui harum
                            placeat! Sapiente, soluta ipsam. Aliquam accusamus
                            omnis fugit porro magni delectus reprehenderit
                            magnam maxime odit hic possimus corrupti, nulla,
                            totam sint veritatis tenetur quo, numquam enim optio
                            accusantium aut. Ducimus excepturi dolor eligendi
                            quia? Tempore unde atque eveniet consequatur
                            aspernatur delectus nihil, doloribus error mollitia
                            repellat non alias vitae ipsa adipisci iste dolor
                            harum culpa veritatis nostrum, minima debitis,
                            placeat odio quos omnis? Incidunt. Asperiores
                            numquam laborum amet voluptate omnis fugit
                            reprehenderit corrupti reiciendis nobis animi
                            delectus nemo doloribus, sunt magnam modi repellat
                            enim facere facilis sequi odit alias corporis?
                            Suscipit obcaecati harum dicta! Ipsa ut maiores iure
                            expedita ex repudiandae quae illum qui similique
                            odit nobis recusandae reprehenderit dignissimos
                            velit vitae fuga doloremque, rem animi voluptatibus
                            sequi quibusdam tenetur maxime tempora asperiores!
                            Obcaecati! Fugiat provident vitae culpa temporibus
                            enim dolorem earum ea? Reiciendis blanditiis ad quam
                            ipsum deserunt, dolores quasi ipsa nesciunt ullam
                            sed est. Quibusdam minima pariatur nisi recusandae
                            natus ea porro! Beatae officia eos fuga nisi ut
                            dicta repellat quidem voluptates reiciendis facilis.
                            At corrupti, facilis minima ipsam numquam distinctio
                            placeat voluptates deserunt autem, eligendi rerum
                            iusto veritatis amet saepe quo. Omnis laborum
                            consectetur impedit consequatur mollitia et
                            asperiores adipisci! Consequuntur eveniet magnam,
                            quam perspiciatis soluta ullam dolorem asperiores
                            neque ea suscipit eius vero qui. Assumenda doloribus
                            ullam non sunt unde. Repellendus et ab numquam rerum
                            dolorum distinctio quo corporis magnam mollitia
                            corrupti nam aspernatur fuga blanditiis, asperiores
                            voluptatibus nesciunt veritatis accusamus placeat
                            deleniti dignissimos dolor. Consectetur recusandae
                            quisquam eligendi iusto?
                        </p>
                        <div className="mt-10">
                            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                                {features.map(feature => (
                                    <div
                                        key={feature.name}
                                        className="relative">
                                        <dt>
                                            <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                                <feature.icon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                                                {feature.name}
                                            </p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                        <p className="mt-4 text-xl text-gray-500 lg:mx-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi amet, ab optio possimus cumque excepturi
                            doloremque cum deleniti aliquam itaque porro ipsa,
                            voluptates tempore perspiciatis et quia in quas
                            aperiam! Eveniet possimus, ullam beatae voluptas
                            quisquam dolorum est aliquam vel ex culpa. Ducimus
                            laborum sunt, voluptatum fugit eos ipsum corrupti
                            nulla numquam. Dolores, optio? Ea quisquam quis odio
                            officiis incidunt? Blanditiis corrupti rem ratione
                            cum illum inventore rerum esse aperiam architecto!
                            Officia id laboriosam nemo explicabo quia
                            perspiciatis eveniet assumenda iure, magni voluptas
                            cumque debitis quibusdam, nihil neque aspernatur
                            consectetur. Dolores, numquam? Fugit dolorum
                            repellat commodi omnis non tenetur cupiditate
                            molestias possimus dolore id? Modi temporibus
                            recusandae consequatur aliquid porro fugit
                            voluptates, odit explicabo alias, esse earum
                            voluptate quo veniam! Nesciunt, unde molestias cum
                            culpa odio quam sed, quia repudiandae error
                            inventore, corporis esse ad atque explicabo incidunt
                            minima. Odio itaque corrupti optio tempora deserunt
                            earum voluptatum eveniet assumenda doloribus! Vitae
                            dolores delectus voluptate ad modi, exercitationem
                            corrupti dolore placeat, rerum in quis earum. Facere
                            omnis, enim commodi reprehenderit eligendi fuga,
                            consequatur magnam officia quod molestiae beatae
                            illo vel. Rem. Praesentium sapiente laboriosam,
                            fugiat voluptatum similique vel dolorem eaque!
                            Cumque maiores ipsam reiciendis dolor eaque aut
                            itaque! Optio odit placeat quibusdam rerum, quia
                            eius vero sunt illum cum? Accusamus, optio. At
                            deleniti veniam ducimus cumque molestias laudantium
                            rerum nobis tempore culpa recusandae consectetur
                            asperiores quasi cum aliquam, unde illum distinctio
                            esse est voluptates assumenda aspernatur iste?
                            Voluptatibus commodi dolor natus. Officiis
                            reiciendis consequatur nesciunt unde molestias.
                            Beatae a quidem consectetur sint voluptatibus fuga
                            adipisci accusamus excepturi! Dolor ducimus, enim
                            neque explicabo libero accusamus ea illo adipisci
                            quia consequuntur distinctio reiciendis! Iusto modi
                            quaerat omnis molestias magni exercitationem nam
                            sint ducimus quia repudiandae nobis reprehenderit
                            dicta, esse fuga dolores ut veniam similique
                            necessitatibus eius, perspiciatis minima optio?
                            Aspernatur tempora veritatis ullam!
                        </p>
                        <p className="mt-4 text-xl text-gray-500 lg:mx-auto">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Id adipisci, nisi quos, asperiores possimus
                            dolorum distinctio assumenda explicabo, hic cumque
                            accusamus odit. Libero quae consequuntur cupiditate
                            voluptatum, delectus error eligendi.
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                            {features.map(feature => (
                                <div key={feature.name} className="relative">
                                    <dt>
                                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                            <feature.icon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                                            {feature.name}
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        {feature.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
