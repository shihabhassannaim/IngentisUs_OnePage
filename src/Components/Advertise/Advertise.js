import React from 'react';
import AppDevelopment from '../../Images/appDevelopment.png'
import WebDevelopment from '../../Images/WebDevelopment.png'
import digitalMarketing from '../../Images/Digital campaign.png'
import Header from '../Header/Header';

const Advertise = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <p className='text-[#244886] text-base md:text-xl tracking-widest'>Quality features.</p>
                <p className='text-2xl md:text-5xl font-semibold mt-4'>Meet exciting feature of services</p>
            </div>
            <div className='md:flex md:ml-16 text-center mt-20'>
                <div className='md:w-1/3'>
                    <div className='flex justify-center'><img className='md:mb-10 mb-5 h-24 w-24' src={AppDevelopment} alt="" /></div>
                    <h3 className='font-bold text-xl mb-5 md:mb-10'>App Development.</h3>
                    <p className='text-[#343D48] tracking-wide md:mb-0 mb-10'>Get your blood tests delivered at <br /> home collect a sample from the <br />your blood tests.</p>
                </div>
                <div className='md:w-1/3'>
               <div className='flex justify-center' > <img className='md:mb-10 mb-5  h-24 w-24' src={WebDevelopment} alt="" /></div>
                    <h3 className='font-bold text-xl mb-5 md:md-10'>Web Development.</h3>
                    <p className='text-[#343D48] tracking-wide mb-10 md:mb-0'>Get your blood tests delivered at <br /> home collect a sample from the <br /> your blood tests.</p>
                </div>
                <div className='md:w-1/3'>
                <div className='flex justify-center'><img className='mb-10 h-24 w-24' src={digitalMarketing} alt="" /></div>
                    <h3 className='font-bold text-xl md:mb-10 mb-5'>Digital Marketing</h3>
                    <p className='text-[#343D48] tracking-wide md:mb-0 mb-10'>Get your blood tests delivered at <br /> home collect a sample from the <br />your blood tests.</p>
                </div>
            </div>
        </div>
    );
};

export default Advertise;