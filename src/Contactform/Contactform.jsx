import React from 'react'

const Contactform = () => {
  return (
      <div className="hero min-h-screen px-0 gap-20">
          <div className="hero-content flex-col lg:flex-row w-full">
              {/* Text Section */}
              <div className="text-center lg:text-left w-full lg:pr-32 md:w-1/2 max-w-screen-md pr-20">
                  <h1 className="text-5xl font-bold">Contact form</h1>
                  <p className="py-6 font-medium opacity-50 text-xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus, repellendus minus saepe doloribus voluptatibus illum enim excepturi, ea repudiandae fuga minima obcaecati aspernatur voluptate facilis hic ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et numquam culpa ea quia in, officia dignissimos! Id adipisci earum ut.
                  </p>
              </div>

              {/* Form Section */}
              <div className="card bg-base-100 w-full md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                  <form className="card-body">
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Name</span>
                          </label>
                          <input type="text" placeholder="Your Name" className="input input-bordered" required />
                      </div>
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Email</span>
                          </label>
                          <input type="email" placeholder="Your email" className="input input-bordered" required />
                      </div>
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Message</span>
                          </label>
                          <textarea placeholder="Your Message" className="textarea textarea-bordered h-36" required />
                      </div>
                      <div className="form-control mt-6 text-right max-w-32">
                          <button className="btn btn-primary">Submit</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>

  )
}

export default Contactform