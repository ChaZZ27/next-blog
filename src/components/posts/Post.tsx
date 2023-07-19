import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Post = ({title, tags, reactions, id,  image = `https://picsum.photos/id/${id}/800/400.jpg`, customClass}: PostType) => {  
  
  return (
    
        <article className={`d-block ${customClass}`}>
          <div className='rounded-md mb-4'>
            <Image src={image} width={800} height={400} alt='Post picture' className='rounded-xl' />
          </div>
          <h3 className='font-bold text-xl md:text-2xl lg:text-4xl mb-4 transition-all hover:text-slate-500'><Link href={`/blog/${id}`}>{title}</Link></h3>
          <div className='flex flex-row flex-wrap items-center justify-between mb-3'>
            <p className='text-sm'><strong>Tags:</strong> {tags?.join(', ')}</p>
            <p className='text-lg'>&#128077; {reactions}</p>
          </div>
          <div></div>
          <Link href={`/blog/${id}`} className="inline-block px-4 py-2 font-semibold text-md bg-slate-800 text-white rounded-full shadow-sm hover:bg-slate-600 hover:shadow-md">Read more</Link>
        </article>
  )
}

export default Post