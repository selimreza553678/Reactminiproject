// import React from 'react'
// import img1  from '../../public/card-img-1.jpg'
// import { FaArrowRightLong } from 'react-icons/fa6'
// import img2  from '../../public/card-img-2.png'
// import img3  from '../../public/card-img-3.png'
// const Cards = () => {
//   return (

//     <div className='w-4/5 mx-auto'>
//       <div className=''>
//         <h3>Academy</h3>
//         <h1 className='max-w-md font-bold text-4xl mb-10'>Learn from the
//           best instructors.</h1>
//       </div>
//       <div className='main-card flex md:flex-row flex-col gap-5'>
//         {/* 1st-card */}
//         <div className="card bg-base-100 w-96 shadow-xl">
//           <figure>
//             <img src={img1} alt="" />
//           </figure>
//           <div className="card-body">
//             <h1 className="card-title">Learn Figma from 0 to 100 (10 Courses)</h1>
//             <div className="instractor flex justify-between">
//               <h5 className='font-bold'>Instractor</h5>
//               <p> Mirko Santangelo </p>
//             </div>
//             <div className="price flex justify-between">
//               <h5 className='font-bold'>Score <span className='font-normal'> 4.5/5</span> </h5>
//               <FaArrowRightLong />
//             </div>
//             <progress className="progress progress-warning  w-56" value="90" max="100"></progress>

//           </div>
//         </div>
//         {/* 2nd-card */}
//         <div className="card bg-base-100 w-96 shadow-xl">
//           <figure>
//             <img src={img2} alt="" />
//           </figure>
//           <div className="card-body">
//             <h1 className="card-title">Web Design with Figma: Building Striking Compositions</h1>
//             <div className="instractor flex justify-between">
//               <h5 className='font-bold'>Instractor</h5>
//               <p> Pablo Stanley  </p>
//             </div>
//             <div className="price flex justify-between">
//               <h5 className='font-bold'>Score <span className='font-normal'> 4.5/5</span> </h5>
//               <FaArrowRightLong />
//             </div>
//             <progress className="progress progress-warning  w-56" value="90" max="100"></progress>

//           </div>
//         </div>

//         {/* 3rd-card */}
//         <div className="card bg-base-100 w-96 shadow-xl">
//           <figure>
//             <img src={img3} alt="" />
//           </figure>
//           <div className="card-body">
//             <h1 className="card-title">Design Systems for Websites using Figma</h1>
//             <div className="instractor flex justify-between">
//               <h5 className='font-bold'>Instractor</h5>
//               <p>  Filip Felbar </p>
//             </div>
//             <div className="price flex justify-between">
//               <h5 className='font-bold'>Score <span className='font-normal'> 4/5</span> </h5>
//               <FaArrowRightLong />
//             </div>
//             <progress className="progress progress-warning  w-56" value="80" max="100"></progress>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cards

















import React from 'react';
import img1 from '../../public/card-img-1.jpg';
import { FaArrowRightLong } from 'react-icons/fa6';
import img2 from '../../public/card-img-2.png';
import img3 from '../../public/card-img-3.png';

const Cards = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="mb-10">
        <h3 className="text-lg font-semibold">Academy</h3>
        <h1 className="max-w-md font-bold text-4xl">Learn from the best instructors.</h1>
      </div>
      <div className="main-card flex flex-col md:flex-row gap-5">
        {/* 1st-card */}
        <div className="card bg-base-100 w-full md:w-96 shadow-xl">
          <figure>
            <img src={img1} alt="Figma Course" className="object-cover h-48 w-full" />
          </figure>
          <div className="card-body">
            <h1 className="card-title">Learn Figma from 0 to 100 (10 Courses)</h1>
            <div className="instructor flex justify-between">
              <h5 className="font-bold">Instructor</h5>
              <p>Mirko Santangelo</p>
            </div>
            <div className="price flex justify-between">
              <h5 className="font-bold">Score <span className="font-normal">4.5/5</span></h5>
              <FaArrowRightLong />
            </div>
            <progress className="progress progress-warning w-full" value="90" max="100"></progress>
          </div>
        </div>
        {/* 2nd-card */}
        <div className="card bg-base-100 w-full md:w-96 shadow-xl">
          <figure>
            <img src={img2} alt="Web Design Course" className="object-cover h-48 w-full" />
          </figure>
          <div className="card-body">
            <h1 className="card-title">Web Design with Figma: Building Striking Compositions</h1>
            <div className="instructor flex justify-between">
              <h5 className="font-bold">Instructor</h5>
              <p>Pablo Stanley</p>
            </div>
            <div className="price flex justify-between">
              <h5 className="font-bold">Score <span className="font-normal">4.5/5</span></h5>
              <FaArrowRightLong />
            </div>
            <progress className="progress progress-warning w-full" value="90" max="100"></progress>
          </div>
        </div>
        {/* 3rd-card */}
        <div className="card bg-base-100 w-full md:w-96 shadow-xl">
          <figure>
            <img src={img3} alt="Design Systems Course" className="object-cover h-48 w-full" />
          </figure>
          <div className="card-body">
            <h1 className="card-title">Design Systems for Websites using Figma</h1>
            <div className="instructor flex justify-between">
              <h5 className="font-bold">Instructor</h5>
              <p>Filip Felbar</p>
            </div>
            <div className="price flex justify-between">
              <h5 className="font-bold">Score <span className="font-normal">4/5</span></h5>
              <FaArrowRightLong />
            </div>
            <progress className="progress progress-warning w-full" value="80" max="100"></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
