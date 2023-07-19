import Link from "next/link";
import Image from 'next/image'
import image from '../assets/blog.jpg'

export const metadata = {
  title: {
    default: 'React Blog',
    template: '%s | React Blog'
  },
  description: 'Portfolio project created with Next.js',
}

const App = () => {

  return (
    <div className='container mx-auto px-4'>
          <div className='grid gap-10 grid-cols-1'>
            <div className="relative h-80">
              <Image src={image} className="object-cover" fill={true} alt="Photo by Andrew Neel on Unsplash" />
            </div>
            <div className='w-full flex flex-wrap items-center
             my-4'>
              <p className='text-md w-full text-md md:text-6xl ter'>Hello stranger!</p>
              <h1 className="mb-4 text-md md:text-6xl w-full">Welcome to our blog!</h1>
              <p className="text-md md:text-4xl w-full my-4">Everything you are looking for is here.
                <br />
                
                We hope you will <strong className='text-slate-500'>enjoy our blog</strong>!
              </p>
              <Link href={`/blog`} className="inline-block px-4 py-2 my-4 font-semibold text-md bg-slate-800 text-white rounded-full tracking-widest shadow-sm hover:bg-slate-600 hover:shadow-md">Visit blog</Link>
            </div>
          </div>
    </div>
    
  )
}


export default App;