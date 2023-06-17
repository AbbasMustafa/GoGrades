import react from "react";
import BannerCard from "./BannerCard";
import BannerForm from "./BannerForm";
import BannerRating from "./BannerRating";
import { reseller, site } from "@/assets/icons";
import { favicon } from "@/assets";

const Banner = () => {
    return (
        <>
            <section className="bg-[url('../assets/homebanner.jpg')] bg-no-repeat bg-cover bg-center bg-blend-overlay bg-[#000]/50 flex justify-around">
                <div className="container mx-auto ">
                    <div className="flex lg:flex-row flex-col justify-around">
                        <div className="ml-6 my-8 mx-4">
                            <h1 >
                                <span className="w-100 text-[#f3c30e] font-bold text-2xl">PROFESSIONAL ASSIGNMENT HELP</span><br />
                                <span className="w-100 text-[#63cc70] font-bold text-2xl">- AFFORDABLE - FASTEST - 100% SECURE -</span><br />
                                <span className="w-100 text-[#FFF] text-4xl">Best Assignment Help Karachi</span><br />
                                <span className="w-100 text-[#FFF] text-4xl">All Subjects Are Accepted</span>
                            </h1>

                            <h2 className="pt-4 space-x-5 flex">
                                <span className="text-[#f3c30e] font-bold text-2xl">GET A+ GRADE </span>
                                <button className="bg-[#64ce78] p-2 text-[#FFF] font-bold rounded-lg">ORDER NOW</button>
                                <button className="bg-[#bdd7ff] p-2 text-[#5381d3] font-bold flex rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 pr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                    </svg>
                                    Discuss With Experts
                                </button>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
                                <div>
                                    <BannerCard heading="4500+Experts"
                                        title="Online to help you 24x7"
                                        label="Satisfaction Guaranteed"
                                        label1=" Experienced Teachers"
                                        label2=" Time Flexibility"></BannerCard>
                                </div>
                                <div>
                                    <BannerCard heading="Rated 4.8/5"
                                        title="Out of 5087 Reviews"
                                        label=" Very Low Pricing"
                                        label1=" Fastest Turnaround Time"
                                        label2=" Professional Proofreaders"></BannerCard>
                                </div>
                                <div>
                                    <BannerCard heading="FREE"
                                        title="Turnitin Report"
                                        label=" 100% Secure & Trusty"
                                        label1=" 24/7 Chat Support"
                                        label2=" Guaranteed Results"></BannerCard>
                                </div>

                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                <div>
                                    <BannerRating image={site} heading="Sitejabber" />
                                </div>
                                <div>
                                    <BannerRating image={reseller} heading="Reseller Ratings" />
                                </div>
                                <div>
                                    <BannerRating image={favicon} heading="GoGrades.org" />
                                </div>
                            </div>

                        </div>
                        <div className="justify-end items-end">
                            <BannerForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;