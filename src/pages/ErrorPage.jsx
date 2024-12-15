import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center p-6 py-12 dark:bg-violet-600 dark:text-gray-50 ">
                <div className="container mx-auto ">
                    <div className="flex flex-col  items-center justify-center">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">
                            404
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Route/not found.</span>
                        </div>
                        <Link to="/" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600">Go Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;