import React from "react";
import styles from '@/styles/ourgurantee.module.css'
import { Logo4, Logo5, Logo6, Logo7, Logo8 } from "@/assets";
import Image from "next/image";


const OurGuarantees = () => {

    const guaranteedText = [
        {
            image:Logo4,
            heading: "100% Plagiarism FREE",
            title: "When you avail Assignment Help from us, we make sure to take care of the quality and the research of your work. Also, the Ph.D. certified online Assignment Help providers associated with us ensure they work on each document dedicatedly."
        },
        {
            image:Logo5,
            heading: "100% Money Back Guarantee",
            title: "We want our customers to always be in a win-win situation. Although we rarely get complaints from the scholars, in case they have any, we ensure to refund the order amount. We make it a point to return all your money if the services"
        },
        {
            image:Logo6,
            heading: "100% Satisfaction",
            title: "We strive to deliver high-quality documents that lead to customer satisfaction. Our strict policies are designed to assure there are no compromises made with the quality of your documents. The expert Assignment Help Karachi providers"
        },
        {
            image:Logo7,
            heading: "Unlimited Revisions",
            title: "When you reach to our Assignment Help Karachi for your documents we deliver you comprehensive tasks. If in case you have any doubt in the tasks that are delivered to you, we offer unlimited revisions that too free of cost."
        },
        {
            image:Logo8,
            heading: "Lowest Price",
            title: "With a transparent pricing structure, we ensure students do not feel cheated when they avail our online Assignment Help. We make it a point that the help services that one avails do not add burden to the pocket. With regular discounts and several freebies, we have designed our services to ensure they fit your budget."
        },
    ]

    return (
        <>
            <section className="py-8">
                <p className="text-[#F25F5C] text-lg leading-8 text-center pt-12  leading-[.70rem] ">- OUR GUARANTEES</p>
                <h2 className="text-[#071E57] sm:text-[1.8rem] text-[1.5rem] px-4 font-semibold leading-8 text-center">Know Why Students Rely On Our help Services</h2>
                <p className="text-[#3E4657] py-3 text-center px-4 ">Gogrades.org promises every student to provide the best quality work and maximum satisfaction. Here’s why you should trust us.
                </p>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-28">
                        {
                            guaranteedText.map((item, index) => {
                                return (
                                    <div key={index} >
                                        <Image 
                                        src={item.image}
                                        alt="this"
                                        width={100}
                                        height={100}
                                        className="mx-auto"
                                        />
                                        <h2 className="text-[#071E57] text-xl px-2 font-semibold text-center">{item.heading}</h2>
                                        <div className={styles.Scrollbar}>

                                        <p className={` ${styles.scroll} text-[#3E4657] py-3 sm:px-16 px-4 text-center  `}>{item.title}</p>
                                    </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-[#e73f3b] w-48 text-center text-lg p-2 text-[#FFF] font-semibold  border-4 border-[#e73f3b] hover:drop-shadow-2xl rounded-md my-4">
                        Order Now
                    </button>
                </div>
            </section>
        </>
    )
}

export default OurGuarantees;