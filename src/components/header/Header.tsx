"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Nav from '../nav/Nav';
import Breadcrubs from '../breadcrumbs/Breadcrumbs';

const navigationData: NavItem[] = [
  ['Home', '/'],
  ['Blog', '/blog']
]

const PAGE_TITLE = 'React Blog';

const Header = () => {
  const pathname = usePathname();

  return <>
    <header className='header border-b bg-slate-900'>
        <div className='container mx-auto'>
          <div className='flex items-center space-x-6 p-4'>
            <h2 className='text-lg md:text-6xl mr-4 text-white'><Link href="/">{PAGE_TITLE}</Link></h2>
            <Nav items={navigationData} />
          </div>
        </div>
    </header>
    {pathname !== '/' && <Breadcrubs />}
  </>
}

export default Header