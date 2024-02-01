import React from 'react'
import Link from 'next/link';
import { getIconBarData } from '@/app/data/data';

const IconBar = React.memo(() => {

  return (
    <div className='pt-4 pb-16 lg:pt-1'>
      <ul className='flex gap-5'>
        {getIconBarData().map((menu) => (
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
    </div>
  );
});

// display name
IconBar.displayName = 'IconBar';

export default IconBar;
