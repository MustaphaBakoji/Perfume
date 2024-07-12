
import React from 'react';
import { useSelector } from 'react-redux';
const Error = () => {
    let { code, message } = useSelector(state => state.error)
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="dark:text-amber-500 mb-4 text-7xl font-extrabold tracking-tight text-indigo-950 lg:text-9xl">
                        {code}
                    </h1>
                    <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-slate-600">
                        {message}
                    </p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        Oops! Looks like you took a wrong turn.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Error;


