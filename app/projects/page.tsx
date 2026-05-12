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
              Uses <code className="text-white/70">fminbnd</code> optimization to find the ideal second-stage
              engine ignition time, then simulates the full descent with thrust modeling
              and Newton&apos;s second law integration.
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
        className="relative z-10 min-h-screen md:h-screen md:snap-start flex items-center justify-center px-6 md:px-12"
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
                  <code>{`// Quaternion → Euler angle conversion
// from ICM-20948 DMP data
double q0sq = 1.0 - (q1*q1 + q2*q2 + q3*q3);
if (q0sq < 0.0) q0sq = 0.0;
const double q0 = sqrt(q0sq);

const double roll  = atan2(
    2.0 * (q0*q1 + q2*q3),
    1.0 - 2.0 * (q1*q1 + q2*q2));
const double pitch = asin(
    clamp(2.0 * (q0*q2 - q3*q1), -1, 1));

data.euler_deg[0] = roll  * DEG_PER_RAD;
data.euler_deg[1] = pitch * DEG_PER_RAD;

// ─── PID thrust vector control ───
current_roll  = angleDiff(euler[0], roll_bias);
current_pitch = angleDiff(euler[1], pitch_bias);

for (int axis = 0; axis < 2; ++axis) {
    error_integral[axis] += error[axis] * dt;
    float derivative = (error[axis]
                      - prev_error[axis]) / dt;

    float correction =
        Kp * error[axis] +
        Ki * error_integral[axis] +
        Kd * derivative;

    servo[axis] = CENTER + clamp(correction,
        -MAX_DEFLECTION, MAX_DEFLECTION);
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
              Telluris Avionics — Thrust Vector Control
            </h2>
            <p className="text-base font-switzer-reg text-gray-300 leading-relaxed mb-6">
              Flight avionics code for the Telluris rocket&apos;s self-landing system.
              Reads quaternion orientation data from an ICM-20948 IMU, converts to Euler
              angles, and runs a PID control loop to deflect thrust-vectoring servos
              for active stabilization during powered flight.
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
      <section className="relative z-10 h-screen md:snap-start overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/projects/static_fire.MOV" type="video/quicktime" />
          <source src="/projects/static_fire.MOV" type="video/mp4" />
        </video>
        {/* Subtle gradient overlays for polish */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]/60" />
      </section>

      {/* Footer */}
      <div className="relative z-10 md:snap-start">
        <Footer />
      </div>
    </div>
  )
}
