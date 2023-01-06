import React from 'react';
import Footer from '../home/Footer';
import NavBar from '../home/NavBar';
import OrganizationSpeeceText from './OrganizationSpeeceText';

const OrganizationSpeece = () => {
    return (
        <div className=''>
            <NavBar/>
           <OrganizationSpeeceText/>
           <Footer/>
        </div>
    );
};

export default OrganizationSpeece;