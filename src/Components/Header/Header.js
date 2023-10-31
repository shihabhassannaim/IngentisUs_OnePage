import React from 'react';
import paypal from '../../Images/paypal.png'
import google from '../../Images/google.png'
import Dropbox from '../../Images/Dropbox.png'
import './Header.css'
import Navbar from './Navbar';

const Header = () => {
    return (
        <section className='Header sm:pl-10 md:pl-24 pt-5 bg-container pb-10 '>
            <div className='mt-14 md:mt-24 text-white static z-0'>
                <div className='main-text header-text font-bold text-center md:text-start flex md:ml-9 text-4xl md:text-5xl md:justify-start justify-center tracking-wider'><p>Experience Your<br/> Ultimate Digital <br />
Services</p></div>
                <div className='hidden md:block ml-10 mt-6 tracking-wider'><p>Get your blood tests delivered at let home collect sample <br /> from the victory of the managments that supplies best <br />
design system guidelines ever.</p></div>
                <div>
                    <div className='flex justify-center md:block mt-6 md:ml-10'>
                        <button className='md:ml-0 button py-1.5 px-4 rounded-3xl bg-white text-black'>Get Started</button>
                        <button className='md:hidden ml-16 md:ml-0 button py-1.5 px-4 rounded-3xl bg-white text-black'>Watch Video</button>
                    </div>
                </div>
                <div className='hidden md:inline-flex ml-10 mt-10 mb-20'>
                    <p className='text-slate-500'>Sponsored by :- </p>
                    <img className='h-6 ml-5 pt-2' src={paypal} alt="" />
                    <img className='h-6 ml-5 pt-2'src={google} alt="" />
                    <img className='h-6 ml-5 pt-2' src={Dropbox} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Header;