import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <section className='flex flex-col font-space '>
        <NavBar />
        <div className='flex flex-col bg-[#F1F1F1] gap-15 pb-25'>
          <div className='flex flex-col items-center px-15 py-10 gap-7'>
          <h1 className='text-5xl font-semibold'>Our Blog</h1>
          <p className='text-center text-[#6F7681] leading-6'>We're constantly pushing the boundaries of what's<br />
           possible and seeking new ways to improve our<br /> services.</p>
           <div className='flex bg-white rounded-xl items-center gap-5'>
            <img src='/images/blog_mainpic.png' alt='Blog main picture' className='basis-1/2'/>
            <div className='flex flex-col gap-10 basis-1/2 p-5'>
              <p>May 30, 2025</p>
              <p className='text-4xl font-semibold'>5 reasons why Techty<br /> is the go-to choice for<br /> small business.</p>
              <p>Let us manage your IT for you so that you can get back<br /> to doing what you do best.</p>
            </div>
           </div>
        </div>
        <hr className='text-white border-t-4' />
        <div className='flex flex-col gap-5 items-center mx-15'>
          <h1 className='text-4xl font-semibold'>Read All Articles</h1>
          <p className='text-center text-[#6F7681] leading-6'>We're constantly pushing the boundaries of what's<br />
           possible and seeking new ways to improve our<br /> services.</p>
           <div className='grid grid-cols-3 gap-5'>
            
            <div className='flex flex-col gap-4 rounded-2xl bg-white pb-5'>
              <img src='/images/blog_subpic 1.png' alt='Image of phone and laptop' />
              <div className='flex flex-col px-3 gap-3'>
              <p className='text-[#6F7681]'>May 30, 2025</p>
              <p className='text-xl font-semibold'>5 reasons why Techty is the go-<br />to choice for small business.</p>
              <p className='text-[#6F7681]'>Let us manage your IT for you so that you<br /> can get back to doing what you do best.</p>
              </div>
            </div>
            
            <div className='flex flex-col gap-4 rounded-2xl bg-white pb-5'>
              <img src='/images/blog_subpic 2.png' alt='Image of a man with VR googles' />
              <div className='flex flex-col px-3 gap-3'>
              <p className='text-[#6F7681]'>May 30, 2025</p>
              <p className='text-xl font-semibold'>The future is now: Explore<br/> Techty's AI-Powered tools</p>
              <p className='text-[#6F7681]'>Let us manage your IT for you so that you<br /> can get back to doing what you do best.</p>
              </div>
            </div>
            
            <div className='flex flex-col gap-4 rounded-2xl bg-white pb-5'>
              <img src='/images/blog_subpic 3.png' alt='Image of someone typing' />
              <div className='flex flex-col px-3 gap-3'>
              <p className='text-[#6F7681]'>May 30, 2025</p>
              <p className='text-xl font-semibold'>Cybersecurity threats in 2023:<br /> How AI can keep you protected</p>
              <p className='text-[#6F7681]'>Let us manage your IT for you so that you<br /> can get back to doing what you do best.</p>
              </div>
            </div>

            <div className='flex flex-col gap-4 rounded-2xl bg-white pb-5'>
              <img src='/images/blog_subpic 1.png' alt='Image of phone and laptop' />
              <div className='flex flex-col px-3 gap-3'>
              <p className='text-[#6F7681]'>May 30, 2025</p>
              <p className='text-xl font-semibold'>5 reasons why Techty is the go-<br />to choice for small business.</p>
              <p className='text-[#6F7681]'>Let us manage your IT for you so that you<br /> can get back to doing what you do best.</p>
              </div>
            </div>

             <div className='flex flex-col gap-4 rounded-2xl bg-white pb-5'>
              <img src='/images/blog_subpic 2.png' alt='Image of a man with VR googles' />
              <div className='flex flex-col px-3 gap-3'>
              <p className='text-[#6F7681]'>May 30, 2025</p>
              <p className='text-xl font-semibold'>The future is now: Explore<br/> Techty's AI-Powered tools</p>
              <p className='text-[#6F7681]'>Let us manage your IT for you so that you<br /> can get back to doing what you do best.</p>
              </div>
            </div>

            <div className='flex flex-col gap-4 rounded-2xl bg-white pb-5'>
              <img src='/images/blog_subpic 3.png' alt='Image of someone typing' />
              <div className='flex flex-col px-3 gap-3'>
              <p className='text-[#6F7681]'>May 30, 2025</p>
              <p className='text-xl font-semibold'>Cybersecurity threats in 2023:<br /> How AI can keep you protected</p>
              <p className='text-[#6F7681]'>Let us manage your IT for you so that you<br /> can get back to doing what you do best.</p>
              </div>
            </div>
           </div>
        </div>
        </div>
        <Footer />
    </section>
  )
}

export default Blog