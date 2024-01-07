'use client';

import { useState } from 'react';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const NavBar = () => {
  const navMenuData = [
    {
      id: nanoid(),
      name: 'Home',
      href: '/',
      background: 'bg-[#97dffc]',
    },
    {
      id: nanoid(),
      name: 'About',
      href: '/about',
      background: 'bg-[#858ae3]',
    },
    {
      id: nanoid(),
      name: 'Gallery',
      href: '/gallery',
      background: 'bg-[#613dc1]',
    },
    {
      id: nanoid(),
      name: 'Contact',
      href: '/contact',
      background: 'bg-[#4e148c]',
    },
  ];

  const [navbar, setNavbar] = useState(false);

  const toggleNav = () => {
    setNavbar((prev) => !prev);
  };

  const closeNav = () => {
    setNavbar(false);
  };

  return (
    <nav className='fixed md:top-1/2 md:transform md:-translate-y-1/2 right-0 p-4'>
      <div className='text-right md:hidden'>
        <button onClick={toggleNav}>
          {navbar ? (
            <RiCloseLine className='text-white text-4xl border-2 border-white rounded-full hover:rotate-[360deg] hover:duration-1000 w-[60px] h-[60px] p-2' />
          ) : (
            <RiMenu3Line className='text-white text-4xl border-2 border-white rounded-full hover:rotate-[360deg] hover:duration-1000 w-[60px] h-[60px] p-3' />
          )}
        </button>
      </div>

      <div className={`md:block ${navbar ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col'>
          {navMenuData.map((menu) => (
            <Link key={menu.id} href={menu.href}>
              <li onClick={closeNav}
                className={`flex justify-center items-center text-white font-bold tracking-wide rounded-full m-2 px-6 py-2 hover:rotate-[360deg] hover:duration-1000 cursor-pointer w-[100px] h-[100px] md:text-lg md:m-3 ${menu.background}`}
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
