import React from 'react';
import './Advertise.css'
import coreFeaturesPicture from '../../Images/App-image.png'
import secureContent from '../../Images/secureContent.png'
import smartFeatures from '../../Images/SmartFeatures.png'


const CoreFeatures = () => {
    return (
        <div className='md:flex mt-24 md:ml-36'>
            <div className='md:w-1/2 md:ml-12 flex justify-center md:block '>
                <img className='coreFeatures' src={coreFeaturesPicture} alt="" />
            </div>
            <div className='mt-16'>
                <h5 className='font-bold text-[#244886] flex justify-center '>Core Features</h5>
                <h1 className='text-2xl font-bold mt-2 flex justify-center text-center'>Smart Jackpots <br /> that you may love this <br /> anytime & anywhere</h1>
                <div className='flex mt-10 justify-center '>
                    <div><img className='h-10 w-10 mr-5' src={smartFeatures} alt="" /></div>
                    <div>
                        <div><h5 className='text-sm font-bold'>Smart Features </h5>
                            <p className='text-xs mt-2 text-[#343D48]'>Get your blood tests delivered at let home collect <br /> sample from the victory of the managments. <br />your blood tests.</p>
                        </div>
                    </div>
                </div>
                <div className='flex mt-10 md:mt-3 justify-center '>
                <div><img className='h-10 w-10 mr-5' src={secureContent} alt="" /></div>
                    <div>
                        <div><h5 className='text-sm font-bold'>Secure Contents </h5>
                            <p className='text-xs mt-2 text-[#343D48]'>Get your blood tests delivered at let home collect <br /> sample from the victory of the managments. <br />your blood tests.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreFeatures;