import React from "react";
import styles from '@/styles/academic.module.css'


const FreeSample = () =>{
    return(
        <>
         <section className={`${styles.bg} py-16`}>
            <div className="container mx-auto">
            <p className={styles.para}>- Free Free Free -</p>
            <h2 className="text-[#071E57] text-[2rem] font-semibold  text-center">Ready to get your FREE Sample?</h2>
            <p className="text-[#071E57] font-light text-center text-xl">Setup is done in minutes. Your first Assignment is ready in hours.</p>
            <div className="flex justify-center mt-4">
                    <button className="bg-[#e73f3b] xs:w-[20rem] w-[18rem] text-center text-lg p-2 text-[#FFF] font-semibold  border-4 border-[#e73f3b] hover:drop-shadow-2xl text-xl rounded-md my-4">
                        Send Me My FREE Sample
                    </button>
                </div>
            </div>
         </section>
        </>
    )
}

export default FreeSample;