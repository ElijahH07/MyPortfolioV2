"use client"

import Beams from "@/components/beams";
import GlassSurface from "@/components/glasssurface";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import LogoLoop from "@/components/LogoLoop";
import { BrowserView, MobileView } from "react-device-detect";
import { Github } from "lucide-react";
import { SiPython, SiCplusplus, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiGit, SiGithub, SiLatex } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const techLogos = [
  { node: <span className="text-white/40 text-xl"><SiPython /></span>, title: "Python" },
  { node: <span className="text-white/40 text-xl"><SiCplusplus /></span>, title: "C++" },
  { node: <span className="text-white/40 text-xl"><SiJavascript /></span>, title: "JavaScript" },
  { node: <span className="text-white/40 text-xl"><SiTypescript /></span>, title: "TypeScript" },
  { node: <span className="text-white/40 text-xl"><SiReact /></span>, title: "React" },
  { node: <span className="text-white/40 text-xl"><SiNextdotjs /></span>, title: "Next.js" },
  { node: <span className="text-white/40 text-xl"><SiTailwindcss /></span>, title: "Tailwind CSS" },
  { node: <span className="text-white/40 text-xl"><SiGit /></span>, title: "Git" },
  { node: <span className="text-white/40 text-xl"><SiGithub /></span>, title: "GitHub" },
  { node: <span className="text-white/40 text-xl"><SiLatex /></span>, title: "LaTeX" },
  { node: <span className="text-white/40 text-xl"><FaJava /></span>, title: "Java" },
];

const tellurisProject = {
  title: "Telluris Landing Simulation",
  org: "Gaucho Rocket Project",
  description:
    "A rocket landing trajectory and control simulation built in MATLAB and Simulink. Models when to start our second stage hard-fuel engine for vertical landing.",
  tags: ["MATLAB", "Simulink", "Control Systems", "Physics", "6-DOF"],
  github: "https://github.com/Gaucho-Rocket-Project/TellurisLandingSimulation",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      {/* Background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <Beams
          beamWidth={3}
          beamHeight={20}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      {/* Navbar */}
      <div className="relative z-10 flex justify-center px-4 pt-10 md:pt-[50px]">
        <div className="w-full max-w-[92%] md:max-w-[45%]">
          <GlassSurface
            width="100%"
            height={70}
            borderRadius={40}
            opacity={0.8}
            className="nav-bar"
            backgroundOpacity={0.5}
            distortionScale={140}
            blur={20}
          >
            <div className="flex justify-between items-center h-full w-full px-5 md:px-10">
              <Navigation />
            </div>
          </GlassSurface>
        </div>
      </div>

      {/* Page content */}
      <main className="relative z-10 flex-1 flex flex-col items-center px-4 md:px-6 pt-12 md:pt-20 pb-12 md:pb-16">
        <div className="w-full max-w-2xl">

          {/* Heading */}

          {/* Featured project card */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "16px",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            className="p-5 md:p-8 mb-6"
          >
            {/* Featured badge */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-switzer-black text-white/40 tracking-widest uppercase">
                Featured Project
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Org + title */}
            <p className="text-sm font-switzer-reg text-white/50 mb-1">{tellurisProject.org}</p>
            <h2 className="text-2xl font-switzer-black text-white mb-4">{tellurisProject.title}</h2>

            {/* Description */}
            <p className="text-base font-switzer-reg text-gray-300 leading-relaxed mb-6">
              {tellurisProject.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tellurisProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-switzer-reg text-white/70 bg-white/5 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* GitHub link */}
            <a
              href={tellurisProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-switzer-black hover:bg-white/90 active:scale-95 transition-all duration-200"
            >
              <Github size={16} />
              View on GitHub
            </a>
          </div>

          {/* Placeholder for future projects */}
          <div
            style={{
              border: "1px dashed rgba(255,255,255,0.08)",
              borderRadius: "12px",
            }}
            className="px-6 py-5 flex items-center justify-between"
          >
            <p className="text-sm font-switzer-reg text-white/25">More projects coming soon...</p>
          </div>
        </div>
      </main>

      {/* Tech ticker — divider between content and footer */}
      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Tech ticker — very bottom */}
      <div className="relative z-10 border-t border-white/5">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
        <LogoLoop
          logos={techLogos}
          speed={40}
          direction="left"
          pauseOnHover={true}
          logoHeight={22}
          gap={40}
          ariaLabel="Technologies I work with"
          className="py-4"
        />
      </div>
    </div>
  );
}
