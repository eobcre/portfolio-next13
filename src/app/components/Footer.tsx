import Link from 'next/link';
import { getFooterNavData } from '../data/data';
import { getFooterIconData } from '../data/data';
import { ReactElement } from 'react';

interface FooterIconType {
  id: string;
  icon: ReactElement;
  href: string;
  target?: string;
  rel?: string;
}

const Footer: React.FC<FooterIconType> = () => {
  return (
    <footer className='bg-[#0D1225] flex items-center text-gray-300 text-sm px-6 py-10 w-full'>
      <p className='mr-10'>
        &copy; {new Date().getFullYear()} Emmy Manning All Rights Reserved.
      </p>
      <div className='flex gap-5 mr-10'>
        {getFooterNavData().map((nav) => (
          <Link href={nav.href} className={nav.style}>
            <p>{nav.name}</p>
          </Link>
        ))}
      </div>
      <div className='flex gap-4'>
        {getFooterIconData().map((icon: FooterIconType) => (
          <Link
            key={icon.id}
            href={icon.href}
            target={icon.target}
            rel={icon.rel}
          >
            {icon.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
