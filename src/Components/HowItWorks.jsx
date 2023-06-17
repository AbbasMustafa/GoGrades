import react, { Fragment } from "react";
import styles from '@/styles/services.module.css'

import { Dot, Logo1, Logo2, Logo3, Message } from "@/assets";
import Image from "next/image";
import HowItWorkCard from "./HowItWorkCard";

const HowItWorks = () => {
    const howitWork = [
        {
            image: Logo1,
            heading: "Submit Your Order",
            title: "List out the specifications and details in our online order form and submit it. We assure the confidentiality of your personal details.       "
        },
        {
            image: Logo2,
            heading: "Discussion With EXPERT",
            title: "Once we receive the form, our experts will contact you at the earliest to discuss all details related to your task. Our experts are more than happy to help you.       "
        },
        {
            image: Logo3,
            heading: "Assignment Dispatched",
            title: "Once we have finished the help work, the document goes through a proofreading process. After quality check, the final document is dropped to your email.       "
        },
    ]
    return (
        <section className="bg-[#f1f1f1] py-4">

            <div className="container mx-auto my-16">
                <div className="flex lg:flex-row flex-col justify-between">
                    <div className="md:px-16 px-4">
                        <p className="text-[#F25F5C] text-lg leading-8">- HOW IT WORKS</p>
                        <h2 className="text-[#071E57] text-[2rem] max-w-[25rem] font-semibold leading-8">
                            Three Simple Steps to Avail Assignment Help
                            By Experts</h2>
                        <p className="text-[#3E4657] max-w-[25rem] py-4">Ready to place an Assignment order? You don’t have to go through complicated processes; all you need to do is follow 3 easy steps!</p>
                        <button className="bg-[#e73f3b] w-48 text-center text-lg p-2 text-[#FFF] font-semibold  border-4 border-[#e73f3b] hover:drop-shadow-2xl rounded-md my-4">
                            Order Now
                        </button>
                        <button className={` ${styles.btn} w-44 xl:ml-8 ml-2 text-center text-lg p-2 font-semibold  border-4 drop-shadow-[155rem] rounded-md`}>
                            <div className="flex">
                                <Image
                                    src={Message}
                                    alt="this"
                                    width={30}
                                    height={30}
                                    className="flex"
                                /> <label className="pl-4">Chat Now</label>
                            </div>
                        </button>
                    </div>
                    <div className="shadow-xl shadow-[#808080] mx-4 bg-white lg:mr-8 mr-0">

                        <Image
                            src={Dot}
                            alt="that"
                            width={50}
                            height={50}
                            className="mx-4 my-2"
                        />
                        {
                            howitWork.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <HowItWorkCard image={item.image} heading={item.heading} title={item.title} />
                                    </Fragment>
                                )

                            })
                        }
                    </div>
                </div>
            </div>

        </section>
    )

}

export default HowItWorks