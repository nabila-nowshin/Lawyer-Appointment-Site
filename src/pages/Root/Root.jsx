import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Navbar'
import { Outlet, useNavigation } from 'react-router';
import LoadingSpinner from '../../Components/LoadingSpinner';
import ScrollToTop from '../../Components/ScrollToTop';

const Root = () => {
    const navigation = useNavigation();
    return (
        <div className='mx-auto'>
            <ScrollToTop></ScrollToTop>
            <Header></Header>
            {navigation.state === "loading" && <LoadingSpinner />}
            <Outlet className=''></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;