import Link from 'next/link';
import { nanoid } from 'nanoid';

const NavBar = () => {
  const navMenu = [
    { id: nanoid(), name: 'Home', url: '#home', background: 'bg-[#97dffc]'},
    { id: nanoid(), name: 'About', url: '/about', background: 'bg-[#858ae3]'},
    { id: nanoid(), name: 'Gallery', url: '/gallery', background: 'bg-[#613dc1]'},
    { id: nanoid(), name: 'Contact', url: '/contact', background: 'bg-[#4e148c]'},
    { id: nanoid(), name: 'Resume', url: '/resume', background: 'bg-[#2c0735]'},
  ];

  return (
    <nav className='flex justify-end'>
      <ul>
        {navMenu.map((menu) => (
          <Link key={menu.id} href={menu.url}>
            <li
              className={`flex justify-center items-center text-white text-lg uppercase tracking-wider w-[200px] h-[20vh] ${menu.background}`}
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
