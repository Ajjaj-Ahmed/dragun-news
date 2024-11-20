import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className='bg-gray-200 flex items-center gap-3 p-3 rounded-md'>
            <p className='bg-red-400 px-2 rounded-md'>Latest</p>  
            <Marquee pauseOnHover={true} speed={70} className='space-x-3'>
                <Link to={'/'}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                <Link to={'/'}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                <Link to={'/'}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
            </Marquee>
           
        </div>
    );
};

export default LatestNews;