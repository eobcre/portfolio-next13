import Link from 'next/link';
import { nanoid } from 'nanoid';

const NavBar = () => {
  const navMenuData = [
    {
      id: nanoid(),
      name: 'Home',
      href: '/',
      background: 'bg-[#ffc971] hover:text-[#cc5803] duration-500',
    },
    {
      id: nanoid(),
      name: 'About',
      href: '/about',
      background: 'bg-[#ffb627] hover:text-[#e2711d] duration-500',
    },
    {
      id: nanoid(),
      name: 'Gallery',
      href: '/gallery',
      background: 'bg-[#ff9505] hover:text-[#e2711d] duration-500'
    },
    {
      id: nanoid(),
      name: 'Contact',
      href: '/contact',
      background: 'bg-[#e2711d] hover:text-[#ff9505] duration-500',
    },
    {
      id: nanoid(),
      name: 'Resume',
      href: '/resume',
      background: 'bg-[#cc5803] hover:text-[#ffc971] duration-500',
    },
  ];

  return (
    <nav>
      <ul className='flex justify-center'>
        {navMenuData.map((menu, index) => (
          <Link key={menu.id} href={menu.href}>
            <li
              className={`flex justify-center items-center text-[#303030] text-lg font-bold uppercase tracking-wide w-[130px] h-[130px] ${
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
