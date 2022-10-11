import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
            <div>
                <h1 className='text-9xl font-bold text-white'>404</h1>
                <p className='m-4'>Not Found</p>
                <Link className='border px-4 py-2' to='/'>Go Back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;