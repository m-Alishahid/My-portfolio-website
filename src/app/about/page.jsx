"use client"
import { motion, useInView, useScroll } from "framer-motion"
import { useRef } from 'react';





const AboutPage = () => {

    const containerRef = useRef();   
    const skillRef = useRef()  
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

    const eduRef = useRef()
    const iseduRefInView = useInView(eduRef, { margin: "-100px" });



    return (
        <motion.div
            className='h-full'
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}

        >
            
            {/* container */}
            <div className="h-full  lg:flex">
                {/* text container */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr0 xl:1/2">
                    {/* journey container */}
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">Explore My Journey</h1>
                        <p>As a frontend developer and UI designer,
                            I&apos;m dedicated to creating seamless digital
                            experiences. I focus on user-centric design
                            principles to craft elegant interfaces that
                            blend aesthetics with functionality. My passionlies
                            in shaping the digital landscape with purpose and innovation.
                        </p>
                        <span id="glowing-text" >Currently Learning Cloud Applied (GenAI) Engineering through GIAIC</span>
                        <div className="">
                            {/* journey svg  */}
                            <motion.svg
                                initial={{ opacity: 0.2, y: 0 }}
                                animate={{ opacity: 1.2, y: "10px" }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                width={50}
                                height={50}
                            >
                                {/* Rounded bottom */}
                                <path
                                    d="M5 15C5 17 6 19 8 20.5C10 22 14 22 16 20.5C18 19 19 17 19 15"
                                    stroke="#000000"
                                    strokeWidth='1'
                                />
                                {/* Vertical line */}
                                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                                {/* Arrow down */}
                                <path
                                    d="M15 11L12 14L9 11"
                                    stroke="#000000"
                                    strokeWidth="1"
                                />
                            </motion.svg>



                        </div>
                    </div>
                    {/* skills container */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        {/* skills title */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            MY SKILLS
                        </motion.h1>
                        <motion.div
                            className="flex gap-4 flex-wrap"
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Html</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Css</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Javascript</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Typescript</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">NodeJs</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">NextJs</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Bootstrap</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind css</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Git</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Github</div>
                        </motion.div>
                        {/* skill scroll button */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1.2, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            {/* Rounded bottom */}
                            <path
                                d="M5 15C5 17 6 19 8 20.5C10 22 14 22 16 20.5C18 19 19 17 19 15"
                                stroke="#000000"
                                strokeWidth='1'
                            />
                            {/* Vertical line */}
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            {/* Arrow down */}
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            />
                        </motion.svg>

                    </div>
                    {/* experience container */}
                    <div className="flex flex-col gap-12 justify-center pb-48" ref={eduRef}>
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={iseduRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl">MY EDUCATION</motion.h1>
                        {/* list of education */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={iseduRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="">
                            {/* items */}
                            <div className="flex justify-between h-48">
                                {/* left */}

                                <div className="w-1/3">{/* education title */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Under Intermediate</div>
                                    {/* DESCRIPTION */}
                                    <div className="p-3 text-sm italic">Currently under intermediate second year in Computer science department</div>
                                    {/* period */}
                                    <div className="p-3 text-purple-500 text-sm font-semibold">2023-present</div>
                                    {/* institute */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Govt.City college</div>

                                </div>

                                {/* center */}
                                <div className="w-1/6">
                                    {/* line */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* line circle */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-400 bg-white -left-2"></div>
                                    </div>
                                </div>

                                {/* right */}
                                <div className="w-1/3"> </div>

                            </div>




                            {/* items */}
                            <div className="flex justify-between h-48">
                                {/* left */}

                                <div className="w-1/3">

                                </div>

                                {/* center */}
                                <div className="w-1/6">
                                    {/* line */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* line circle */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-400 bg-white -left-2"></div>
                                    </div>
                                </div>

                                {/* right */}
                                <div className="w-1/3">{/* education title */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Basic Web development</div>
                                    {/* DESCRIPTION */}
                                    <div className="p-3 text-sm italic">I complete basic learning of html css and bootstrap</div>
                                    {/* period */}
                                    <div className="p-3 text-purple-500 text-sm font-semibold">2022-2023</div>
                                    {/* institute */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Al-Rehbar institute</div></div>

                            </div>







                            {/* items */}
                            <div className="flex justify-between h-48">
                                {/* left */}

                                <div className="w-1/3">{/* education title */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Matriculation in Computer Science</div>
                                    {/* DESCRIPTION */}
                                    <div className="p-3 text-sm italic">I complete our school life studies in computer science</div>
                                    {/* period */}
                                    <div className="p-3 text-purple-500 text-sm font-semibold">2023</div>
                                    {/* institute */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Children Model Academy</div>

                                </div>

                                {/* center */}
                                <div className="w-1/6">
                                    {/* line */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* line circle */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-400 bg-white -left-2"></div>
                                    </div>
                                </div>

                                {/* right */}
                                <div className="w-1/3"> </div>

                            </div>



                        </motion.div>
                    </div>
                </div>
                {/* svg container */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
                    {/* <Gif scrollYProgress={scrollYProgress} /> */}


                </div>
            </div>

        </motion.div>


    )
}

export default AboutPage

