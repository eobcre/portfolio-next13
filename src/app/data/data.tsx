import { nanoid } from 'nanoid';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

// * * * nav bar
export function getNavData() {
  return [
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
}

// * * * icon bar
export function getIconBarData() {
  return [
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
      icon: <span className='text-white text-xl tracking-wider'>CV</span>,
      href: '',
    },
  ];
}

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
