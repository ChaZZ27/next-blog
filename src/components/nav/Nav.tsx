'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav: React.FC<NavProps> = ({items}) => {
    const pathname = usePathname();    
    
    return (
        <nav className='flex sm:justify-center space-x-4'>
            {items.map(([title, url], index) => <Link key={index} href={url} title={title} className={`rounded-lg px-3 py-2 font-medium hover:text-amber-200 ${pathname === url ? 'text-amber-500' : 'text-white'}`}>{title}</Link>)}
        </nav>
  )
}

export default Nav;