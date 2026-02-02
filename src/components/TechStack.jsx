import React from "react";
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,

} from "react-icons/fa";
import {
    SiMongodb,
    SiPython,
    SiCplusplus,
    SiExpress,
    SiTailwindcss,
    SiJavascript,
    SiPostman,
    SiGithub,
    SiLinux,
    SiDocker,
} from "react-icons/si";


const StackItem = ({ icon: Icon, label, color }) => (
    <div className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition">
        <Icon size={40} className={color} />
        <span className="text-slate-300 text-xs font-medium">{label}</span>
    </div>
);

const TechStack = () => (
    <section id="stack" className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-16">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            <StackItem icon={SiCplusplus} label="C++" color="text-[#00599C]" />
            <StackItem icon={SiMongodb} label="MongoDB" color="text-green-500" />
            <StackItem icon={SiExpress} label="Express" color="text-slate-300" />
            <StackItem icon={FaReact} label="React.js" color="text-cyan-400" />
            <StackItem icon={FaNodeJs} label="Node.js" color="text-green-400" />
            <StackItem icon={SiTailwindcss} label="Tailwind" color="text-sky-400" />
            <StackItem icon={SiJavascript} label="JavaScript" color="text-yellow-400" />
            <StackItem icon={SiPython} label="Python" color="text-[#4B8BBE]" />
            <StackItem icon={SiPostman} label="Postman" color="text-orange-500" />
            <StackItem icon={FaHtml5} label="HTML" color="text-orange-500" />
            <StackItem icon={SiGithub} label="GitHub" color="text-white" />
            <StackItem icon={SiLinux} label="Linux (Basics)" color="text-white" />
            <StackItem icon={SiDocker} label="Docker (Basics)" color="text-[#1D63ED]" />
        </div>
    </section>
);

export default TechStack;