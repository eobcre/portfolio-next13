import Link from 'next/link';
import { getFooterNavData } from '../data/data';
import { getFooterIconData } from '../data/data';

const Footer = () => {
  return (
    <footer className='bg-[#0D1225] flex justify-center text-gray-300 text-sm px-6 py-10 w-full'>
      <div className='flex flex-col sm:flex-row'>
        <div className='mb-1'>
          <p className='mr-10'>
            &copy; {new Date().getFullYear()} Emmy Manning All Rights Reserved.
          </p>
        </div>
        <div className='sm:flex'>
          <div className='flex gap-5 mb-2 mr-10'>
            {getFooterNavData().map((nav) => (
              <Link key={nav.id} href={nav.href} className={nav.style}>
                <p>{nav.name}</p>
              </Link>
            ))}
          </div>
          <div className='flex gap-4'>
            {getFooterIconData().map((icon) => (
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
