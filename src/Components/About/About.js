import React from 'react';

const About = () => {
    return (
        <section id='support' className='mt-32 ml-24 pb-32 hidden md:flex'>
            <div className='w-1/4'>
                <p className='text-xl font-semibold text-gray-600'>About Us</p>
                <p className='mt-16 text-gray-500'>Support Center</p>
                <p className='mt-2 text-gray-500'>About Us</p>
                <p className='mt-2 text-gray-500'>Copyright</p>
                <p className='mt-2 text-gray-500'>Popular Campaign</p>
            </div>
            <div className='w-1/4'>
                <p className='text-xl font-semibold text-gray-600'>Our Information</p>
                <p className='mt-16 text-gray-500'>Return Policy</p>
                <p className='mt-2 text-gray-500'>Privacy Policy</p>
                <p className='mt-2 text-gray-500'>Terms & Conditions</p>
                <p className='mt-2 text-gray-500'>Site Map</p>
                <p className='mt-2 text-gray-500'>Store Hours</p>
            </div>
            <div className='w-1/4'>
                <p className='text-xl font-semibold text-gray-600'>My Account</p>
                <p className='mt-16 text-gray-500'>Press Inquiries</p>
                <p className='mt-2 text-gray-500'>Social Media</p>
                <p className='mt-2 text-gray-500'>Directories</p>
                <p className='mt-2 text-gray-500'>Image & B-roll</p>
                <p className='mt-2 text-gray-500'>Permissions</p>
            </div>
            <div className='w-1/4'>
                <p className='text-xl font-semibold text-gray-600'>Policy</p>
                <p className='mt-16 text-gray-500'>Application Security</p>
                <p className='mt-2 text-gray-500'>Software Principles</p>
                <p className='mt-2 text-gray-500'>Unwanted Software Policy</p>
                <p className='mt-2 text-gray-500'>Responsible Supply Chain</p>
            </div>
            </section>
    );
};

export default About;