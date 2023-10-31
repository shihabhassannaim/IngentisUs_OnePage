import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo.png'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [icon , setIcon] = useState(true);
    const showIcon = () => {
       console.log(icon);
       setIcon(!icon);
   }
    return (
                <div className='flex text-white bg-slate-800 w-full sticky top-0 md:pl-24 h-24 items-center z-30'>
                <div className=' md:shrink-0 absolout left-15  mr-16 lg:mr-24 xl:mr-48 2xl:mr-64' ><img src={Logo} alt="" /></div>
                <ul className={`text-white md:inline-flex space-x-8 lg:space-x-16 xl:space-x-24 2xl:space-x-40 w-full bg-[#0F2137] border-2 rounded-xl border-s-orange-100 md:border-none md:bg-transparent
                top-20 absolute md:static z-10 ${icon ? 'top-0 hidden' : 'top-[-490] block'}`}>
                <li className='mt-3 pl-56 pb-5 hover:bg-[#385f8f] md:pl-0 md:pb-0 '><a href="#home">Home</a></li>
                <li className='mt-3 pl-48 pb-5 hover:bg-[#385f8f] md:pl-0 md:pb-0 '><a href="#advertise">Advertise</a></li>
                <li className='mt-3 pl-48 pb-5 hover:bg-[#385f8f] md:pl-0 md:pb-0 '><a href="#support">Support</a></li>
                <li className='mt-3 pl-48 pb-5 hover:bg-[#385f8f] md:pl-0 md:pb-0 '><a href="#support">Contact</a></li>
                <li className='mt-2 hidden md:block'><button className='button py-1.5 px-4 rounded-3xl'>Get Started</button></li>
                </ul>
                <button className='md:hidden absolute right-10 top-8 z-30' onClick={showIcon}>{icon ? <MenuIcon/> : <CloseIcon/>}</button>
            </div>
    );
};

export default Navbar;