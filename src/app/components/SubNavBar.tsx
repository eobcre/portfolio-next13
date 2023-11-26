import Link from 'next/link';
import { nanoid } from 'nanoid';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const SubNavBar = () => {
  const subNavMenuData = [
    {
      id: nanoid(),
      icon: (
        <BsLinkedin className='text-white text-3xl' />
      ),
      href: 'https://www.linkedin.com/in/emmymanning',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      id: nanoid(),
      icon: (
        <BsGithub className='text-white text-3xl' />
      ),
      href: 'https://github.com/eobcre',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      id: nanoid(),
      icon: <HiOutlineMail className='text-white text-4xl' />,
      href: 'mailto:eobcre@gmail.com',
    },
  ];

  return (
    <nav>
      <ul className='flex gap-5 p-4'>
        {subNavMenuData.map((menu) => (
          <Link
            key={menu.id}
            href={menu.href}
            target={menu.target}
            rel={menu.rel}
          >
            <li className='flex justify-center items-center hover:opacity-70 hover:duration-500 border-2 border-solid border-white rounded-full w-[60px] h-[60px]'>
              {menu.icon}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default SubNavBar;
