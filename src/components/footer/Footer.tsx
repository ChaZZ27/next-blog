import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white flex flex-row items-center flex-wrap p-4' data-cy-root="test-footer">
      <div className='copyrights w-full'>
        <p className='text-sm text-center'>	&copy; 2023 NextBlog</p>
      </div>
    </footer>
  )
}

export default Footer;