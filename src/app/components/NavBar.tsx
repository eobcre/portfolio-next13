import Link from 'next/link';
import { nanoid } from 'nanoid';

const NavBar = () => {
  const navMenuData = [
    {
      id: nanoid(),
      name: 'Home',
      href: '/',
      background: 'bg-[#97dffc] hover:text-[#4e148c] duration-500',
    },
    {
      id: nanoid(),
      name: 'About',
      href: '/about',
      background: 'bg-[#858ae3] hover:text-[#613dc1] duration-500',
    },
    {
      id: nanoid(),
      name: 'Gallery',
      href: '/gallery',
      background: 'bg-[#613dc1] hover:text-[#858ae3] duration-500',
    },
    {
      id: nanoid(),
      name: 'Contact',
      href: '/contact',
      background: 'bg-[#4e148c] hover:text-[#97dffc] duration-500',
    },
  ];

  return (
    <nav className='fixed top-1/2 transform -translate-y-1/2 right-0 p-4'>
      <ul className='flex flex-col'>
        {navMenuData.map((menu, index) => (
          <Link key={menu.id} href={menu.href}>
            <li
              className={`flex justify-center items-center text-white text-lg font-bold tracking-wide rounded-full mb-4 w-[110px] h-[110px] ${
                menu.background
              }`}
            >
              {menu.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
