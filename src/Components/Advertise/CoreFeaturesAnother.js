import React from 'react';
import CoreFeaturesAnotherPic from '../../Images/Core features another.png';
import successfullImage from '../../Images/workCompleted.png'

const CoreFeaturesAnother = () => {
    return (
        <div>
            <div className='md:flex md:flex-row flex flex-col-reverse mt-10 md:ml-32'>
                <div className='md:w-1/2 mt-20 '>
                    <p className='text-sm font-bold md:block flex justify-center'>CORE FEATURES</p>
                    <p className='text-3xl font-bold mt-5 md:block flex justify-center text-center md:text-start'>Smart Jackpots <br /> that you may love this <br />anytime & anywhere .</p>
                    <p className='text-sm mt-5 leading-6 tracking-wide md:block flex justify-center text-center md:text-start '>Get your tests delivered at let home collect <br /> sample from the victory of the managments that <br />supplies best design system guidelines ever. Get <br /> your tests delivered at let home collect sample.</p>
                   <div className='md:block flex justify-center'> <button className='mt mt-3 py-1 px-4 rounded-3xl border-2 border-solid bg-[#1F3E76] text-gray-300 '>Get Started</button></div>
                </div>
                <div className='md:pr-24 flex justify-center '>
                    <img src={CoreFeaturesAnotherPic} alt="" />
                </div>
            </div>
            <div className='md:hidden flex justify-center mt-16 space-x-10 font-bold pb-20 '>
                <button className='rounded-3xl px-5 py-2 border-2 border-black ' >More About</button>
                <button className='rounded-3xl px-5 py-2 border-2 border-black '>Whats New!!</button>
            </div>
            <div className='hidden md:block mt-20 ml-32 mr-20 '>
                <p className='text-center text-3xl font-semibold'>3000+ Completed Work <br />
                    Which WE have Successfully Done</p>
                <img className='mt-10 ' src={successfullImage} alt="" />
            </div>
        </div>
    );
};

export default CoreFeaturesAnother;