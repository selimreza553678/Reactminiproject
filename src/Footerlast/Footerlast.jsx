import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaMediumM } from "react-icons/fa";

const Footerlast = () => {
    return (
        <footer>
           <div className="footer text-black-content grid-rows-2 pl-28 pr-0 ">
           <nav>
                <h6 className="footer-title">Contact</h6>
                <a className="link link-hover">Tell us everything</a>
                <a className="link link-hover">Do you have any question? Fell free to reach out.</a>
                <h4 className='Link link-hover text-xl opacity-50 underline'>Let's Chat</h4>
            </nav>
            <nav>
                <h6 className="footer-title">Address</h6>
                <a className="link link-hover">Rancho Sata Margo</a>
                <a className="link link-hover">2131 street</a>
                <a className="link link-hover">City</a>
                <a className="link link-hover">Melborn</a>
            </nav>
            <nav>
                <h6 className="footer-title">Policy</h6>
                <a className="link link-hover">Application Security</a>
                <a className="link link-hover">Software Principal</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Blog</a>
                <a className="link link-hover">Press</a>
                <a className="link link-hover">Carrer&Culture</a>
            </nav>
            <nav>
                <h6 className="footer-title">Support</h6>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Customer Support</a>
            </nav>
            <nav>
                <h6 className="footer-title">Language</h6>
                <a className="link link-hover">Bangla</a>
                <a className="link link-hover">Hindi</a>
                <a className="link link-hover">English</a>
                <a className="link link-hover">Urdu</a>
            </nav>
           </div>
           {/* Logo Section */}
           <div className='hidden lg:flex justify-between px-32 py-10'> {/* Show only on large devices */}
            <div className="flex items-center">
                <h3 className='text-2xl'>Landy</h3>
            </div>

            {/* Social Icons Section */}
            <div className="flex space-x-4 text-black text-2xl">
                <a href="" aria-label="GitHub"><FaGithub /></a>
                <a href="" aria-label="Twitter"><CiTwitter /></a>
                <a href="" aria-label="LinkedIn"><CiLinkedin /></a>
                <a href="" aria-label="Medium"><FaMediumM /></a>
            </div>
        </div>
        </footer>
    
    )
}

export default Footerlast