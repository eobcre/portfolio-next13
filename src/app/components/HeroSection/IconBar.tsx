import Link from 'next/link';
import { nanoid } from 'nanoid';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const IconBar = () => {
  const subNavMenuData = [
    {
      id: nanoid(),
      icon: <BsLinkedin className='text-white text-2xl' />,
      href: 'https://www.linkedin.com/in/emmymanning',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      id: nanoid(),
      icon: <BsGithub className='text-white text-3xl' />,
      href: 'https://github.com/eobcre',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      id: nanoid(),
      icon: <HiOutlineMail className='text-white text-3xl' />,
      href: 'mailto:eobcre@gmail.com',
    },
    {
      id: nanoid(),
      icon: (
        <span className='text-white text-xl tracking-wider'>CV</span>
      ),
      href: '',
    },
  ];

  return (
    <nav>
      <ul className='flex gap-5 py-4'>
        {subNavMenuData.map((menu) => (
          <Link
            key={menu.id}
            href={menu.href}
            target={menu.target}
            rel={menu.rel}
          >
            <li className='flex justify-center items-center border-2 hover:border-4 hover:border-white rounded-full cursor-pointer w-[60px] h-[60px]'>
              {menu.icon}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default IconBar;
