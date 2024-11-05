"use client"
import { motion } from "framer-motion"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const ContactPage = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const text = "Contact Me"

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_PUBLIC_KEY,
            )


            .then(
                () => {
                    setSuccess(true);
                    form.current.reset();
                },
                () => {
                    setError(true);
                }
            );
    };













    return (
        <motion.div
            className='h-full'
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}

        >
            {/* text container */}
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl mt-14 mb-12">
                    <div>
                        {text.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: index * 0.1
                                }}>
                                {letter}</motion.span>
                        ))}





                    </div>

                </div>
                {/* form container */}
                <form onSubmit={sendEmail}
                    ref={form} className="h-1/2 lg:h-full lg:w-1/2 bg-purple-100 rounded-xl text-xl flex flex-col gap-8 justify-center p-24 mb-14">

                    <span>Dear Ali Shahid,</span>
                    <input type="hidden" name="to_name" value="Ali Shahid" />
                    <textarea className="bg-transparent border-b-2 border-b-black outline-none resize-none"
                        name="user_message"
                    />
                    <span>My email address is:</span>
                    <input
                        name="user_email"
                        type="text"
                        className="bg-transparent border-b-2 border-b-black outline-none " />
                    <span>Regards</span>
                    <button type="submit" className="bg-purple-200 rounded font-semibold text-gray-600 p-4 hover:bg-purple-300 hover:text-white">
                        Send</button>

                    {success && <span className="text-green-600 font-semibold">
                        Your message has been sent successfully!
                    </span>}
                    {error && <span className="text-red-600 font-semibold">
                        Something went wrong!
                    </span>}
                </form>

            </div>



        </motion.div>
    );
};

export default ContactPage