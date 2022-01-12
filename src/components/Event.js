import * as React from 'react';
import axios from 'axios';
import useSWR from 'swr';

export default function Event(props) {
    const fetcher = async (url) => await axios.get(url).then((res) => res.data);
    const key = 'EDMO3BWIFXRUIQSDP7IZ';
    const id = props.eventbriteId || '169603411369';
    const url = 'https://www.eventbriteapi.com/v3/events/' + id + '/?token=' + key + '&expand=venue';
    const desc_url = 'https://www.eventbriteapi.com/v3/events/' + id + '/description/?token=' + key + '&expand=venue';
    const { data, error } = useSWR(url, fetcher);

    if (error) {
        return <p>Failed to load Data</p>;
    }
    if (!data) {
        return <p>Loading ...</p>;
    }
    console.log(data);

    return (
        <div className="px-2 py-32 bg-white md:px-0">
            <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                <div className="flex flex-wrap items-center sm:-mx-3">
                    <div className="w-full md:w-1/2 md:px-3">
                        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                {data.name.text}
                            </h1>
                            <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">{data.description.text}</p>
                            <span className="text-sm">Start: {data.start.local.toLocaleString().split(',')[0]}</span>
                            <span className="text-sm inline-block ml-2">Ende: {data.end.local}</span>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="w-full overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                            <img src={data.logo.url} />
                        </div>
                        <div className="relative mt-16 flex flex-col sm:flex-row sm:space-x-4">
                            <a
                                href={data.url}
                                className="flex sb-component-button-primary items-center w-full px-6 py-3 mb-3 text-lg text-white rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                            >
                                Anmelden
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 ml-1"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
