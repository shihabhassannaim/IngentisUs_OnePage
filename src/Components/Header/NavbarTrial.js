import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo.png'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const NavbarTrial = () => {
    const [icon , setIcon] = useState(false);
    const showIcon = () => {
       console.log(icon);
       setIcon(!icon);
   }
    return (
        <div>
                <div className='bg-blue-300 flex'>
                <div><img className='' src={Logo} alt="" /></div>
                <div className='hidden text-white md:inline-flex'>
                <div className=''><Link to='/home'>Home</Link></div>
                <div className=''><Link to='/advertise'>Advertise</Link></div>
                <div className=' '><Link to='/support'>Support</Link></div>
                <div className=''><Link to='/contact'>Contact</Link></div>
                <div className=' '><button className=''>Get Started</button></div>
                </div>
                <button className=' px-5 py-2' onClick={showIcon}>{icon ? <MenuIcon/> : <CloseIcon/>}</button>
            </div>
        </div>
    );
};

export default NavbarTrial;