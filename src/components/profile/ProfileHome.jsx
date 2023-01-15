import React from 'react';
import Footer from '../home/Footer';
import NavBar from '../home/NavBar';
import Profile from './Profile';

const index = () => {
    return (
        <div className='bg-gray-100'>
            <NavBar/>
            <Profile/>
            <Footer/>
        </div>
    );
};

export default index;