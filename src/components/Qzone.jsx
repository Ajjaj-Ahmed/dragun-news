import React from 'react';
import swimming from '../assets/swimming.png';
import classes from '../assets/class.png';
import playing from '../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-gray-200 *:w-full p-3'>
            <img src={swimming} alt="" />
            <img src={classes} alt="" />
            <img src={playing} alt="" />
        </div>
    );
};

export default Qzone;