"use client";
import Link from "next/link"
import React,{useState , useEffect } from 'react';
import NavLink from "./navlink";
import Image from "next/image";
import {motion} from "framer-motion";



const links =[ 
    {url:"/",title:"Home"},
    {url:"/about",title:"About"},
    {url:"/portfolio",title:"Portfolio"},
    {url:"/contact",title:"Contact"}
];




const Navbar = () => {
    const [open,setOpen] = useState(false);

 useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [open]);




    

const topVariants={
   closed:{
      rotate:0,
   },
   opened:{
      rotate:45,
      backgroundColor:"rgb(255,255,255)"
   }
}


const centerVariants={
   closed:{
      opacity:1,
   },
   opened:{
      opacity:0,
   },
};

const bottomVariants={
   closed:{
      rotate:1,
   },
   opened:{
      rotate:-45,
      backgroundColor:"rgb(255,255,255)"
   },
};

const listVariants={
   closed:{
      x:"100vw"

   },
   opened:{
      x:0,
      transition:{
         when:"beforeChildren",
         staggerChildren:0.2,
      },
   },
};

const listItemsVariants={
   closed:{
      x:-10,
      opacity:0,
   },
   opened:{
      x:0,
      opacity:1,
   },
};









    return(
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 bg-gradient-to-b from-purple-200 to-blue-300  '>
         <div className='hidden md:flex gap-4 w-1/3 '>
            {links.map((link)=>(
              <NavLink link={link} key={link.title}/>
            ))}
         </div>
         
         {/* Logo */}
         <div className='md-hidden lg:flex xl:w-1/3 xl:justify-center'>
            <Link href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
            <span className='text-white mr-1'>ALi</span>
            <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>Shahid</span>
            </Link>
         </div>
         {/* SOCIAL */}
         <div className='hidden md:flex gap-4 w-1/3'>
            <a href="https://github.com/m-Alishahid" rel='noopener noreferrer'>
            <Image src="/github.png" alt="" width={24} height={24} />
            </a>
           <a href="https://instagram.com/codecraftali" rel='noopener noreferrer'>
            <Image src="/instagram.png" alt="" width={24} height={24} />
            </a>
            <a href="https://facebook.com/alishahid24" rel='noopener noreferrer'>
            <Image src="/facebook.png" alt="" width={24} height={24} />
            </a>
           
         </div>
        {/* for responsiveness menu */}
         <div className='flex lg:hidden'>
            <button className='w-10 h-8 flex flex-col justify-between z-50 relative'
             onClick={() =>setOpen((prev) => !prev)}>
                <motion.div 
                variants={topVariants} 
                animate={open ? "opened" :"closed"}
                 className='w-10 h-1 bg-black rounded origin-left'>
                  </motion.div>
                <motion.div 
                variants={centerVariants} 
                animate={open ? "opened" :"closed"}
                 className='w-10 h-1 bg-black rounded'>
                  </motion.div>
                <motion.div 
                variants={bottomVariants} 
                animate={open ? "opened" :"closed" }
                className='w-10 h-1 bg-black rounded origin-left'>
                  </motion.div>
            </button>

            {/* menu list */}             
            {open && (  
             <motion.div 
             variants={listVariants}
              initial="closed" 
              animate="opened"
               className='fixed inset-0 top-0 left-0 w-screen min-h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'>
           
           
            {links.map((link)=>( 
            <motion.div variants={listItemsVariants} className=""  key={links.title}>
                  <Link href={link.url}>
                    {link.title}
                    </Link>
                    </motion.div>
             ))} 

          </motion.div>
 )}
         </div>
       
         </div>
    )
}

export default Navbar
