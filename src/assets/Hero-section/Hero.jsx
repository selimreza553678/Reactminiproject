// import React from 'react'

// const Hero = () => {
//     return (
//         <div className="hero min-h-screen">
//             <div className="hero-content text-center">
//                 <div className="max-w-full">
//                     <h2 className="text-3xl font-medium">SIMPLE / BEAUTIFUL</h2>
//                     <h1 className="text-8xl font-bold text-center">
//                         <span className='block'>LANDING</span>
//                         <span>PAGE</span>
//                     </h1>

//                     <p className="py-10 md:py-6 px-0 md:px-20 text-lg max-w-screen-lg uppercase font-bold font-sans">
//                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime fugiat laudantium libero. Repellat molestiae ipsum sint nihil fuga a nam
//                     </p>
//                     <button className="btn btn-outline-dark border-black">START LEARNING</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Hero







import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content text-center">
                <div className="max-w-full px-4 sm:px-6 lg:px-0">
                    <h2 className="text-3xl font-medium">SIMPLE / BEAUTIFUL</h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
                        <span className='block'>LANDING</span>
                        <span>PAGE</span>
                    </h1>

                    <p className="py-4 md:py-6 px-0 md:px-20 text-lg max-w-screen-lg uppercase font-bold font-sans">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime fugiat laudantium libero. Repellat molestiae ipsum sint nihil fuga a nam.
                    </p>
                    <button className="btn btn-outline border-black mt-4">START LEARNING</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
