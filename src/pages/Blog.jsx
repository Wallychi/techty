import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <section className='flex flex-col font-space '>
        <div className='fixed z-40 w-full bg-[#F1F1F1]'>
          <NavBar />
        </div>
        <div className='flex flex-col bg-[#F1F1F1] gap-10 lg:gap-15 pb-10 lg:pb-25 mt-15'>
          <div className='flex flex-col items-center px-5 lg:px-15 py-7 lg:py-10 gap-5 lg:gap-7'>
          <h1 className='text-4xl lg:text-5xl font-bold lg:font-semibold'>Our Blog</h1>
          <p className='w-full lg:w-1/2 text-center text-[#6F7681] leading-6'>We're constantly pushing the boundaries of what's
           possible and seeking new ways to improve our services.</p>
           
           <div className='flex flex-col lg:flex-row bg-white rounded-xl items-center gap-2 lg:gap-5'>
            <img src='/images/blog_mainpic.png' alt='Blog main picture' className='lg:basis-1/2'/>
            <div className='flex flex-col gap-5 lg:gap-10 lg:basis-1/2 p-4 lg:p-5'>
              <p>May 30, 2025</p>
              <p className='lg:w-5/6 text-3xl lg:text-4xl font-bold lg:font-semibold'>5 reasons why Techty is the go-to choice for small business.</p>
              <p className='lg:w-5/6'>Let us manage your IT for you so that you can get back to doing what you do best.</p>
            </div>
           </div>
        </div>
        <hr className='text-white border-t-2 lg:border-t-4' />
        
        <div className='flex flex-col gap-3 lg:gap-5 items-center mx-5 lg:mx-15'>
          <h1 className='text-4xl font-semibold'>Read All Articles</h1>
          <p className='text-center lg:w-1/2 text-[#6F7681] leading-6'>We're constantly pushing the boundaries of what's
           possible and seeking new ways to improve our services.</p>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            
            <div className='flex flex-col gap-4 rounded-2xl bg-white pb-5'>
              <img src='/images/blog_subpic 1.png' alt='Image of phone and laptop' />
              <div className='flex flex-col px-3 gap-3'>
              <p className='text-[#6F7681]'>May 30, 2025</p>
              <p className='lg:w-5/6 text-xl font-semibold'>5 reasons why Techty is the go-to choice for small business.</p>
              <p className='lg:w-10/11 text-[#6F7681]'>Let us manage your IT for you so that you can get back to doing what you do best.</p>
              </div>
            </div>
            
            <div className='flex flex-col gap-4 rounded-2xl bg-white pb-5'>
              <img src='/images/blog_subpic 2.png' alt='Image of a man with VR googles' />
              <div className='flex flex-col px-3 gap-3'>
              <p className='text-[#6F7681]'>May 30, 2025</p>
              <p className='lg:w-10/11 text-xl font-semibold'>The future is now: Explore Techty's AI-Powered tools</p>
              <p className='lg:w-10/11 text-[#6F7681]'>Let us manage your IT for you so that you can get back to doing what you do best.</p>
              </div>
            </div>
            
            <div className='flex flex-col gap-4 rounded-2xl bg-white pb-5'>
              <img src='/images/blog_subpic 3.png' alt='Image of someone typing' />
              <div className='flex flex-col px-3 gap-3'>
              <p className='text-[#6F7681]'>May 30, 2025</p>
              <p className='lg:w-8/9 text-xl font-semibold'>Cybersecurity threats in 2023: How AI can keep you protected</p>
              <p className='lg:w-10/11 text-[#6F7681]'>Let us manage your IT for you so that you can get back to doing what you do best.</p>
              </div>
            </div>

            <div className='flex flex-col gap-4 rounded-2xl bg-white pb-5'>
              <img src='/images/blog_subpic 1.png' alt='Image of phone and laptop' />
              <div className='flex flex-col px-3 gap-3'>
              <p className='text-[#6F7681]'>May 30, 2025</p>
              <p className='lg:w-5/6 text-xl font-semibold'>5 reasons why Techty is the go-to choice for small business.</p>
              <p className='lg:w-10/11 text-[#6F7681]'>Let us manage your IT for you so that you can get back to doing what you do best.</p>
              </div>
            </div>

             <div className='flex flex-col gap-4 rounded-2xl bg-white pb-5'>
              <img src='/images/blog_subpic 2.png' alt='Image of a man with VR googles' />
              <div className='flex flex-col px-3 gap-3'>
              <p className='text-[#6F7681]'>May 30, 2025</p>
              <p className='lg:w-10/11 text-xl font-semibold'>The future is now: Explore Techty's AI-Powered tools</p>
              <p className='lg:w-10/11 text-[#6F7681]'>Let us manage your IT for you so that you can get back to doing what you do best.</p>
              </div>
            </div>

            <div className='flex flex-col gap-4 rounded-2xl bg-white pb-5'>
              <img src='/images/blog_subpic 3.png' alt='Image of someone typing' />
              <div className='flex flex-col px-3 gap-3'>
              <p className='text-[#6F7681]'>May 30, 2025</p>
              <p className='lg:w-8/9 text-xl font-semibold'>Cybersecurity threats in 2023: How AI can keep you protected</p>
              <p className='lg:w-10/11 text-[#6F7681]'>Let us manage your IT for you so that you can get back to doing what you do best.</p>
              </div>
            </div>
           </div>
        </div>
        </div>
        <div className='z-50'>
          <Footer />
        </div>
    </section>
  )
}

export default Blog