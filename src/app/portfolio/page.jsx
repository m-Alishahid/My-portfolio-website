"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

//items decarled here
const items =[
  {
    id:1,
    color:"from-blue-300 to-purple-300",
    title:"Calculator application",
    desc:"Fully function calculator application",
    img:"https://images.pexels.com/photos/262470/pexels-photo-262470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link:"https://calculator-app-by-m-a-s.vercel.app"
  },

  {
    id:2,
    color:"from-blue-300 to-violet-300",
    title:"Resume Builder application",
    desc:"Easy to generate your own resume using my application",
    img:"https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link:"https://milestone5-resume-builder-by-m-a-s.vercel.app"
  },

  {
    id:3,
    color:"from-violet-300 to-purple-300",
    title:"Simple portfolio website",
    desc:"Simple designed of personal portfolio website",
    img:"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link:"https://simple-portfolio-by-m-a-s.vercel.app"
  },

  {
    id:4,
    color:"from-purple-300 to-red-300",
    title:"Inventory management system",
    desc:"Easily add delete or edit product using my inventory management application",
    img:"https://images.pexels.com/photos/7172830/pexels-photo-7172830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    link:"https://inventory-management-system-by-m-a-s.vercel.app"
  }



]




//items access here
const PortfolioPage = () => {
    const ref = useRef();
    
    // Destructure scrollYProgress from useScroll
    const { scrollYProgress } = useScroll({ target: ref });
    
    // Use scrollYProgress in useTransform
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return ( 
        <motion.div 
            className='h-full bg-gradient-to-b from-blue-200 to-purple-200'
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-[600vh] ref={ref}">
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center"> My Works 

               
                </div>

              



                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{x}} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-blue-300" />
{items.map(items=>(
    <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${items.color}`} key={items.id}>

<div className="flex flex-col gap-8 text-white">
    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{items.title}</h1>
    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:h-[420px]">
        <Image src={items.img} alt="" fill/>
            </div>

            <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">{items.desc}</p>
            <Link href={items.link} className="flex justify-end">
            <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Live</button>
            </Link>
</div>
</div>
))}
          </motion.div>
          
          </div>
            </div>

            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
            <h1 className="text-6xl lg:mt-32">Ready to launch something amazing?</h1>
            <div className="relative">
                <motion.svg animate={{rotate:360}} transition={{duration:8,ease:"linear",repeat:Infinity}} viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]">
                    <defs>
                        <path
                        id="circlePath"
                        d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
                        />
                    </defs>
                    
                     <text fill="#000">
                        <textPath xlinkHref="#circlePath" 
                        className="text-xl">
                            Front-end Developer and Programmer
                            
                            </textPath>
                     </text>

                </motion.svg>
                <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center hover:text-blue-500 cursor-pointer">Hire Me</Link>

            </div>
          </div>
        </motion.div>
    );
};

export default PortfolioPage;
