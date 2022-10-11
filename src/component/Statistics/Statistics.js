import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const Statistics = () => {
    const quizs = useLoaderData();
    const data = quizs.data
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div>
                <p className='text-3xl font-semibold m-4'>Questions Analytics</p>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;