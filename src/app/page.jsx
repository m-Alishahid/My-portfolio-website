"use client";

import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Parent div with min-h-screen */}
      <motion.div
        className="flex flex-col flex-grow" // Remove h-screen from here
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >




        {/* Main Container */}


        <div className='flex flex-col lg:flex-row flex-grow px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
          {/* Image container */}
          <div className="flex justify-center items-center lg:w-1/2">
            <div className="rounded-t-full w-64 h-64 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-b from-blue-200 to-purple-300 shadow-lg flex items-center justify-center border-4">
              <Image
              id='custom-small'
                src="/dev-ali.png"
                alt="Developer Image"
                width={300}
                height={280}
                className='w-52 h-56 sm:w-40 sm:h-[180px] md:w-56 md:h-56 lg:w-[300px] lg:h-[375px]'

               
              >
              </Image>
            </div>
          </div>



          {/* TEXT.DEV */}
          <div className="flex flex-col gap-8 items-center justify-center lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-center">Hello, I am Muhammad Ali Shahid</h1>
{/* id="textdev" */}
            <h1  className="text-2xl md:text-4xl font-bold  bg-gradient-to-r from-purple-300 to-blue-300">
              <Typewriter
                options={{
                  strings: ['Frontend Developer', 'NextJs Developer', 'Typescript Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <p className="md:text-xl text-center px-4 ">
              Welcome to a frontend web developer&apos;s portfolio, featuring expertise in TypeScript and Next.js. Explore sleek designs, fast-loading pages, and interactive projects that demonstrate a passion for creating user-friendly, modern web experiences with clean code
            </p>
{/* id="buttons" */}
            <div className="w-full flex gap-4 justify-center">
              <button className="bg-purple-300 rounded font-semibold text-gray-600 p-4 hover:bg-purple-400 hover:text-white">Download C.V</button>
            <button className="bg-purple-300 rounded font-semibold text-gray-600 p-4 hover:bg-purple-400 hover:text-white">
                <a href="https://github.com/m-Alishahid" rel="noopener noreferrer">Visit Github</a>
              </button>


            </div>
          </div>
        </div>
        <br />
      </motion.div>

      {/* Footer component placed outside motion div for better control */}

    </div>
  );
};

export default Homepage;