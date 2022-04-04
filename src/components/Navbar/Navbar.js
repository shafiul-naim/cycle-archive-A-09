import React from 'react';
import { Link } from 'react-router-dom';
import Customlink from '../Customlink/Customlink';

const Navbar = () => {
    return (
        <div className='sticky top-0 bg-white px-12 flex py-8 justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link to='/' className='text-xl font-bold text-gray-600'>Cycle Archive</Link>
            </div>
            <div className='flex gap-4 text-xl'>
                <Customlink to='/'>Home</Customlink>
                <Customlink to='/reviews'>Reviews</Customlink>
                <Customlink to='/dashboard'>Dashboard</Customlink>
            </div>
        </div>
    );
};

export default Navbar;