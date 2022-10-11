import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Body from './Body/Body';
import Header from './Header/Header';


const Home = () => {
    const quizs = useLoaderData();
    // console.log(quizs.data)
    return (
        <div>
            <Header></Header>
            <Body quizs={quizs.data}></Body>
        </div>
    );
};

export default Home;