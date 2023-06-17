import React, { Fragment } from "react";
import styles from '@/styles/academic.module.css'
import GradeCard from "./GradeCard";


const AcademicWorriors = () => {
    const card = ['ACCOUNTING', 'BUSINESS', 'NURSING', 'HRM', 'MEDICAL', 'ANTHROPOLOGY',
        , 'BIOLOGY', 'CHEMISTRY', 'FINANCE'
        , 'HISTORY', 'LAW', 'OTHERS',]

    const landscapeCard = ['ART & ARCHITECTURE', 'APPLICATION LETTERS', 'FAMILY AND CONSUMER SCIENCE', 'FILM & THEATER STUDIES']
    return (
        <>
            <section className={` bg-[url('../assets/academic.jpg')] bg-no-repeat bg-cover bg-center bg-blend-overlay bg-[#1c3e62]   relative py-4 `}>
                 <div>
                    <h2 className={`${styles.heading} xs:text-[2.3rem] text-[2rem] text-white font-semibold text-center py-4 px-4 pt-8 `}>
                        One Stop Solution to <before className="text-[#FFE066]">All Academic Worries</before>
                    </h2>
                    <p className="text-sm text-center text-white lg:px-[320px] px-4 font-semibold">Gogrades.org ensures to deliver the world-class Assignment Help at prices that are best in the market.
                        Our team always responds
                        to the demands of the students quickly and fulfills them in the best possible way.</p>
                    <div className="flex sm:flex-row flex-col justify-center items-center sm:gap-16 gap-4">
                        <button className="bg-[#e73f3b] w-60 text-center text-lg p-2 text-[#FFF] font-semibold  border-4 border-[#FFF] hover:drop-shadow-2xl rounded-md my-4">
                            Get FREE Quote
                        </button>
                        <button className={` ${styles.btn} w-64 text-center text-lg p-2 font-semibold bg-white  border-4 drop-shadow-[155rem] rounded-md`}>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="16px" height="16px"><path fill="#f2faff" d="M4.221,29.298l-0.104-0.181c-1.608-2.786-2.459-5.969-2.458-9.205 C1.663,9.76,9.926,1.5,20.078,1.5c4.926,0.002,9.553,1.919,13.03,5.399c3.477,3.48,5.392,8.107,5.392,13.028 c-0.005,10.153-8.268,18.414-18.42,18.414c-3.082-0.002-6.126-0.776-8.811-2.24l-0.174-0.096l-9.385,2.46L4.221,29.298z" /><path fill="#788b9c" d="M20.078,2L20.078,2c4.791,0.001,9.293,1.867,12.676,5.253C36.137,10.639,38,15.14,38,19.927 c-0.005,9.878-8.043,17.914-17.927,17.914c-2.991-0.001-5.952-0.755-8.564-2.18l-0.349-0.19l-0.384,0.101l-8.354,2.19 l2.226-8.131l0.11-0.403L4.55,28.867c-1.566-2.711-2.393-5.808-2.391-8.955C2.163,10.036,10.202,2,20.078,2 M20.078,1 C9.651,1,1.163,9.485,1.158,19.912c-0.002,3.333,0.869,6.588,2.525,9.455L1,39.169l10.03-2.63c2.763,1.507,5.875,2.3,9.042,2.302 h0.008c10.427,0,18.915-8.485,18.92-18.914c0-5.054-1.966-9.807-5.538-13.382C29.89,2.971,25.14,1.002,20.078,1L20.078,1z" /><path fill="#79ba7e" d="M19.995,35c-2.504-0.001-4.982-0.632-7.166-1.823l-1.433-0.782l-1.579,0.414l-3.241,0.85l0.83-3.03	l0.453-1.656L7,27.485c-1.309-2.267-2.001-4.858-2-7.492C5.004,11.726,11.732,5.001,19.998,5c4.011,0.001,7.779,1.563,10.61,4.397	C33.441,12.231,35,15.999,35,20.005C34.996,28.273,28.268,35,19.995,35z" /><path fill="#fff" d="M28.28,23.688c-0.45-0.224-2.66-1.313-3.071-1.462c-0.413-0.151-0.712-0.224-1.012,0.224	c-0.3,0.45-1.161,1.462-1.423,1.761c-0.262,0.3-0.524,0.337-0.974,0.113c-0.45-0.224-1.899-0.7-3.615-2.231	c-1.337-1.191-2.239-2.663-2.501-3.113c-0.262-0.45-0.029-0.693,0.197-0.917c0.202-0.202,0.45-0.525,0.674-0.787	c0.224-0.262,0.3-0.45,0.45-0.75c0.151-0.3,0.075-0.563-0.038-0.787c-0.113-0.224-1.012-2.437-1.387-3.336	c-0.364-0.876-0.736-0.757-1.012-0.771c-0.262-0.014-0.562-0.015-0.861-0.015c-0.3,0-0.787,0.113-1.198,0.563	c-0.411,0.45-1.573,1.537-1.573,3.749s1.611,4.35,1.835,4.649c0.224,0.3,3.169,4.839,7.68,6.786	c1.072,0.462,1.911,0.739,2.562,0.947c1.076,0.342,2.057,0.294,2.832,0.178c0.864-0.129,2.66-1.087,3.034-2.136	c0.375-1.049,0.375-1.95,0.262-2.136C29.03,24.025,28.731,23.912,28.28,23.688z" /></svg>

                                <label className="pl-4">Whatsapp Direct Chat</label>
                            </div>
                        </button>
                    </div>
                 </div>
            </section>


            <p className="text-[#F25F5C] text-lg leading-8 text-center pt-12  leading-[.70rem] ">- OUR SERVICES</p>
            <h2 className="text-[#071E57] sm:text-[1.8rem] text-[1.5rem] lg:px-[220px] px-4 font-semibold leading-8 text-center">Professional Assignment Help that accept all subjects
                @Gogrades.org</h2>
            <p className="text-[#3E4657] py-3 text-center ">Get online Assignment Help for the students of Karachi. We have qualified and experienced academic writers for all subjects.
            </p>

            <div className="container mx-auto">

                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 mx-4">
                    {
                        card.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <div>
                                        <GradeCard title={item} />
                                    </div>
                                </Fragment>
                            )
                        })
                    }
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-4 gap-4 mt-4 mx-4">
                    {
                        landscapeCard.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <div>
                                        <GradeCard title={item} />
                                    </div>
                                </Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AcademicWorriors;