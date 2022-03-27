import React, { useState } from 'react';
import Links from '../../link/Links';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open,setOpen]=useState(false)
    const routes = [
        {id:1, name : 'Home', links: '/home'},
        {id:2, name : 'Shop', links: '/shop'},
        {id:3, name : 'Deals', links: '/deatls'},
        {id:4, name : 'Coupons', links: '/coupons'},
        {id:5, name : 'Contact', links: '/contact'},
    ]
    return ( 
      
            <nav>
                <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
                    {open? <XIcon></XIcon>:<MenuIcon></MenuIcon>}
                </div>
                    <ul className={`md:flex justify-center absolute duration-500 ease-in ${open ? 'top-6': 'top-[-120px]'}`}>
                        {
                            routes.map(route => <Links 
                                route={route}
                                key={route.id}
                                ></Links>)
                        }
                    </ul>
            </nav>
       
    );
};

export default Navbar;