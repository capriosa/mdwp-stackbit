import * as React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import Link from '@stackbit/components/dist/utils/link';
import ArrowLeft from '@stackbit/components/dist/svgs/arrow-left';
import ArrowRight from '@stackbit/components/dist/svgs/arrow-right';
import Cart from '@stackbit/components/dist/svgs/cart';
import Facebook from '@stackbit/components/dist/svgs/facebook';
import GitHub from '@stackbit/components/dist/svgs/github';
import Instagram from '@stackbit/components/dist/svgs/instagram';
import LinkedIn from '@stackbit/components/dist/svgs/linkedin';
import Twitter from '@stackbit/components/dist/svgs/twitter';

const iconMap = {
    arrowLeft: ArrowLeft,
    arrowRight: ArrowRight,
    cart: Cart,
    facebook: Facebook,
    github: GitHub,
    instagram: Instagram,
    linkedin: LinkedIn,
    twitter: Twitter
};

export default function Tabs(props) {
    const [openTab, setOpenTab] = React.useState(1);
    console.log(props.tabs[0])
    return (

        <>

            <div className="flex flex-wrap justify-center">
                <div className="w-3/4">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        {
                            props.tabs.map((tab, index) =>
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                            (openTab === 1
                                                ? "text-white bg-indigo-600"
                                                : "text-black bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(1);
                                        }}
                                        data-toggle="tab"
                                        href="#link1"
                                        role="tablist"
                                    >
                                        {tab}
                                    </a>
                                </li>
                            )}

                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <p>
                                        Collaboratively administrate empowered markets via
                                        plug-and-play networks. Dynamically procrastinate B2C users
                                        after installed base benefits.
                    <br />
                                        <br /> Dramatically visualize customer directed convergence
                                        without revolutionary ROI.
                  </p>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <p>
                                        Completely synergize resource taxing relationships via
                                        premier niche markets. Professionally cultivate one-to-one
                                        customer service with robust ideas.
                    <br />
                                        <br />
                                        Dynamically innovate resource-leveling customer service for
                                        state of the art customer service.
                  </p>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <p>
                                        Efficiently unleash cross-media information without
                                        cross-media value. Quickly maximize timely deliverables for
                                        real-time schemas.
                    <br />
                                        <br /> Dramatically maintain clicks-and-mortar solutions
                                        without functional solutions.
                  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
