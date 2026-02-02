import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const Hero = () => (
    <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 text-center"
    >
        <div className="max-w-5xl">
            {/* VP Logo */}
            <div className="flex justify-center mb-8">
                <img
                    src="/public/VP-nobg.svg"
                    alt="VP Logo"
                    className="h-24 w-24 md:h-32 md:w-32 animate-pulse hover:animate-none transition-all"
                />
            </div>

            <p className="text-cyan-400 font-mono text-xl tracking-[0.3em] uppercase mb-4">
                Hi, I'm Vikhyat Kumar
            </p>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
                Software{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    Developer
                </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
                I build clean, scalable full-stack applications and explore AI-driven solutions using Python.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                    href="#projects"
                    className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform"
                >
                    View Projects
                </a>
                <a
                    href="#contact"
                    className="border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/5 transition"
                >
                    Let's Connect
                </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center mt-8">
                <a
                    href="https://github.com/VikHyatKumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                >
                    <FaGithub className="w-6 h-6" />
                </a>
                <a
                    href="https://www.linkedin.com/in/vikhyat-kumar-62b3b6247/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                    href="https://leetcode.com/u/VikhyatKumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-yellow-500 transition-colors"
                    aria-label="LeetCode"
                >
                    <SiLeetcode className="w-6 h-6" />
                </a>
                <a
                    href="https://www.codechef.com/users/vikhyatkumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-amber-600 transition-colors"
                    aria-label="CodeChef"
                >
                    <SiCodechef className="w-6 h-6" />
                </a>
            </div>
        </div>
    </section>
);

export default Hero;
