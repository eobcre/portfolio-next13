import Link from 'next/link';
import { nanoid } from 'nanoid';

const NavBar = () => {
  const navMenuData = [
    {
      id: nanoid(),
      name: 'Home',
      url: '/',
      background: 'bg-[#97dffc]',
    },
    {
      id: nanoid(),
      name: 'About',
      url: '/about',
      background: 'bg-[#858ae3]',
    },
    {
      id: nanoid(),
      name: 'Gallery',
      url: '/gallery',
      background: 'bg-[#613dc1]',
    },
    {
      id: nanoid(),
      name: 'Contact',
      url: '/contact',
      background: 'bg-[#4e148c]',
    },
    {
      id: nanoid(),
      name: 'Resume',
      url: '/resume',
      background: 'bg-[#2c0735]',
    },
  ];

  return (
    <nav>
      <ul className='flex justify-center'>
        {navMenuData.map((menu, index) => (
          <Link key={menu.id} href={menu.url}>
            <li
              className={`flex justify-center items-center text-white text-lg tracking-wide w-[130px] h-[130px] ${
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
