'use client';

import { dataURL, fetchData } from '@/lib/fetchData';
import Post from "@/components/posts/Post";
import Loader from '@/components/helpers/Loader';
import { useState, useEffect } from "react";

const Blog = () => {
  const [limit, setLimit] = useState(10);
  const [posts, setPosts] = useState<PostType[]>([])
  const [total, setTotal] = useState(limit)
  const [loading, setLoading] = useState(true);

  const loadMoreHandler = async () => {
    try {
      let fetchURL = `${dataURL}?limit=${limit}`;
      const {posts, total} = await fetchData(`${dataURL}?limit=${limit}`)  

      setPosts(posts);
      setLimit(limit+10);
      setTotal(total);
      setLoading(false)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadMoreHandler()
  }, [])
  

  const loadMoreButton = <div className='text-center py-10'><button className='inline-block px-4 py-2 my-4 font-semibold text-md bg-slate-800 text-white rounded-full tracking-widest shadow-sm hover:bg-slate-600 hover:shadow-md' onClick={loadMoreHandler}>Load more</button></div>

  return <section className='container mx-auto px-4'>
        <h1 className='text-md md:text-5xl'>Blog</h1>
        <p className='my-2'>Check out our new posts!</p>
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2'>
          {loading ? <Loader /> : posts.map((item: PostType) => 
            <Post key={item.id} {...item} customClass={'w-full my-6'} />
          )}
        </div>
        {total !== limit && loadMoreButton}
  </section>
  
}


export default Blog;