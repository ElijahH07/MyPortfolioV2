"use client"

import { useState, useEffect, useRef } from "react"
import Beams from "@/components/beams"
import GlassSurface from "@/components/glasssurface"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Github } from "lucide-react"

export default function ProjectsPage() {
  // Visibility states for scroll-reveal animations
  const [section1Visible, setSection1Visible] = useState(false)
  const [section2Visible, setSection2Visible] = useState(false)
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === section1Ref.current && entry.isIntersecting) setSection1Visible(true)
          if (entry.target === section2Ref.current && entry.isIntersecting) setSection2Visible(true)
        })
      },
      { threshold: 0.1 }
    )
    if (section1Ref.current) observer.observe(section1Ref.current)
    if (section2Ref.current) observer.observe(section2Ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col md:block md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory">
      {/* Fixed background */}
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

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-10 md:pt-[50px]">
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

      {/* Section 1: Telluris Landing Simulation */}
      <section
        ref={section1Ref}
        className="relative z-10 min-h-screen md:h-screen md:snap-start flex items-center justify-center px-6 md:px-12"
      >
        <div className="w-full max-w-5xl">
          <p className="text-white/50 text-center">Section 1 placeholder</p>
        </div>
      </section>

      {/* Section 2: Telluris Avionics TVC */}
      <section
        ref={section2Ref}
        className="relative z-10 min-h-screen md:h-screen md:snap-start flex items-center justify-center px-6 md:px-12"
      >
        <div className="w-full max-w-5xl">
          <p className="text-white/50 text-center">Section 2 placeholder</p>
        </div>
      </section>

      {/* Section 3: Fullscreen Video */}
      <section className="relative z-10 min-h-screen md:h-screen md:snap-start flex items-center justify-center overflow-hidden">
        <p className="text-white/50 text-center">Video placeholder</p>
      </section>

      {/* Footer */}
      <div className="relative z-10 md:snap-start">
        <Footer />
      </div>
    </div>
  )
}
