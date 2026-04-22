"use client"

import Beams from "@/components/beams";
import GlassSurface from "@/components/glasssurface";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { BrowserView, MobileView } from "react-device-detect";
import { Github } from "lucide-react";

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
      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center", padding: "50px 0 0" }}>
        <GlassSurface
          width="45%"
          height={70}
          borderRadius={40}
          opacity={0.8}
          className="nav-bar"
          backgroundOpacity={0.5}
          distortionScale={140}
          blur={20}
        >
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            width: "100%",
            padding: "0 40px",
          }}>
            <Navigation />
          </div>
        </GlassSurface>
      </div>

      {/* Page content */}
      <main className="relative z-10 flex-1 flex flex-col items-center px-6 pt-20 pb-16">
        <div className="w-full max-w-2xl">

          {/* Heading */}
          <BrowserView>
            <div className="flex items-center gap-4 mb-12">
              <h1 className="text-5xl font-switzer-black text-white whitespace-nowrap">Projects</h1>
              <div className="flex-1 h-px bg-white/10" />
            </div>
          </BrowserView>
          <MobileView>
            <div className="flex items-center gap-4 mb-12">
              <h1 className="text-4xl font-switzer-black text-white whitespace-nowrap">Projects</h1>
              <div className="flex-1 h-px bg-white/10" />
            </div>
          </MobileView>

          {/* Featured project card */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "16px",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            className="p-8 mb-6"
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

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
