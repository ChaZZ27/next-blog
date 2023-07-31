import React from 'react'
import { useSelectedLayoutSegments } from 'next/navigation'
import Link from 'next/link';

const Breadcrumbs = () => {
  const segments = useSelectedLayoutSegments()  

  return <div className='breadcrumbs border-b-2'>
    <div className='container mx-auto'>
      <ul className='list-none flex flex-row p-4 space-x-2'>

        <li><Link href={'/'}>&#127968;</Link></li>
        {segments.map((breadcrumb, index) => {
          const path = `/${segments.slice(0, index + 1).join('/')}`;
          const currentItem = index === segments.length - 1;
          
          if (currentItem) {
            return <li key={index}><span className='font-bold'>/ {breadcrumb}</span></li>
          } else {
            return <li key={index}><Link href={path}>/ {breadcrumb}</Link></li>
          }
        })}
          
      </ul>
    </div>
  </div>
}

export default Breadcrumbs;