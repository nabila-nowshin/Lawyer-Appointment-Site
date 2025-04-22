import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Navbar'
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='mx-auto'>
            <Header></Header>
            <Outlet className=''></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;