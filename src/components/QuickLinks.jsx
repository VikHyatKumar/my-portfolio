import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const QuickLinks = () => (
    <section id="links" className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
                Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">& Connect</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <a
                    href="https://github.com/VikHyatKumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-xl hover:border-white/30 hover:bg-white/10 transition-all duration-300 group"
                >
                    <FaGithub className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors" />
                    <span className="text-slate-300 group-hover:text-white font-medium transition-colors">GitHub</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/vikhyat-kumar-62b3b6247/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                >
                    <FaLinkedin className="w-12 h-12 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    <span className="text-slate-300 group-hover:text-blue-400 font-medium transition-colors">LinkedIn</span>
                </a>
                <a
                    href="https://leetcode.com/u/VikhyatKumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-xl hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300 group"
                >
                    <SiLeetcode className="w-12 h-12 text-slate-400 group-hover:text-yellow-400 transition-colors" />
                    <span className="text-slate-300 group-hover:text-yellow-400 font-medium transition-colors">LeetCode</span>
                </a>
                <a
                    href="https://www.codechef.com/users/vikhyat04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-xl hover:border-amber-700/50 hover:bg-amber-700/10 transition-all duration-300 group"
                >
                    <SiCodechef className="w-12 h-12 text-slate-400 group-hover:text-amber-600 transition-colors" />
                    <span className="text-slate-300 group-hover:text-amber-600 font-medium transition-colors">CodeChef</span>
                </a>
            </div>
        </div>
    </section>
);

export default QuickLinks;
