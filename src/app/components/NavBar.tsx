'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getNavData } from '../data/data';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const NavBar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <nav className='fixed md:top-1/2 md:transform md:-translate-y-1/2 right-0 p-4'>
      <div className='text-right pt-2 md:hidden'>
        <button onClick={toggleNav}>
          {isNavOpen ? (
            <RiCloseLine className='text-white border-2 border-white rounded-full hover:rotate-[360deg] hover:duration-1000 w-[50px] h-[50px] p-2' />
          ) : (
            <RiMenu3Line className='text-white border-2 border-white rounded-full hover:rotate-[360deg] hover:duration-1000 w-[50px] h-[50px] p-3' />
          )}
        </button>
      </div>

      <div className={`md:block ${isNavOpen ? 'block' : 'hidden'}`} >
        <ul className='flex flex-col'>
          {getNavData().map((menu) => (
            <Link key={menu.id} href={menu.href}>
              <li
                onClick={closeNav}
                className={`flex justify-center items-center text-white text-md font-bold uppercase tracking-wide rounded-full m-2 px-6 py-2 hover:rotate-[360deg] hover:duration-1000 cursor-pointer w-[100px] h-[100px] md:m-3 ${menu.background}`}
              >
                {menu.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
