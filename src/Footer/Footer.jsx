import React from 'react'
import img1  from '../../public/footer-1.jpg'

const Footer = () => {
  return (
      <div className='flex md:flex-row flex-col gap-5 w-4/5 mx-auto mt-10 mb-20'>
          <div
              className="hero min-h-screen"
              style={{
                  backgroundImage: `url(${img1})`,
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content ">
                  <div className="max-w-md">
                      <h5 className="mb-5 text-2xl font-bold">Share your work</h5>
                      <h1 className='text-4xl md:text-5xl'>
                          Submit your website for visibility and recognition
                      </h1>
                      <button className="border border-white text-white bg-transparent hover:bg-white hover:text-gray-800 px-5 py-3 md:px-10 md:pt-4 md:pb-7 rounded text-2xl mt-10">
                          Submit Website
                      </button>


                  </div>

              </div>
          </div>
          <div
              className="hero min-h-screen"
              style={{
                  backgroundImage: `url(${img1})`,
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content ">
                  <div className="max-w-md">
                      <h5 className="mb-5 text-2xl font-bold">Be a member</h5>
                      <h1 className='text-4xl md:text-5xl'>Get access to special pro features</h1>
                      <button className="border border-white text-white bg-transparent hover:bg-white hover:text-gray-800 px-5 py-3 md:px-10 md:pt-4 md:pb-7 rounded text-2xl mt-10">
                          Be Pro
                      </button>
                  </div>

              </div>
              

          </div>
      </div>
  )
}

export default Footer