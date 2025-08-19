import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='flex flex-col justify-between min-w-full h-screen font-space'>
      <div className='bg-[#F0F8FF]'>
        <NavBar />
        <div className='flex mx-15 items-center gap-20 pb-25'>
          <img src='/images/abouttechty.png' alt='Image of a man and woman' className='basis-1/2' />
          <div className='flex flex-col gap-5 basis-1/2'>
            <h1 className='text-5xl font-extrabold'><span className='text-green-500'>About</span> Techty</h1>
            <p className='text-[#4E4E4E] text-lg text-justify'>We're constantly pushing the boundaries of what's<br /> possible and seeking new ways to improve our services<br /> and help our clients achieve their goals.</p>
            <h1 className='text-3xl font-bold'>Vision</h1>
            <p className='text-[#4E4E4E] text-lg text-justify'>Our vision is to create a better financial future for<br /> everyone. We believe that everyone deserves access to<br /> financial services and resources that empower them to<br /> achieve their goals.</p>
            <h1 className='text-3xl font-bold'>Mission</h1>
            <p className='text-[#4E4E4E] text-lg text-justify'>We're on a mission to empower people to take control of<br /> their finances and achieve their goals. We believe that<br /> everyone should have access to the tools and resources<br /> they have and make smart financial decisions.</p>
          </div>
        </div>
      </div>

      <div className='flex mx-15 mt-30 items-center gap-20'>
        <div className='flex flex-col gap-8'>
          <h1 className='text-3xl font-bold'>Message from <span className='text-green-500'>Founder</span></h1>
          <div>
            <p className='text-[#4E4E4E] text-xl text-justify w-125 leading-7'>
              I would like to take a moment to express my sincere gratitude for choosing our IT services. As the founder of this company, I am proud to say that we are committed to providing the best possible solutions for your business needs.<br /><br />
              We understand the challenges that come with managing an enterprise in the digital age, and we are dedicated to delivering innovative and reliable IT services to help you navigate these challenges with ease.<br /><br />
              Our team of experts is constantly working to improve our services and stay up-to-date with the latest technological advancements. We strive to provide personalized solutions that cater to your specific requirements, ensuring that your business operations run smoothly and efficiently.
            </p>
          </div>
          <div>
            <p className='font-semibold text-2xl'>John Willams</p>
            <p className='text-[#4E4E4E] text-xl'>Founder, Ceo</p>
          </div>
        </div>
        <img src='/images/foundermessage.png' alt="'Image of the Techty's founder" className='' />
      </div>

      <div className='flex flex-col items-center mt-30 pb-30 mx-15'>
        <h1 className='text-center text-5xl font-bold'>Our <span className='text-green-500'>team</span> behind all<br /> the success we have</h1>
        <div className='grid grid-cols-4 gap-5 mt-15'>
          <div className='flex flex-col gap-7'>
            <img src='/images/techty_team 1.png' alt='Image of a Techty Team Member' className='rounded-xl' />
            <div className='flex flex-col gap-2'>
              <p className='font-bold text-2xl'>Hyeon Vivek</p>
              <p className='text-[#4E4E4E] text-xl'>Financial Consultant</p>
            </div>
          </div>

          <div className='flex flex-col gap-7'>
            <img src='/images/techty_team 2.png' alt='Image of a Techty Team Member' className='rounded-xl' />
            <div className='flex flex-col gap-2'>
              <p className='font-bold text-2xl'>Hyeon Vivek</p>
              <p className='text-[#4E4E4E] text-xl'>Financial Consultant</p>
            </div>
          </div>

          <div className='flex flex-col gap-7'>
            <img src='/images/techty_team 1.png' alt='Image of a Techty Team Member' className='rounded-xl' />
            <div className='flex flex-col gap-2'>
              <p className='font-bold text-2xl'>Hyeon Vivek</p>
              <p className='text-[#4E4E4E] text-xl'>Financial Consultant</p>
            </div>
          </div>

          <div className='flex flex-col gap-7'>
            <img src='/images/techty_team 2.png' alt='Image of a Techty Team Member' className='rounded-xl' />
            <div className='flex flex-col gap-2'>
              <p className='font-bold text-2xl'>Hyeon Vivek</p>
              <p className='text-[#4E4E4E] text-xl'>Financial Consultant</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default About