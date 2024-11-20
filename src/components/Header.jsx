import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col items-center py-4 gap-3'>
            <div>
                <img className='w-[400px]' src={logo} alt="" />
            </div>
            <h2 className='text-gray-400'>Journalism Without Fear or Favour</h2>
            <div>
                <span className='mr-2'>{moment().format("dddd")}</span>
                <span className='text-gray-500'>{moment().format("MMMM Do YYYY")}</span>
            </div>
            
            
        </div>
    );
};

export default Header;