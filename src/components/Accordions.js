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

export default function Accordions(props) {
    const [openTab, setOpenTab] = React.useState(0);

    return (

        <>

            <div className="flex flex-wrap justify-center">
                <div className="lg:w-1/2 w-3/4">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-col"
                        role="tablist"
                    >
                        {
                            props.accordions.map((tab, index) =>
                                <li key={index} className="-mb-px mr-2  flex-auto transition-all">
                                    <a
                                        className={
                                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-t-sm  block leading-normal " +
                                            (openTab === index
                                                ? "text-white bg-gray-400"
                                                : "text-black bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(index);
                                        }}
                                        data-toggle="tab"
                                        href="#link1"
                                        role="tablist"
                                        data-sb-field-path=".tab"
                                    >
                                        <span>{tab}</span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-3 shadow-lg rounded-b-sm">
                                        <div className="px-4 py-1 pt-1 flex-auto">
                                            <div className="tab-content tab-space">

                                                <div className={classNames("transition-all", openTab === index ? "block" : "hidden")} id="link1">
                                                    <p className="h-auto" key={index} >
                                                        {props.items[index]}
                                                    </p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </li>
                            )}

                    </ul>

                </div>
            </div>
        </>
    );
}
