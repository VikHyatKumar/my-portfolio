import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import QuickLinks from "./components/QuickLinks";

export default function App() {
    return (
        <main className="bg-[#0a0a0a] min-h-screen text-slate-200">
            <Navbar />
            <Hero />
            <About />
            <QuickLinks />
            <TechStack />
            <Projects />
            <Contact />
        </main>
    );
}