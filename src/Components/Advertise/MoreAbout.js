import React from 'react';
import moreAboutImage from '../../Images/company 1.png'
import webImage from '../../Images/web-design 1.png'
import sign from '../../Images/tik sign.png'
import howItWorks from '../../Images/how its works.png'

const MoreAbout = () => {
    return (
        <section className='hidden md:block'>
            <div className='flex mt-24 ml-24'>
                <div className='w-3/5'><img className='w-11/12' src={moreAboutImage} alt="" /></div>
                <div className='mt-16'>
                    <p className='text-[#244886] font-bold'>More About <br /> <span className='text-3xl text-black'>Our Company !!! </span></p>
                    <p className='text-base mt-5 text-gray-700'>Organize Your Project Content</p>
                    <p className='text-sm ml-5 mt-4 text-gray-500'>Get your website ads tests delivered at let collect sample from the <br /> victory of the managments that supplies best design system <br />which guidelines ever with multiple features.</p>
                    <p className='text-base mt-7 text-gray-700'>Collaborate your multiple team support easily</p>
                    <p className='text-base mt-7 text-gray-700'>Build your team's knowledge base system </p>
                </div>
            </div>
            <div className='flex ml-24 mt-20 mr-16'>
                <div className='w-1/2'>
                    <p className='text-2xl font-bold'>What's new!!</p>
                    <p className='text-4xl font-bold mt-5'>Why we're unique</p>
                    <p className='mt-8 text-gray-500 text-sm'>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.</p>
                    <div className='flex mt-10'>
                    <div className='w-1/2'>
                        <div className='flex mt-8'><img className='w-5 h-5 mt-1' src={sign} alt="" /><p className='ml-4 text-gray-700'>medical and vision</p></div>
                        <div className='flex mt-8'><img className='w-5 h-5 mt-1' src={sign} alt="" /><p className='ml-4 text-gray-700'>medical and vision</p></div>
                        <div className='flex mt-8'><img className='w-5 h-5 mt-1' src={sign} alt="" /><p className='ml-4 text-gray-700'>medical and vision</p></div>
                    </div>
                    <div>
                        <div className='flex mt-8'><img className='w-5 h-5 mt-1' src={sign} alt="" /><p className='ml-4 text-gray-700'>medical and vision</p></div>
                        <div className='flex mt-8'><img className='w-5 h-5 mt-1' src={sign} alt="" /><p className='ml-4 text-gray-700'>medical and vision</p></div>
                        <div className='flex mt-8'><img className='w-5 h-5 mt-1' src={sign} alt="" /><p className='ml-4 text-gray-700'>medical and vision</p></div>
                    </div>
                    </div>
                </div>
                <div>
                    <img src={webImage} alt="" />
                </div>
            </div>
            <div className='mt-20'>
                <img src={howItWorks} alt="" />
            </div>
        </section>
    );
};

export default MoreAbout;