import Link from 'next/link';
import { nanoid } from 'nanoid';

const NavBar = () => {
  const navMenuData = [
    {
      id: nanoid(),
      name: 'Home',
      href: '/',
      background: 'bg-[#ffc971]',
    },
    {
      id: nanoid(),
      name: 'About',
      href: '/about',
      background: 'bg-[#ffb627]',
    },
    {
      id: nanoid(),
      name: 'Gallery',
      href: '/gallery',
      background: 'bg-[#ff9505]',
    },
    {
      id: nanoid(),
      name: 'Contact',
      href: '/contact',
      background: 'bg-[#e2711d]',
    },
    {
      id: nanoid(),
      name: 'Resume',
      href: '/resume',
      background: 'bg-[#cc5803]',
    },
  ];

  return (
    <nav>
      <ul className='flex justify-center'>
        {navMenuData.map((menu, index) => (
          <Link key={menu.id} href={menu.href}>
            <li
              className={`flex justify-center items-center text-[#303030] text-lg tracking-wide w-[130px] h-[130px] ${
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
