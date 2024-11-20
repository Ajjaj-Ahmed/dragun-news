import React from 'react';
import SocialLogin from '../components/SocialLogin';
import FindUs from '../components/FindUs';
import Qzone from '../components/Qzone';

const RightNavbar = () => {
    return (
        <div className='space-y-5'>
         <SocialLogin></SocialLogin>
         <FindUs></FindUs>
         <Qzone></Qzone>
        </div>
    );
};

export default RightNavbar;