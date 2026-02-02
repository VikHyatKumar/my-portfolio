import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => (
    <section id="contact" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-slate-400 mb-10">Open to collaboration and new opportunities.</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
                href="mailto:vikhyatkumar04@gmail.com"
                className="bg-cyan-500 flex items-center gap-2 text-black px-10 py-4 rounded-full font-bold hover:bg-cyan-400 transition"
            >
                <SiGmail className="w-5 h-5" />
                vikhyatkumar04@gmail.com
            </a>
            <a
                href="https://www.linkedin.com/in/vikhyat-kumar-62b3b6247/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-10 py-4 border-2 border-blue-500 rounded-full hover:bg-blue-500/10 transition text-slate-300 hover:text-blue-400"
            >
                <FaLinkedin className="w-5 h-5" />
                LinkedIn
            </a>
        </div>
    </section>
);

export default Contact;