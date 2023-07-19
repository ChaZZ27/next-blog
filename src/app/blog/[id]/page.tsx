import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from "react";
import { dataURL, fetchData } from '@/lib/fetchData';

const PostPage = async ({params: { id }}: { params: { id: string}})  => {
  
  const fallback = <div className='flex items-center justify-center'>Loading...</div>
  const data = await fetchData(`${dataURL}/${id}`)
  const postImageUrl = `https://picsum.photos/id/${id}/1500/400.jpg`;  
    
  const {total} = await fetchData(`${dataURL}`)
  
  return <Suspense fallback={fallback}>
      <section className='container mx-auto px-4'>
        <div className='relative h-96'>
          <Image src={postImageUrl} className='object-cover' fill={true} alt="Post title" />
        </div>
        <h1 className='text-2xl md:text-5xl my-5'>{data.title}</h1>
        <p className='md:text-md my-5'>{data.body}</p>
        <div className='flex flex-row flex-wrap items-center justify-between mb-3'>
          <p className='text-sm'><strong>Tags:</strong> {data.tags?.join(", ")}</p>
          <p className='text-lg'>&#128077; {data.reactions}</p>
        </div>
        <div className='flex flex-col sm:flex-row flex-wrap items-center justify-between gap-y-2'>
          {data.id > 1 && <Link href={`/blog/${Number(id) - 1}`} className='inline-block px-4 py-2 font-semibold text-md bg-slate-800 text-white rounded-full shadow-sm hover:bg-slate-600 hover:shadow-md'>&larr; Previous post</Link>}
          {data.id < total && <Link href={`/blog/${Number(id) + 1}`} className='inline-block px-4 py-2 font-semibold text-md bg-slate-800 text-white rounded-full shadow-sm hover:bg-slate-600 hover:shadow-md'>Next post &rarr;</Link>}
        </div>
      </section>
    </Suspense>
}

export default PostPage;
