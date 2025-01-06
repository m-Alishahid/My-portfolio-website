"use client";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";

const Homepage = () => {
  return (
  
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans relative">
     
      {/* Profile Name Animation */}
      <motion.div
        id="code"
        className="absolute top-4  left-[45%] sm:left-[45%] md:left-[45%] transform -translate-x-1/2 z-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full shadow-lg font-semibold text-3xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <motion.span
          className="inline-block animate-pulse"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
        >
          codecraftali
        </motion.span>
      </motion.div>

      {/* Motion wrapper */}
      <motion.div
        className="flex flex-col flex-grow"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col lg:flex-row flex-grow px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 mt-20">
          {/* Image container */}
          <div className="flex justify-center items-center lg:w-1/2">
            <div className="rounded-t-full w-64 h-64 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-b from-blue-200 to-purple-300 shadow-lg flex items-center justify-center border-4">
              <Image
                id="custom-small"
                src="/dev-ali.png"
                alt="Developer Image"
                width={300}
                height={280}
                className="w-52 h-56 sm:w-40 sm:h-[180px] md:w-56 md:h-56 lg:w-[300px] lg:h-[375px]"
              />
            </div>
          </div>

          {/* Text Container */}
          <div className="flex flex-col gap-8 items-center justify-center lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Hello, I am Muhammad Ali Shahid
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-center bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Next.js Developer",
                    "TypeScript Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="md:text-lg text-center px-4 text-gray-600 leading-relaxed">
              Welcome to a frontend web developer&apos;s portfolio, featuring
              expertise in TypeScript and Next.js. Explore sleek designs,
              fast-loading pages, and interactive projects that demonstrate a
              passion for creating user-friendly, modern web experiences with
              clean code.
            </p>

            {/* Buttons */}
            <div className="w-full flex gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform">
                Download C.V
              </button>
              <a
                href="https://github.com/m-Alishahid"
                rel="noopener noreferrer"
                target="_blank"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform"
              >
                Visit Github
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Homepage;
