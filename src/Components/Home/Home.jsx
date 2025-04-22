import React from 'react';
import Banner from '../Banner/Banner';
import Lawyers from '../LawyersInfo/Lawyers';
import { useLoaderData } from 'react-router';

const Home = () => {
    const lawyers=useLoaderData();
    //console.log(lawyers);
    return (
        <div>
            <Banner></Banner>
            <Lawyers lawyers={lawyers}></Lawyers>
        </div>
    );
};

export default Home;