"use client"

import { useState, useEffect, useRef } from "react"
import Beams from "@/components/beams"
import GlassSurface from "@/components/glasssurface"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  // Visibility states for scroll-reveal animations
  const [section1Visible, setSection1Visible] = useState(false)
  const [section2Visible, setSection2Visible] = useState(false)
  const [videoVisible, setVideoVisible] = useState(false)
  const [section3Visible, setSection3Visible] = useState(false)
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === section1Ref.current) setSection1Visible(entry.isIntersecting)
          if (entry.target === section2Ref.current) setSection2Visible(entry.isIntersecting)
          if (entry.target === videoRef.current) setVideoVisible(entry.isIntersecting)
          if (entry.target === section3Ref.current) setSection3Visible(entry.isIntersecting)
        })
      },
      { threshold: 0.1 }
    )
    if (section1Ref.current) observer.observe(section1Ref.current)
    if (section2Ref.current) observer.observe(section2Ref.current)
    if (videoRef.current) observer.observe(videoRef.current)
    if (section3Ref.current) observer.observe(section3Ref.current)
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
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6" style={{ transform: "translateZ(0)" }}>
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
        className="relative z-10 min-h-screen md:h-screen md:snap-start flex items-center justify-center px-6 md:px-12 pt-44 md:pt-24"
      >
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text block — slides from left */}
          <div
            className={`flex-1 transition-all duration-700 ${
              section1Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-sm font-switzer-reg text-white/50 mb-1">Gaucho Rocket Project</p>
            <h2 className="text-3xl md:text-4xl font-switzer-black text-white mb-4">
              Telluris Landing Simulation
            </h2>
            <p className="text-base font-switzer-reg text-gray-300 leading-relaxed mb-6">
              A rocket landing trajectory and control simulation built in MATLAB. 
              Simulates the full descent with thrust modeling Then uses <code className="text-white/70">fminbnd </code> optimization to find the ideal second-stage
              engine ignition time.
            </p>
            <div
              className={`flex flex-wrap gap-2 mb-6 transition-all duration-700 delay-200 ${
                section1Visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              {["MATLAB", "Simulink", "Control Systems", "Physics", "6-DOF"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-switzer-reg text-white/70 bg-white/5 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/Gaucho-Rocket-Project/TellurisLandingSimulation"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-switzer-black hover:bg-white/90 active:scale-95 transition-all duration-700 delay-300 ${
                section1Visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <Github size={16} />
              View on GitHub
            </a>
          </div>

          {/* Code snippet — slides from right */}
          <div
            className={`flex-1 w-full transition-all duration-700 delay-150 ${
              section1Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "16px",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              {/* Terminal chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-white/[0.03] rounded-t-2xl">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-xs text-white/25 tracking-wide">findSecondStageStart.m</span>
              </div>
              {/* Code body */}
              <div className="p-4 md:p-5 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
                <pre className="text-white/60">
                  <code>{`% Physics simulation — Newton's 2nd law
% positive is downward
for i = 1:length(t)-1
    if h(i) <= 0
        break;
    end

    % Thrust profile: initial burst then sustain
    if (t(i) > startTime && t(i) < startTime + 0.5)
        F_rocketPulse(i) = 22.0;  % max thrust (N)
    elseif (t(i) > startTime && ...
            t(i) < startTime + totalBurnTime)
        F_rocketPulse(i) = 17.0;  % sustained (N)
    end

    a(i) = g - F_rocketPulse(i)/m;
    v(i+1) = v(i) + a(i) * dt;
    h(i+1) = h(i) - v(i)*dt - 0.5*a(i)*dt^2;
end`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Telluris Avionics TVC */}
      <section
        ref={section2Ref}
        className="relative z-10 min-h-screen md:h-screen md:snap-start flex items-center justify-center px-6 md:px-12 pt-44 md:pt-24"
      >
        <div className="w-full max-w-5xl flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          {/* Code snippet — slides from left (flipped layout) */}
          <div
            className={`flex-1 w-full transition-all duration-700 delay-150 ${
              section2Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "16px",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              {/* Terminal chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-white/[0.03] rounded-t-2xl">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-xs text-white/25 tracking-wide">realRocket.ino — IMU + PID Control</span>
              </div>
              {/* Code body */}
              <div className="p-4 md:p-5 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
                <pre className="text-white/60">
                  <code>{`// Quaternion → Euler angles (ICM-20948)
const double roll = atan2(
    2.0 * (q0*q1 + q2*q3),
    1.0 - 2.0 * (q1*q1 + q2*q2));
const double pitch = asin(
    clamp(2.0*(q0*q2 - q3*q1), -1, 1));

// PID thrust vector control
for (int axis = 0; axis < 2; ++axis) {
    error_integral[axis] += error[axis] * dt;
    float d = (error[axis] - prev[axis]) / dt;

    float correction = Kp * error[axis]
        + Ki * error_integral[axis]
        + Kd * d;

    servo[axis] = CENTER + clamp(
        correction, -MAX_DEFL, MAX_DEFL);
}
servoX.write(servo[0]);
servoY.write(servo[1]);`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Text block — slides from right (flipped layout) */}
          <div
            className={`flex-1 transition-all duration-700 ${
              section2Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-sm font-switzer-reg text-white/50 mb-1">Gaucho Rocket Project</p>
            <h2 className="text-3xl md:text-4xl font-switzer-black text-white mb-4">
              Telluris Avionics - Thrust Vector Control
            </h2>
            <p className="text-base font-switzer-reg text-gray-300 leading-relaxed mb-6">
              Flight avionics code for the Telluris rocket&apos;s self-landing system.
              Reads quaternion orientation data from an ICM-20948 IMU, converts to Euler
              angles, and runs a PID control loop to deflect thrust-vectoring servos
              for active stabilization during flight.
            </p>
            <div
              className={`flex flex-wrap gap-2 mb-6 transition-all duration-700 delay-200 ${
                section2Visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              {["C++", "PID Control", "Embedded Systems", "Thrust Vectoring", "Avionics"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-switzer-reg text-white/70 bg-white/5 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/Gaucho-Rocket-Project/bola/tree/test"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-switzer-black hover:bg-white/90 active:scale-95 transition-all duration-700 delay-300 ${
                section2Visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <Github size={16} />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Fullscreen Static Fire Video */}
      <section
        ref={videoRef}
        className={`relative z-10 h-screen md:snap-start overflow-hidden transition-opacity duration-1000 ${
          videoVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(1)", WebkitFilter: "brightness(1)" }}
        >
          <source src="/projects/static_fire.MOV" type="video/quicktime" />
          <source src="/projects/static_fire.MOV" type="video/mp4" />
        </video>
        {/* Dim overlay */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Gradient edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]/50" />
        {/* Title text */}
        <div className={`absolute inset-0 flex items-end p-8 md:p-16 transition-all duration-1000 delay-300 ${
          videoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <div>
            <p className="text-sm md:text-base font-switzer-reg text-white/40 mb-2 tracking-widest uppercase">Gaucho Rocket Project</p>
            <h2 className="text-5xl md:text-7xl font-switzer-black text-white leading-none" style={{ fontWeight: 900, letterSpacing: "-0.02em" }}>
              Telluris
              <br />
              Static Fire
            </h2>
          </div>
        </div>
      </section>

      {/* Section 4: Ortega Eats */}
      <section
        ref={section3Ref}
        className="relative z-10 min-h-screen md:h-screen md:snap-start flex items-end md:items-center justify-center px-6 md:px-12 pt-28 pb-10 md:pt-24 md:pb-0"
      >
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text block — slides from left */}
          <div
            className={`flex-1 transition-all duration-700 ${
              section3Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-sm font-switzer-reg text-white/50 mb-1">Co-Founder</p>
            <h2 className="text-3xl md:text-4xl font-switzer-black text-white mb-4">
              Ortega Eats
            </h2>
            <p className="text-base font-switzer-reg text-gray-300 leading-relaxed mb-3">
              Co-founded a platform that saved UCSB students <span className="text-white font-switzer-black">$5,000+</span> by letting them buy and sell dining hall meal swipes through an iOS app.
            </p>
            <p className="text-base font-switzer-reg text-gray-300 leading-relaxed mb-6">
              Students without meal plans get dining hall food at a fraction of the cost,
              while meal plan holders earn money on swipes they&apos;d otherwise waste.
              Built with React Native, Stripe payments, and a Next.js marketing site.
            </p>
            <div
              className={`flex flex-wrap gap-2 mb-6 transition-all duration-700 delay-200 ${
                section3Visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              {["React Native", "iOS", "Stripe", "Next.js", "Startup"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-switzer-reg text-white/70 bg-white/5 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://ortegaeats.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-switzer-black hover:bg-white/90 active:scale-95 transition-all duration-700 delay-300 ${
                section3Visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <ExternalLink size={16} />
              Visit ortegaeats.com
            </a>
          </div>

          {/* Phone mockup with embedded site — slides from right */}
          <div
            className={`flex-1 flex justify-center transition-all duration-700 delay-150 ${
              section3Visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div
              className="relative rounded-[3rem] bg-black overflow-hidden"
              style={{
                width: "280px",
                height: "580px",
                border: "6px solid rgba(255,255,255,0.15)",
                boxShadow: "0 0 40px rgba(255,255,255,0.05)",
              }}
            >
              {/* Notch */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-black rounded-b-2xl"
                style={{ width: "120px", height: "28px" }}
              />
              {/* Screen recording */}
              <div className="absolute inset-0 overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(1)", WebkitFilter: "brightness(1)" }}
                >
                  <source src="/projects/ortega_recording.mov" type="video/quicktime" />
                  <source src="/projects/ortega_recording.mov" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-10 md:snap-start">
        <Footer />
      </div>
    </div>
  )
}
