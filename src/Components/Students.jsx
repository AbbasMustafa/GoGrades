import Image from "next/image";
import React, { Fragment, useState } from "react";
import styles from '@/styles/academic.module.css'

import { Check, London, Ms, NewLogo, Quality, Sapeinza, Studenttum, Uni, UniLogo, Unii } from "@/assets";

const Students = () => {
    const [show, setShow] = useState(false)
    const images = [
        {
            id: 1,
            image: Ms,
        },
        {
            id: 1,
            image: NewLogo,
        },
        {
            id: 1,
            image: Sapeinza,
        },
        {
            id: 1,
            image: Studenttum,
        },
        {
            id: 1,
            image: Uni,
        },
        {
            id: 1,
            image: UniLogo,
        },
        {
            id: 1,
            image: Unii,
        }
    ]
    const check = [
        {
            id: 1,
            heading: "Bibliography",
            title: "Formatting",

        },
        {
            id: 2,
            heading: "Title Page",
            title: "Plagiarism Report"

        },
        {
            id: 3,
            heading: "Outline",
            title: "Limitless Amendments"
        },
    ]
    return (

        <>
            <div className="container mx-auto">
                <div className="flex sm:flex-row flex-col py-12 justify-between">
                    <div className=" mx-10">
                        <h2 className="text-[#F25F5C] md:text-[32px] text-[28px] font-semibold">
                            Trusted by 85,000 Students
                        </h2>
                        <p className="md:text-2xl text-xl xl:leading-3 leading-1">connecting with over 4500 Trusted Experts.</p>
                    </div>
                    <div className=" mx-10 sm:mt-0 mt-4">

                        <div className="grid grid-cols-4 gap-2">
                            {
                                images.map((items, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <div>
                                                <Image
                                                    src={items.image}
                                                    alt="this"
                                                    width={110}
                                                    height={110}

                                                />
                                            </div>
                                        </Fragment>

                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className="container mx-auto">
                <div className="flex lg:flex-row flex-col py-12 justify-between">
                    <div className="mx-10">
                        <Image
                            src={Quality}
                            alt="that"
                            width={850}
                            height={450}
                        />
                    </div>
                    <div className="px-8 lg:mt-0 mt-4">
                        <p className="text-[#F25F5C]">- WHY GOGRADES.ORG</p>
                        <h2 className="text-[#071E57] xs:text-[1.8rem] text-[1.2rem] max-w-[32rem] font-semibold leading-8">Best Quality Assignment Help
                            For University & College Students</h2>
                            <div className={styles.Scrollbar}>

                        <p className="text-[#3E4657] py-3 ">Searching for the No.1 Online Assignment Help in Karachi? End your search with Gogrades.org.</p>
                        <h3 className="text-[#071E57] text-xl font-semibold ">FREE Features</h3>

                        <div className="flex flex-row gap-16">
                                {
                                    check.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className="flex mt-2">
                                                    <Image
                                                        src={Check}
                                                        alt="this"
                                                        width={15}
                                                        height={15}
                                                        />
                                                    <p className="text-sm text-[#3E4657] pl-2">{item.heading}</p>
                                                </div>
                                                <div className="flex">
                                                    <Image
                                                        src={Check}
                                                        alt="that"
                                                        width={15}
                                                        height={15}
                                                    />
                                                    <p className="text-sm text-[#3E4657] pl-2">{item.title}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        <p className="text-[#3E4657] pt-4 ">With more than 500 Ph.D. consultants, we are determined to provide the best custom Assignment help service to the Karachi students.</p>
                        <p className="text-[#0CA0AC]"
                        onClick={() =>{
                            setShow(true)
                        }}
                        >read more</p>
                        <div>

                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Students;