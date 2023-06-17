import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Image from 'next/image'
import { Gurantee, Money, Privacy } from '@/assets/icons';

const BannerForm = () => {
    return ( 
        <div>
            <div className="p-10 rounded-lg font-bold">
                <h2 className="text-[#FFF] text-center xs:text-[25px] text-[20px] bg-[url('../assets/england.jpg')] bg-center bg-cover bg-blend-overlay bg-[#000]/70 p-3 pr-10 pl-10 rounded-t-xl">
                    Karachi Special Discount Get<br />
                    Upto <span className="text-[#cce0ff] text-[35px]">50% OFF</span><br />
                    Free Plagiarism Report
                </h2>

                <div className="p-5 bg-[#a4a4a4] pt-3 bg-gradient-to-r from-[#edf4ff] to-[#a0a5ac] rounded-b-xl">
                    <div className="flex justify-center mt-1">
                        <Image src={Gurantee} alt="formPic" width="65" height="65"></Image>
                        <Image src={Money} alt="formPic" width="65" height="65"></Image>
                        <Image src={Privacy} alt="formPic" width="65" height="65"></Image>
                    </div>

                    <div className=''>
                        <form className="pt-4">
                            <div className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" strokeWidth={1.0} stroke="white" className="w-10 h-10 p-1  border bg-[#FFF] shadow rounded-l">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <input className="text-[14px] shadow appearance-none border rounded-r w-full px-3 text-gray leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Full Name" />
                            </div>
                            <div className="mb-4">
                                <PhoneInput inputStyle={{'width':'100%'}} inputClass="shadow appearance-none border rounded-r py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline w-100" country={'us'}></PhoneInput>
                            </div>
                            <div className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" strokeWidth={1.0} stroke="white" className="w-10 h-10 p-1 border bg-[#FFF] shadow rounded-l">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                <input className="text-[14px] shadow appearance-none border rounded-r w-full px-3 text-gray leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email Address" />
                            </div>
                            <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow" type="button">
                                Submit
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BannerForm;