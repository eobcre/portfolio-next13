import Link from 'next/link';
import { nanoid } from 'nanoid';

const NavBar = () => {
  const navMenuData = [
    {
      id: nanoid(),
      name: 'Home',
      href: '/',
      background: 'bg-[#97dffc] hover:text-[#2c0735] duration-500',
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
      background: 'bg-[#4e148c] hover:text-[#858ae3] duration-500',
    },
    {
      id: nanoid(),
      name: 'Resume',
      href: '/resume',
      background: 'bg-[#2c0735] hover:text-[#97dffc] duration-500',
    },
  ];

  return (
    <nav>
      <ul className='flex justify-center'>
        {navMenuData.map((menu, index) => (
          <Link key={menu.id} href={menu.href}>
            <li
              className={`flex justify-center items-center text-white text-lg font-bold tracking-wide w-[130px] h-[130px] ${
                menu.background
              } ${
                index === 0
                  ? 'rounded-bl-lg'
                  : index === navMenuData.length - 1
                  ? 'rounded-br-lg'
                  : ''
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
