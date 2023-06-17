import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from './Dropdown';
import Drawer from './Drawer';
import { Logo } from '@/assets';
import styles from '@/styles/academic.module.css'


const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <header className=" bg-[#1c3d71]">
        <div id="topStrip" className='flex justify-around bg-[#1c3d71] text-white pt-1 pb-1 text-sm border-b-2 border-black px-10 md:flex hidden'>
                <div className='justify-start'>
                    <span className='rounded-lg bg-[#f8e065] text-black pl-2 pr-2 cursor-pointer'>OFFERS</span> Buy 4 Assessments and get 1 absolutely FREE!
                </div>

                <div className="flex justify-end space-x-6">
                    <div className='cursor-pointer flex'>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 40 40" width="16px" height="16px"><path fill="#f2faff" d="M4.221,29.298l-0.104-0.181c-1.608-2.786-2.459-5.969-2.458-9.205 C1.663,9.76,9.926,1.5,20.078,1.5c4.926,0.002,9.553,1.919,13.03,5.399c3.477,3.48,5.392,8.107,5.392,13.028 c-0.005,10.153-8.268,18.414-18.42,18.414c-3.082-0.002-6.126-0.776-8.811-2.24l-0.174-0.096l-9.385,2.46L4.221,29.298z"/><path fill="#788b9c" d="M20.078,2L20.078,2c4.791,0.001,9.293,1.867,12.676,5.253C36.137,10.639,38,15.14,38,19.927 c-0.005,9.878-8.043,17.914-17.927,17.914c-2.991-0.001-5.952-0.755-8.564-2.18l-0.349-0.19l-0.384,0.101l-8.354,2.19 l2.226-8.131l0.11-0.403L4.55,28.867c-1.566-2.711-2.393-5.808-2.391-8.955C2.163,10.036,10.202,2,20.078,2 M20.078,1 C9.651,1,1.163,9.485,1.158,19.912c-0.002,3.333,0.869,6.588,2.525,9.455L1,39.169l10.03-2.63c2.763,1.507,5.875,2.3,9.042,2.302 h0.008c10.427,0,18.915-8.485,18.92-18.914c0-5.054-1.966-9.807-5.538-13.382C29.89,2.971,25.14,1.002,20.078,1L20.078,1z"/><path fill="#79ba7e" d="M19.995,35c-2.504-0.001-4.982-0.632-7.166-1.823l-1.433-0.782l-1.579,0.414l-3.241,0.85l0.83-3.03	l0.453-1.656L7,27.485c-1.309-2.267-2.001-4.858-2-7.492C5.004,11.726,11.732,5.001,19.998,5c4.011,0.001,7.779,1.563,10.61,4.397	C33.441,12.231,35,15.999,35,20.005C34.996,28.273,28.268,35,19.995,35z"/><path fill="#fff" d="M28.28,23.688c-0.45-0.224-2.66-1.313-3.071-1.462c-0.413-0.151-0.712-0.224-1.012,0.224	c-0.3,0.45-1.161,1.462-1.423,1.761c-0.262,0.3-0.524,0.337-0.974,0.113c-0.45-0.224-1.899-0.7-3.615-2.231	c-1.337-1.191-2.239-2.663-2.501-3.113c-0.262-0.45-0.029-0.693,0.197-0.917c0.202-0.202,0.45-0.525,0.674-0.787	c0.224-0.262,0.3-0.45,0.45-0.75c0.151-0.3,0.075-0.563-0.038-0.787c-0.113-0.224-1.012-2.437-1.387-3.336	c-0.364-0.876-0.736-0.757-1.012-0.771c-0.262-0.014-0.562-0.015-0.861-0.015c-0.3,0-0.787,0.113-1.198,0.563	c-0.411,0.45-1.573,1.537-1.573,3.749s1.611,4.35,1.835,4.649c0.224,0.3,3.169,4.839,7.68,6.786	c1.072,0.462,1.911,0.739,2.562,0.947c1.076,0.342,2.057,0.294,2.832,0.178c0.864-0.129,2.66-1.087,3.034-2.136	c0.375-1.049,0.375-1.95,0.262-2.136C29.03,24.025,28.731,23.912,28.28,23.688z"/></svg>
                        <span className='pl-2'>Direct Customer Support</span>
                    </div>

                    <div className='cursor-pointer flex'>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 40 40" width="16px" height="16px"><path fill="#f2faff" d="M4.221,29.298l-0.104-0.181c-1.608-2.786-2.459-5.969-2.458-9.205 C1.663,9.76,9.926,1.5,20.078,1.5c4.926,0.002,9.553,1.919,13.03,5.399c3.477,3.48,5.392,8.107,5.392,13.028 c-0.005,10.153-8.268,18.414-18.42,18.414c-3.082-0.002-6.126-0.776-8.811-2.24l-0.174-0.096l-9.385,2.46L4.221,29.298z"/><path fill="#788b9c" d="M20.078,2L20.078,2c4.791,0.001,9.293,1.867,12.676,5.253C36.137,10.639,38,15.14,38,19.927 c-0.005,9.878-8.043,17.914-17.927,17.914c-2.991-0.001-5.952-0.755-8.564-2.18l-0.349-0.19l-0.384,0.101l-8.354,2.19 l2.226-8.131l0.11-0.403L4.55,28.867c-1.566-2.711-2.393-5.808-2.391-8.955C2.163,10.036,10.202,2,20.078,2 M20.078,1 C9.651,1,1.163,9.485,1.158,19.912c-0.002,3.333,0.869,6.588,2.525,9.455L1,39.169l10.03-2.63c2.763,1.507,5.875,2.3,9.042,2.302 h0.008c10.427,0,18.915-8.485,18.92-18.914c0-5.054-1.966-9.807-5.538-13.382C29.89,2.971,25.14,1.002,20.078,1L20.078,1z"/><path fill="#79ba7e" d="M19.995,35c-2.504-0.001-4.982-0.632-7.166-1.823l-1.433-0.782l-1.579,0.414l-3.241,0.85l0.83-3.03	l0.453-1.656L7,27.485c-1.309-2.267-2.001-4.858-2-7.492C5.004,11.726,11.732,5.001,19.998,5c4.011,0.001,7.779,1.563,10.61,4.397	C33.441,12.231,35,15.999,35,20.005C34.996,28.273,28.268,35,19.995,35z"/><path fill="#fff" d="M28.28,23.688c-0.45-0.224-2.66-1.313-3.071-1.462c-0.413-0.151-0.712-0.224-1.012,0.224	c-0.3,0.45-1.161,1.462-1.423,1.761c-0.262,0.3-0.524,0.337-0.974,0.113c-0.45-0.224-1.899-0.7-3.615-2.231	c-1.337-1.191-2.239-2.663-2.501-3.113c-0.262-0.45-0.029-0.693,0.197-0.917c0.202-0.202,0.45-0.525,0.674-0.787	c0.224-0.262,0.3-0.45,0.45-0.75c0.151-0.3,0.075-0.563-0.038-0.787c-0.113-0.224-1.012-2.437-1.387-3.336	c-0.364-0.876-0.736-0.757-1.012-0.771c-0.262-0.014-0.562-0.015-0.861-0.015c-0.3,0-0.787,0.113-1.198,0.563	c-0.411,0.45-1.573,1.537-1.573,3.749s1.611,4.35,1.835,4.649c0.224,0.3,3.169,4.839,7.68,6.786	c1.072,0.462,1.911,0.739,2.562,0.947c1.076,0.342,2.057,0.294,2.832,0.178c0.864-0.129,2.66-1.087,3.034-2.136	c0.375-1.049,0.375-1.95,0.262-2.136C29.03,24.025,28.731,23.912,28.28,23.688z"/></svg>
                        <span className='pl-2'>Personal Live Chat</span>
                    </div>

                    <div className='cursor-pointer flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span className='pl-2'>support@gogrades.org</span>
                    </div>
                </div>
            </div>

             
            <div className={` ${styles.nav} flex items-center justify-around md:px-0 sm:px-0  flex justify-around shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] sticky top-8 left-0`}>
                <Link href="/" >
                    <Image alt="LOGO" src={Logo} width={200} height={200} className='lg:max-w[10rem] max-w-[25rem]' />
                </Link>
    
                <nav className={`hidden  md:flex justify-end items-end text-xs  lg:text-sm ml-16`}>
                    <Link
                        href="/"
                        className="md:px-2 px-1 py-6  hover:bg-[#f25f5c] transition-all rounded-md font-semibold text-white text-[15px]"
                    >
                        Why Us?
                    </Link>
                    <Link
                        href="/how-it-works"
                        className="px-2 py-6 hover:bg-[#f25f5c] transition-all rounded-md font-semibold text-white text-[15px]"
                    >
                        Services
                    </Link>
                    {/* SERVICES */}
                    {/* <Dropdown /> */}
                    {/*  */}
                    <Link
                        href="/about-us"
                        className="px-2 py-6 hover:bg-[#f25f5c] transition-all rounded-md font-semibold text-white text-[15px]"
                    >
                        Subjects
                    </Link>
                    {/* <Link
              href="/blogs"
              className="px-4 py-4 hover:bg-[#8b78785b] transition-all rounded-md font-semibold"
            >
              BLOGS
            </Link> */}
                    <Link
                        href="/contact-us"
                        className="px-2 py-6 hover:bg-[#f25f5c] transition-all rounded-md font-semibold text-white text-[15px]"
                    >
                        Process
                    </Link>
                    <Link
                        href="/contact-us"
                        className="px-2 py-6 hover:bg-[#f25f5c] transition-all rounded-md font-semibold text-white text-[15px]"
                    >
                        Reviews
                    </Link>
                    <Link
                        href="/contact-us"
                        className="px-2 py-6 hover:bg-[#f25f5c] transition-all rounded-md font-semibold text-white text-[15px]"
                    >
                        About us
                    </Link>
                    <Link
                        href="/contact-us"
                        className="px-2 py-6 hover:bg-[#f25f5c] transition-all rounded-md font-semibold text-white text-[15px]"
                    >
                        Order now
                    </Link>
                    <Link
                        href="/contact-us"
                        className="px-2 py-6 hover:bg-[#f25f5c] transition-all rounded-md font-semibold text-white text-[15px]"
                    >
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                    </Link>


                </nav>
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="flex md:flex hidden flex-col gap-0.5 item-center justify-center"
                >
                    <span className={`w-4 h-5 rounded-md block`} />
                    <span className={`w-4 h-5 rounded-md block`} />
                    <span className={`w-4 h-5 rounded-md block`} />
                </button>
            </div>
            <Drawer open={open} setIsOpen={setOpen}>
                <nav className="flex flex-col gap-3">
                    <Link
                        href="/"
                        className="px-1.5 py-2 hover:bg-[#8b78785b] transition-all rounded-md text-sec text-sm font-semibold"
                    >
                        HOME
                    </Link>
                    <Link
                        href="/how-it-works"
                        className="px-1.5 py-2 hover:bg-[#8b78785b] transition-all rounded-md text-sec text-sm font-semibold"
                    >
                        HOW IT WORKS
                    </Link>
                    {/* SERVICES */}
                    <Dropdown color="text-sec" />
                    {/*  */}
                    <Link
                        href="/about-us"
                        className="px-1.5 py-2 hover:bg-[#8b78785b] transition-all rounded-md text-sec text-sm font-semibold"
                    >
                        ABOUT US
                    </Link>
                    {/* <Link
              href="/blogs"
              className="px-1.5 py-2 hover:bg-[#8b78785b] transition-all rounded-md text-sec text-sm font-semibold"
            >
              BLOGS
            </Link> */}
                    <Link
                        href="contact-us"
                        className="px-1.5 py-2 hover:bg-[#8b78785b] transition-all rounded-md text-sec text-sm font-semibold"
                    >
                        CONTACT US
                    </Link>
                </nav>
            </Drawer>
            
        </header>
        </>
    );
}

export default NavBar;