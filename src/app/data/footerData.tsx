import { nanoid } from 'nanoid';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

// * * * footer nav
export function getFooterNavData() {
  return [
    {
      id: nanoid(),
      name: 'About',
      href: '/about',
      style: 'hover:border-[#97dffc] hover:border-b-2 hover:duration-200',
      line: '|',
    },
    {
      id: nanoid(),
      name: 'Gallery',
      href: '/gallery',
      style: 'hover:border-[#97dffc] hover:border-b-2 hover:duration-200',
      line: '|',
    },
    {
      id: nanoid(),
      name: 'Contact',
      href: '/contact',
      style: 'hover:border-[#97dffc] hover:border-b-2 hover:duration-200',
      line: '|',
    },
    {
      id: nanoid(),
      name: 'Resume',
      href: './',
      style: 'hover:border-[#97dffc] hover:border-b-2 hover:duration-200',
    },
  ];
}

// * * * footer icon
export function getFooterIconData() {
  return [
    {
      id: nanoid(),
      icon: <BsLinkedin className='text-xl text-white' />,
      href: 'https://www.linkedin.com/in/emmymanning',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      id: nanoid(),
      icon: <BsGithub className='text-white text-xl' />,
      href: 'https://github.com/eobcre',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      id: nanoid(),
      icon: <HiOutlineMail className='text-white text-2xl' />,
      href: 'mailto:eobcre@gmail.com',
    },
  ];
}