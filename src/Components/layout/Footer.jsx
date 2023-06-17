import React, { Fragment } from "react";
import styles from '@/styles/footer.module.css'
import Image from "next/image";
import {  Logo, Payment } from "@/assets";



const Footer = () => {
    const Links = ['Top Offers', 'Place Order', 'Why us ?', 'Services', 'Subjects', 'Process', 'Reviews', 'Contact us']
    const servicesLinks = ['Essay Help', 'Dissertation Help', 'Coursework Help', 'Homework Help', 'Articles',
        'Thesis', 'PDF Ebook writing', 'Proofreading Editing', 'CV writing', 'Content Help Service',
        'Casestudy Help']
    const servicesProvided = ['Research Paper Help', 'Exam Help', 'Final Year Project', 'Quizzes Help', 'Book Report Help',
        'Book Analysis Help', 'Online Courses Help', 'Online Classes Help', 'Research Proposal Help',
        'Research Publication Help', 'Literature Review Help', 'Assessment Help']
    const refundPolicy = ['Refund Policy','Cancellation Policy','Terms & Conditions','Privacy Policy','Usage policy','Contact Us']
    return (
        <>
            <footer className={styles.footer}>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 py-8 gap-8">
                        <div className="ml-8">
                            <Image
                                src={Logo}
                                alt="this"
                                width={300}
                                height={300}
                            />
                            <p className="text-white py-4">{`We are the best academic consultancy provider. We have a thousand's of happy customers from worldwide. Who happy with our high-quality service & the all credit goes to our most experienced and professional writing team.`}
                            </p>
                        </div>
                        <div className="sm:ml-8 ml-8 xs:mx-none mx-auto">
                            <h2 className="text-white font-semibold text-lg">
                                Quick Links
                            </h2>
                            {
                                Links.map((item, index) => {
                                    return (
                                        <Fragment key={index}>
                                        <a href="#" className=" text-white font-light hover:text-[#e73f3b] block leading-8">{item}</a>
                                        </Fragment>
                                    )
                                })
                            }
                        </div>
                        <div className="lg:relative top-0 right-20 static md:ml-0 ml-8">
                            <h2 className="text-white font-semibold text-lg ">
                                Services
                            </h2>
                            {
                                servicesLinks.map((item, index) => {
                                    return (
                                        <Fragment key={index}>
                                        <a href="#" className=" text-white font-light hover:text-[#e73f3b] block leading-7">{item}</a>
                                        </Fragment>
                                    )
                                })
                            }
                        </div>
                        <div className="lg:relative top-0 right-32 static md:ml-0 ml-8">
                            <h2 className="text-white font-semibold text-lg">
                                Services
                            </h2>
                            {
                                servicesProvided.map((item, index) => {
                                    return (
                                        <Fragment key={index}>
                                        <a href="#" className=" text-white font-light hover:text-[#e73f3b] block leading-7">{item}</a>
                                        </Fragment>
                                    )
                                })
                            }
                        </div>
                        <div className="bg-[#101A31] rounded-lg xs:w-[20rem] w-[18rem] lg:relative top-0 right-40 static lg:ml-0 ml-8">
                            <h2 className="text-white px-8 pt-8 text-lg font-semibold">Contact us</h2>
                            <div className="flex px-8 pt-4">
                                <i className="sprite call"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFF" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path fill="#FFFFF" strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <span className="text-white px-2 text-lg font-semibold">Call Now!</span>
                            </div>
                            <div className="flex px-8 py-2">
                                <i className="sprite call"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="26px" height="26px"><path fill="#f2faff" d="M4.221,29.298l-0.104-0.181c-1.608-2.786-2.459-5.969-2.458-9.205 C1.663,9.76,9.926,1.5,20.078,1.5c4.926,0.002,9.553,1.919,13.03,5.399c3.477,3.48,5.392,8.107,5.392,13.028 c-0.005,10.153-8.268,18.414-18.42,18.414c-3.082-0.002-6.126-0.776-8.811-2.24l-0.174-0.096l-9.385,2.46L4.221,29.298z" /><path fill="#788b9c" d="M20.078,2L20.078,2c4.791,0.001,9.293,1.867,12.676,5.253C36.137,10.639,38,15.14,38,19.927 c-0.005,9.878-8.043,17.914-17.927,17.914c-2.991-0.001-5.952-0.755-8.564-2.18l-0.349-0.19l-0.384,0.101l-8.354,2.19 l2.226-8.131l0.11-0.403L4.55,28.867c-1.566-2.711-2.393-5.808-2.391-8.955C2.163,10.036,10.202,2,20.078,2 M20.078,1 C9.651,1,1.163,9.485,1.158,19.912c-0.002,3.333,0.869,6.588,2.525,9.455L1,39.169l10.03-2.63c2.763,1.507,5.875,2.3,9.042,2.302 h0.008c10.427,0,18.915-8.485,18.92-18.914c0-5.054-1.966-9.807-5.538-13.382C29.89,2.971,25.14,1.002,20.078,1L20.078,1z" /><path fill="#79ba7e" d="M19.995,35c-2.504-0.001-4.982-0.632-7.166-1.823l-1.433-0.782l-1.579,0.414l-3.241,0.85l0.83-3.03	l0.453-1.656L7,27.485c-1.309-2.267-2.001-4.858-2-7.492C5.004,11.726,11.732,5.001,19.998,5c4.011,0.001,7.779,1.563,10.61,4.397	C33.441,12.231,35,15.999,35,20.005C34.996,28.273,28.268,35,19.995,35z" /><path fill="#fff" d="M28.28,23.688c-0.45-0.224-2.66-1.313-3.071-1.462c-0.413-0.151-0.712-0.224-1.012,0.224	c-0.3,0.45-1.161,1.462-1.423,1.761c-0.262,0.3-0.524,0.337-0.974,0.113c-0.45-0.224-1.899-0.7-3.615-2.231	c-1.337-1.191-2.239-2.663-2.501-3.113c-0.262-0.45-0.029-0.693,0.197-0.917c0.202-0.202,0.45-0.525,0.674-0.787	c0.224-0.262,0.3-0.45,0.45-0.75c0.151-0.3,0.075-0.563-0.038-0.787c-0.113-0.224-1.012-2.437-1.387-3.336	c-0.364-0.876-0.736-0.757-1.012-0.771c-0.262-0.014-0.562-0.015-0.861-0.015c-0.3,0-0.787,0.113-1.198,0.563	c-0.411,0.45-1.573,1.537-1.573,3.749s1.611,4.35,1.835,4.649c0.224,0.3,3.169,4.839,7.68,6.786	c1.072,0.462,1.911,0.739,2.562,0.947c1.076,0.342,2.057,0.294,2.832,0.178c0.864-0.129,2.66-1.087,3.034-2.136	c0.375-1.049,0.375-1.95,0.262-2.136C29.03,24.025,28.731,23.912,28.28,23.688z" /></svg>

                                <span className="text-white px-2 text-lg font-semibold">WhatsApp Now!</span>
                            </div>
                            <div className="flex px-8 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <a href="#" className="text-white px-2 text-lg font-semibold">{`Support@gogrades.org`}</a>
                            </div>
                            <h2 className="text-white px-8 pt-6 text-lg font-semibold">Social Media</h2>
                            <div className="flex px-8 py-2 gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white"  viewBox="0 0 50 50" width="35px" height="35px">    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 50 50" width="35px" height="35px">    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 50 50" width="35px" height="35px"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/></svg>
                            </div>
                            <h2 className="text-white px-8 pt-1 text-lg font-semibold">Secure Payment</h2>
                            <Image 
                            src={Payment}
                            alt="that"
                            width={300}
                            height={300}
                            className="px-8 pt-1 pb-4"
                            />

                        </div>
                    </div>
                    <div className="flex flex-wrap px-8">
                    {
                                refundPolicy.map((item, index) => {
                                    return (
                                        <div key={index}>
                                        <a href="#" className={` ${styles.link} text-white px-4  hover:text-[#FFFF00] leading-7`}>{item}</a>
                                            </div>
                                    )
                                })
                            }
                    </div>
                    <p className="text-[#D8D8D8] text-sm py-4 max-w-[55rem] px-12"> {`  Disclaimer: Services provided by Gogrades.org serve as model papers for students for guidelines to their work and as a sample work, these works must not be used for any academic gain. These papers are intended to help students to understand research techniques and various issues in academic research only.`}</p>
                   
                    <p className="text-[#D8D8D8] text-sm px-8">{`© Copyright 2023 @ Gogrades.org. All rights reserved`}</p>
                </div>

            </footer>
        </>
    )
}

export default Footer;