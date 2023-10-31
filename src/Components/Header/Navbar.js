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
        <div>
                <div className='flex text-white'>
                <div className=' md:shrink-0 absolout left-15  mr-16 lg:mr-24 xl:mr-48 2xl:mr-64' ><img src={Logo} alt="" /></div>
                <ul className={`text-white md:inline-flex space-x-8 lg:space-x-16 xl:space-x-24 2xl:space-x-40 w-full bg-[#0F2137] border-2 rounded-xl border-s-orange-100 md:border-none md:bg-transparent
                top-20 absolute md:static z-10 ${icon ? 'top-0 hidden' : 'top-[-490] block'}`}>
                <li className='mt-3 pl-56 pb-5 hover:bg-[#385f8f] md:pl-0 md:pb-0 '><Link to='/home'>Home</Link></li>
                <li className='mt-3 pl-48 pb-5 hover:bg-[#385f8f] md:pl-0 md:pb-0 '><Link to='/advertise'>Advertise</Link></li>
                <li className='mt-3 pl-48 pb-5 hover:bg-[#385f8f] md:pl-0 md:pb-0 '><Link to='/support'>Support</Link></li>
                <li className='mt-3 pl-48 pb-5 hover:bg-[#385f8f] md:pl-0 md:pb-0 '><Link to='/contact'>Contact</Link></li>
                <li className='mt-2 hidden md:block'><button className='button py-1.5 px-4 rounded-3xl'>Get Started</button></li>
                </ul>
                <button className='md:hidden absolute right-10 top-8 z-30' onClick={showIcon}>{icon ? <MenuIcon/> : <CloseIcon/>}</button>
            </div>
        </div>
    );
};

export default Navbar;