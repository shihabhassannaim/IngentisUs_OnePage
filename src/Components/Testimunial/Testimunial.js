import React from 'react';
import rattings from '../../Images/Ratting.png'
import myImage from '../../Images/my image.jpg'


const Testimunial = () => {
    return (
        <div className='ml-10 hidden md:block'>
            <p className='text-center text-lg mt-10 text-blue-600'>TESTIMUNIAL</p>
            <p className='text-center text-4xl'>Meet Client Satisfaction</p>
            <div className='flex mr-10 mt-10'>
                <div className='mr-8 w-1/4 bg-slate-300 pl-5 pt-5 rounded-md'>
                    <img className='w-15 h-3' src={rattings} alt="" />
                    <p className='text-sm mt-3 font-semibold'>Modern look & trending design</p>
                    <p className='mt-6  text-xs font-semibold leading-8'>Get working experience to work with this <br /> amazing team & in future want to work <br />together for bright future projects and also <br /> make deposit to freelancer.</p>
                    <div className='flex mt-7'>
                        <img className='h-9 w-9 rounded-full mt-1' src={myImage} alt="" />
                        <div className='ml-5'>
                            <p className='font-bold'>Shihab Hassan</p>
                            <p className='text-blue-600'>@sihab.69</p>
                        </div>
                    </div>
                </div>
                <div className='mr-8 w-1/4 bg-slate-300 pl-5 pt-5 rounded-md'>
                    <img className='w-15 h-3' src={rattings} alt="" />
                    <p className='text-sm mt-3 font-semibold'>Modern look & trending design</p>
                    <p className='mt-6  text-xs font-semibold leading-8'>Get working experience to work with this <br /> amazing team & in future want to work <br />together for bright future projects and also <br /> make deposit to freelancer.</p>
                    <div className='flex mt-7'>
                        <img className='h-9 w-9 rounded-full mt-1' src={myImage} alt="" />
                        <div className='ml-5'>
                            <p className='font-bold'>Shihab Hassan</p>
                            <p className='text-blue-600'>@sihab.69</p>
                        </div>
                    </div>
                </div>
                <div className='mr-8 w-1/4 bg-slate-300 pl-5 pt-5 rounded-md'>
                    <img className='w-15 h-3' src={rattings} alt="" />
                    <p className='text-sm mt-3 font-semibold'>Modern look & trending design</p>
                    <p className='mt-6 text-xs font-semibold leading-8'>Get working experience to work with this <br /> amazing team & in future want to work <br />together for bright future projects and also <br /> make deposit to freelancer.</p>
                    <div className='flex mt-7'>
                        <img className='h-9 w-9 rounded-full mt-1' src={myImage} alt="" />
                        <div className='ml-5'>
                            <p className='font-bold'>Shihab Hassan</p>
                            <p className='text-blue-600'>@sihab.69</p>
                        </div>
                    </div>
                </div>
                <div className='opacity-50 w-1/4 bg-slate-300 pl-5 pt-5 rounded-md'>
                    <img className='w-15 h-3' src={rattings} alt="" />
                    <p className='text-sm mt-3 font-semibold'>Modern look & trending design</p>
                    <p className='mt-6  text-xs font-semibold leading-8'>Get working experience to work with this <br /> amazing team & in future want to work <br />together for bright future projects and also <br /> make deposit to freelancer.</p>
                    <div className='flex mt-7'>
                        <img className='h-9 w-9 rounded-full mt-1' src={myImage} alt="" />
                        <div className='ml-5'>
                            <p className='font-bold'>Shihab Hassan</p>
                            <p className='text-blue-600'>@sihab.69</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimunial;