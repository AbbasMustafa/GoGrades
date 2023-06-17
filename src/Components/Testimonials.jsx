import { Testimonial } from "@/assets";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
    const testimonial = [
        {
            title: " Tried and tested many Assignment Help websites, and made up my mind to choose this one. The decision was random but thankfully it proved right. My grades got a huge jump from C to A.",
            heading: "Peter Griffiths",
            adress: "London, UK"
        },
        {
            title: " The experts of Gogrades.org are very professional and provide premium quality essays help work at an affordable price. ",
            heading: "Skye Coles",
            adress: "Cardiff, UK"
        },
        {
            title: " Pocket-friendly pricing structure! No other website could have done my Assignment work at such a reasonable price. Their Assignment Help is worth every single penny. ",
            heading: "Mary Brown",
            adress: "Bristol, UK"
        },
        {
            title: " My friend recommended me Gogrades.org when I was looking for online Assignment Help. I would now recommend them to everyone.My experience has been fruitful and worth remembering. Cheers!!!",
            heading: "Mathilda Lee",
            adress: "Liverpool, UK"
        },
        {
            title: "  Highly recommended website! Due to some personal problems, I missed some of my Economics classes. The situation became worse when the professor asked to submit an Assignment. Baffled by the situation, I took Assignment Help from them. The Assignment was well written with recent economics trends and policies.",
            heading: "Laurel Crawford",
            adress: "Belfast"
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="flex flex-row justify-center items-center">
                <Slider {...settings}>

                    {
                        testimonial.map((items, index) => {
                            return (
                                <div key={index}>
                                    <Image
                                        src={Testimonial}
                                        alt=""
                                        width={50}
                                        height={50}
                                        
                                    />
                                    <p className="text-[#3E4657] pt-4 max-w-[35rem]">
                                        {items.title}
                                    </p>
                                </div>
                            )
                        })
                    }

                </Slider>
            </div>

        </>
    )
}



export default Testimonials;