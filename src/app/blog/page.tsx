'use client';

import { dataURL, fetchData } from '@/lib/fetchData';
import Post from "@/components/posts/Post";
import Loader from '@/components/helpers/Loader';
import { useState, useEffect } from "react";

const Blog = () => {
  
  let LIMIT = 10;
  const [skip, setSkip] = useState(10);
  const [posts, setPosts] = useState<PostType[]>([])
  const [total, setTotal] = useState(LIMIT)
  const [loading, setLoading] = useState(true);
  let fetchURL = `${dataURL}?limit=${LIMIT}`;

  const initialFetch = async () => {
    try {
      const {posts, total} = await fetchData(fetchURL)  

      setPosts(posts);
      setTotal(total);      
      setLoading(false)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const loadMoreHandler = async () => {
    try {
      const {posts: newPosts} = await fetchData(fetchURL+`&skip=${skip}`)  
      const newSkip = skip + 10;

      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setSkip(newSkip)
      
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    initialFetch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {posts.length !== total && loadMoreButton}
  </section>
  
}


export default Blog;