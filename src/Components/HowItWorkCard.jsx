import { Logo1 } from "@/assets";
import Image from "next/image";
import React from "react";

const HowItWorkCard = ({image, heading, title}) =>{

    return(
        <div className="flex flex-row py-5">
            <div className="px-2">
                <Image 
                src={image}
                alt="that"
                width={120}
                height={120}
                />
                <hr />
            </div>
            <div className="py-4 px-2 pr-4">
            <h2 className="text-[#071E57] sm:text-[1.4rem] text-[1.2rem]  font-semibold max-w-[35rem]">{heading}</h2>
             <p className="max-w-[25rem] text-[#3E4657] sm:text-normal text-sm">{title}</p>

            </div>
        </div>

    )

}

export default HowItWorkCard;