import React from 'react';
import img1 from '../../public/consert.png';

const Consert1 = () => {
    return (
        <div className="hero min-h-screen px-0 lg:px-28">
            <div className="hero-content flex flex-col lg:flex-row w-full">
                <div className="w-full lg:w-1/2">
                    <img src={img1} alt="Consert" className="object-cover w-full" />
                </div>
                <div className="w-full lg:w-1/2 lg:pl-10">
                    <h3 className='opacity-75'>Exclusive</h3>
                    <h4 className="text-4xl font-bold">Lolapaloza, Manhattan</h4>
                    <p className="py-6">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid doloribus, pariatur, saepe assumenda magnam, quas neque blanditiis animi ipsum quam laborum asperiores.
                    </p>
                    <button className=" btn-outline text-primary">See Event Details</button>
                </div>
            </div>
        </div>
    );
};

export default Consert1;
