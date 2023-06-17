import { Assigment, Assigment1, Assigment10, Assigment11, Assigment12, Assigment13, Assigment14, Assigment15, Assigment16, Assigment17, Assigment18, Assigment19, Assigment2, Assigment20, Assigment21, Assigment3, Assigment4, Assigment5, Assigment6, Assigment7, Assigment8, Assigment9 } from "@/assets/icons";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import styles from '@/styles/services.module.css'
import { Assigment22, Assigment23, Assigment24, Check, Message } from "@/assets";

const OurServices = () => {
    const [contentPara, setContentPara] = useState({ para: '', features: [], image: '', heading: '' });

    const subjects = ['Assignments', 'Dissertations', 'Coursework', 'Proofreading', 'CV & Resume',
        'Ebook Help', 'Content Writitng', 'Essays Help', 'Presentations', 'Homework',
        'Articles', 'Thesis', 'Research Paper Help', 'Exam Help', 'Final Year Project',
        'Quizzes Help', 'Book Report Help', 'Book Analysis Help', 'Online Courses Help',
        'Online Classes Help', 'Research Proposal Help', 'Research Publication Help',
        'Assesments Help', 'Casestudy Help', 'Literature Review Help']

    const content = {
        "0": {
            para: `Writing an assignment is the most tedious task when students try to balance their precioustime between academic responsibilities and other daily chores. To share their burden Gogrades.or extends its helping hand. We are the No.1 online assignment consultancy help service UK provider having completed more than 1000,000+ assignments. The assignment helpers of our website make sure to draft a high quality paper following proper formatting and referencing style.`,
            heading: `Exclusive Features`,
            features: ['Extensive Research', 'Correct Format', 'No Plagiarism', 'Work With No Error', 'Timely Delivery'],
            image: Assigment
        },
        "1": {
            para: `writing a Dissertation can never be easy. A document full of words that require extensive research and a lot of time. The Ph.D. certified writers, associated with us hold expertise in their respective subjects and have delivered around 125678+ dissertations that has helped students clear their terms with flying colors. For well referenced and cited dissertations place an order with us in just a click and let the experts help.`,
            heading: `FREE Features`,
            features: ['Proper Structure', 'On-time Delivery', 'Correct Referencing', 'Original Content', 'Unlimited Revisions', 'Authentic Sources'],
            image: Assigment1
        },
        "2": {
            para: `There are a lot of writing tasks that you would be assigned during your course time. Some of the topics may interest you and others may not.If you find it difficult to work on any of the topics given to you for your coursework just reach to our online coursework help services which have made things easier for around 341234+ students and deliver writing tasks at lightning fast speed.The experts ensure to deliver perfect documents to impress your professors.`,
            heading: `FREE Features`,
            features: ['No Grammatical Errors', 'Correct Formatting', 'Proper Writing Style', 'Time-bound Delivery', 'No Plagiarism', 'Costless Amendments'],
            image: Assigment2
        },
        "3": {
            para: `Grammatical mistakes may let you lose your scores. It is important that the document you get after availing our assignment assistance are not just well researched and formatted but also have no errors. We have a dedicated team of 100+ proofreaders who ensure to check your document several times before delivering it to you. Our online assignment help providers deliver flawless documents without compromising with the quality. So, if you want your documents to be error-free just avail proofreading and editing services by experts.`,
            heading: `FREE Features`,
            features: ['Correct Grammar', 'No Punctuation Errors', 'Best Formatting', 'Quality Work', 'Top-notch Proofreaders', 'Excellent Editors'],
            image: Assigment3
        },
        "4": {
            para: `However, most people looking for resume writing help to land a dream job or their next executive role, are interested in a full-service option. This is where the best resume writing services will pair you with a professional writer who works with you one on one to gather information about your work and education history to tailor a personalized professional resume from scratch. For those willing to pay extra, they’ll also write you a cover letter and help optimize your LinkedIn profile`,
            heading: `FREE Features`,
            features: ['Correct Grammar', 'No Punctuation Errors', 'Best Formatting', 'Highest Quality Work', 'Excellent Results'],
            image: Assigment4
        },
        "5": {
            para: `Ebooks typically have a system of chapters and supporting images. https://gogrades.org/AD/images/svg/Similar to a blog post, they also do well when further segmenting their text with subheaders that break down the discussion into specific sections.`,
            heading: `FREE Features`,
            features: ['Correct Grammar', 'No Punctuation Errors', 'Best Structuring', 'Finest Quality Work', 'Valuable Results'],
            image: Assigment5
        },
        "6": {
            para: `Instead of endlessly searching for freelance writers and haggling over price, let us match your project with writers from our workforce who best suit your needs. Just tell us what you need, and watch the writing begin.`,
            heading: `FREE Features`,
            features: ['Correct Grammar', 'No Punctuation Errors', 'Best Structuring', 'Finest Quality Work', 'Valuable Results'],
            image: Assigment6
        },
        "7": {
            para: `“Where can I find anyone who can help me with my essay?” If you want to know the answer, here you have dozens of experienced writers waiting for your request.`,
            heading: `FREE Features`,
            features: ['Correct Grammar', 'No Punctuation Errors', 'Best Structuring', 'Finest Quality Work', 'Valuable Results'],
            image: Assigment7
        },
        "8": {
            para: `That’s why a PowerPoint slide should be more than just a beautiful graphic design, it’s an opportunity to share your idea. We understand how much hard work, time, and dedication it takes just to get the opportunity to deliver a presentation to your audience, your clients, your investors, or your own company. We believe that the opportunity to deliver an amazing presentation should never be wasted.`,
            heading: `FREE Features`,
            features: ['Correct Grammar', 'No Punctuation Errors', 'Best Structuring', 'Finest Quality Work', 'Valuable Results'],
            image: Assigment8
        },
        "9": {
            para: `Our panel of Expert Tutors are available around the clock to offer online homework help and online assignment help. We are at your service whenever you need us, no questions asked. Our philosophy of being available around the clock comes from our understanding that learning should never stop and by offering 24/7 assistance, we are doing our bit to help you learn better and improve your grades. By bringing together subject matter experts from all across the globe, we ensure online homework help and assignment help through day and night.`,
            heading: `FREE Features`,
            features: ['Correct Grammar', 'No Punctuation Errors', 'Best Structuring', 'Finest Quality Work', 'Valuable Results'],
            image: Assigment9
        },
        "10": {
            para: `A critical focus at Article Company is partnering with SEO, Social Media and PR companies to deliver a flexible 3rd party staff of content writers. Cost effective and efficient, we eliminate wasted time at the client level. Working with an outsourced solution allows wonderful flexibility.`,
            heading: `FREE Features`,
            features: ['Correct Grammar', 'No Punctuation Errors', 'Best Structuring', 'Finest Quality Work', 'Valuable Results'],
            image: Assigment10
        },
        "11": {
            para: `Thesis writing can be extremely tricky. There’s so much riding on it and there’s so many sections that all need to be included. Not only do all of these sections need to be included, but they all need to be done well if you want to gain the maximum amount of marks that you can.`,
            heading: `FREE Features`,
            features: ['Correct Grammar', 'No Punctuation Errors', 'Best Structuring', 'Finest Quality Work', 'Valuable Results'],
            image: Assigment11
        },
        "12": {
            para: `Research Paper can be extremely tricky. There’s so much riding on it and there’s so many sections that all need to be included. Not only do all of these sections need to be included, but they all need to be done well if you want to gain the maximum amount of marks that you can.`,
            heading: `FREE Features`,
            features: ['Correct Grammar', 'No Punctuation Errors', 'Best Structuring', 'Finest Quality Work', 'Valuable Results'],
            image: Assigment12
        },
        "13": {
            para: `Gogrades.org is that one-stop for online test help that will provide you everything that can foster you to perform well. From online examination to the proficient online test, hire our online exam helper to guide you with perfect tips to ace your examination, you will get all on our website. So what are you waiting for? Chat with our Experts.`,
            heading: `FREE Features`,
            features: ['Correct Grammar', 'No Punctuation Errors', 'Best Structuring', 'Finest Quality Work', 'Valuable Results'],
            image: Assigment13
        },
        "14": {
            para: `Students who are looking for final year project help can now find their answers here. Typically, when we hear the word Final Year or the last semester, we instantly start thinking about complex and heavy projects that get assigned to every student or a group of students. A lot of students get confused or get in a state of feeling “not at all motivated” because of the sophisticated final year project that is getting piled up on their table. The best thing to do is they can come in contact with the best final year project help services to ease off the work and get their projects done in no time whatsoever.`,
            heading: `FREE Features`,
            features: ['Correct Grammar', 'No Punctuation Errors', 'Best Structuring', 'Finest Quality Work', 'Valuable Results'],
            image: Assigment14
        },
        "15": {
            para: `Just keep aside your fear and clench the penmanship of the Gogrades.org. The best and best quiz specialists from every subject are convenient here only to obtain the online test help. The masterminds are always ready to assist you through WhatsApp. You may have no idea about their acquaintances.`,
            heading: `FREE Features`,
            features: ['Correct Grammar', 'No Punctuation Errors', 'Best Structuring', 'Finest Quality Work', 'Valuable Results'],
            image: Assigment15
        },
        "16": {
            para: `At Gogrades.org, we provide book report writing help in all fields of study. Our team involves top experts who belong from renowned universities. They will follow every instruction you gave while composing a 100% original book report. If you have any specific request, let them know with our online chat option.`,
            heading: `FREE Features`,
            features: ['Correct Grammar', 'No Punctuation Errors', 'Best Structuring', 'Finest Quality Work', 'Valuable Results'],
            image: Assigment16
        },
        "17": {
            para: `Your professor has just assigned you a literary analysis. You have no idea what that is, let alone how to write one. The first thing to understand is that a literary analysis involves literature and the discussion of some aspect of it. For example, if you have been assigned a literary anaysis on Charles Dickens' A Tale of Two Cities, you may want to write it on Sydney Carton's role as a Christ figure in the novel.`,
            heading: `FREE Features`,
            features: ['Correct Grammar', 'No Punctuation Errors', 'Best Structuring', 'Finest Quality Work', 'Valuable Results'],
            image: Assigment17
        },
        "18": {
            para: `Learning an Online Courses is not always easy. There’s so much riding on it and there’s so many things that all need to be takled. Not only do all of these concerns need to be catered, but they all need to be done well if you want to gain the maximum of that you can.`,
            heading: `FREE Features`,
            features: ['100% A+ Grades', 'No Misconceptions', 'Best Structuring', 'Finest Quality Work', 'Valuable Results'],
            image: Assigment18

        },
        "19": {
            para: `If you are having trouble balancing your busy life schedule with taking online classes, you can pay someone to take your online class for you. Whether you need help passing just one exam, completing a single homework assignment, or even an entire class, you can pay someone to take your online class to pass with a guaranteed A or B!`,
            heading: `FREE Features`,
            features: ['Strict Citation Rules', 'Highest Quality Of Work Ethic', 'Your Location Safety', 'Finest Quality Work', 'Valuable Results'],
            image: Assigment19
        },
        "20": {
            para: `If you are having trouble balancing your busy life schedule with making Research Proposal, you can pay someone to take your research proposal for you. Whether you need help passing just one exam, completing a single homework assignment, or even an entire class, you can pay someone to Make your Research Proposal to pass with a guaranteed A or B!`,
            heading: `FREE Features`,
            features: ['Strict Citation Rules', 'Highest Quality Of Work Ethic', 'Your Location Safety', 'Finest Quality Work', 'Valuable Results'],
            image: Assigment20
        },
        "21": {
            para: `Whether you are a Ph.D. student or a senior researcher, time is a precious commodity. Publishing your research can involve several hurdles. However, Gogrades’s experts help you at every step, so that your publishing journey is as smooth as it can be. Plus, we also offer a range of service packages to choose from so that you find one that perfectly fits your requirements. Our expert panelists will review your paper and provide constructive comments to help you improve your manuscript before submission to the journal of your choice. Our experts will work with you to determine the most suitable journals, assist in manuscript editing before submission, carry out a technical review, and provide post-submission support wherever necessary.`,
            heading: `FREE Features`,
            features: ['Journal Selection', 'Premium editing', 'Resubmission Support', 'Pre-submission Peer Review', 'Finest Quality Work'],
            image: Assigment21
        },
        "22": {
            para: `Assessments help teachers and professors determine whether the goals of education are being met or not. You can be asked to work on different types of assessments. The grades will have a huge impact on your overall academic performance. Get online assessment help from us if you don’t have the time to focus on your assessments.`,
            heading: `Premium Features`,
            features: ['Multi essay types flexibility', 'Adherence to your university guidelines', 'Familiarity with referencing formats', 'Credible facts, figures, and examples', 'Your institution’s marking rubric'],
            image: Assigment22
        },
        "23": {
            para: `Case Study Help providing one stop solution for students with 100% satisfaction guaranteed. Get the best expert help with your unclear assignments tasks and complex case studies assignment writing service for Business Marketing, Finance and accounting, Business Law, Nursing and engineering related topics and subjects.`,
            heading: `Premium Features`,
            features: ['Unique & Plagiarism free', 'Premium Quality Guaranty', 'Pocket-Friendly Price', 'Round the clock Writing Support', 'Finest Quality Work'],
            image: Assigment23
        },
        "24": {
            para: `Literature review writing service makes the life of a student so much easier. Gogrades.org is a professional team of writers who are ready to help you. You can always rely on their proficiency and as a result, you get high-quality papers. It doesn’t matter whether you need a dissertation or a regular assignment for your. We are online and ready to provide you with any assistance. Plenty of students are using our services.`,
            heading: `Premium Features`,
            features: ['100% Privacy Guaranteed', 'Top Professional Writers', 'Resubmission Support', 'Plagiarism-Free Policy', 'On-Time Deliveryy', 'On-Time Delivery'],
            image: Assigment24
        }
    }
    const check = [
        {
            id: 1,
            heading: "Extensive Research",
            title: "Work With No Error",

        },
        {
            id: 2,
            heading: "Correct Format",
            title: "Timely Delivery"

        },
        {
            id: 3,
            heading: "No Plagiarism",
            title: "Relevant Content"
        },
    ]

    const HandleClickSubjects = (event) => {
        const id = event.target.dataset.id
        setContentPara(content[id]);
    }
    return (
        <>
            <section className="bg-[#f1f1f1]">
                <div className="container mx-auto">
                    <div className="flex lg:flex-row flex-col-reverse justify-around py-12">
                        <div className=" lg:mx-10 mx-4  z-20">
                            <p className="text-[#F25F5C] text-lg leading-8">- OUR SERVICES</p>
                            <h2 className="text-[#071E57] xs:text-[1.8rem] text-[1.5rem] max-w-[32rem] font-semibold leading-8">Online Academic Help Services That We Provide @Gogrades.org</h2>
                            <div className="mt-8 max-w-[555rem]">
                                {
                                    subjects.map((subject, index) => (
                                        <Fragment key={index}>
                                        <button onClick={HandleClickSubjects} data-id={index} className={`${styles.button} bg-[#e7403d] p-2 m-1 rounded-md text-[#FFF] hover:bg-[#1c3d72] shadow-lg width-64`}>{subject}</button>
                                        </Fragment>

                                    ))
                                }
                            </div>
                            <p className="text-[#3E4657] max-w-[35rem] py-4 leading-5">
                                {contentPara.para ? contentPara.para : content[0].para}   </p>
                            <h3 className="text-[#071E57] text-xl font-semibold">
                                {contentPara.heading ? contentPara.heading : content[0].heading}
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                {
                                    contentPara.features
                                        ?
                                        contentPara.features.map((feature, index) => (
                                            <div key={index}>
                                                <div className="flex">
                                                <Image 
                                                src={Check}
                                                alt="tihs"
                                                width={20}
                                                height={20}
                                                />
                                                <p className="pl-2 text-sm">{feature}</p>
                                                </div>
                                            </div>
                                        ))
                                        :
                                        content[0].features
                                }
                            </div>

                            <button className="bg-[#e73f3b] w-64 text-center text-lg p-2 text-[#FFF] font-semibold  border-4 border-[#e73f3b] hover:drop-shadow-2xl rounded-md my-4">
                                Chat On Whatsapp
                            </button>
                            <p >
                                <button className={` ${styles.btn} w-56 text-center text-lg p-2 font-semibold  border-4 drop-shadow-[155rem] rounded-md`}>
                                    <div className="flex">
                                        <Image
                                            src={Message}
                                            alt="this"
                                            width={30}
                                            height={30}
                                            className="flex"
                                        /> <label className="pl-4">Talk With Experts </label>
                                    </div>
                                </button>
                            </p>
                        </div>
                        <div >
                            <Image
                                src={contentPara.image ? contentPara.image : content[0].image}
                                alt="this"
                                width={4000}
                                height={4000}
                                className="lg:relative static top-0 right-16 z-[1]"
                            />
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OurServices;