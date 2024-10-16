// import React from 'react'

// const Navbar = () => {
//   return (
//       <div className="navbar bg-base-100">
//           <div className="navbar-start mx-30">
//               <div className="dropdown">
//                   <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-40">
//                       <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-5 w-5"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor">
//                           <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M4 6h16M4 12h8m-8 6h16" />
//                       </svg>
//                   </div>
//                   <ul
//                       tabIndex={0}
//                       className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                       <li><a>Home</a></li>
//                       <li><a>About</a></li>
//                       <li><a>Service</a></li>
//                       <li><a>Contact</a></li>
//                   </ul>
//               </div>
//               <a className="btn btn-ghost text-xl border-black ml-36">daisyUI</a>
//           </div>
//           <div className="navbar-center hidden lg:flex">
//               <ul className="menu menu-horizontal px-1  text-xl">
//                   <li><a>Home</a></li>
//                   <li><a>About</a></li>
//                   <li><a>Service</a></li>
//                   <li><a>Contact</a></li>
//               </ul>
//           </div>
//       </div>
//   )
// }

// export default Navbar











import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar justify-between bg-base-100 px-0 md:px-32">
      <div className="navbar-start">
        {/* Brand Name */}
        <a className="btn btn-ghost text-xl border-black ml-4">daisyUI</a>
      </div>

      {/* Dropdown for small devices */}
      <div className="dropdown block md:hidden lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost pl-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-full p-2 shadow max-h-[200px] overflow-y-auto"
        >
          <li><a className="block px-4 py-2">Home</a></li>
          <li><a className="block px-4 py-2">About</a></li>
          <li><a className="block px-4 py-2">Service</a></li>
          <li><a className="block px-4 py-2">Contact</a></li>
        </ul>
      </div>

      {/* Centered Navbar for md and lg devices */}
      <div className="navbar-center hidden md:flex lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Service</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


