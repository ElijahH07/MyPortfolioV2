"use client"
import Beams from '@/components/beams';
import GlassSurface from '@/components/glasssurface';
import TypingText from '@/components/typing-text';
import { BrowserView, MobileView } from "react-device-detect";
import {useState, useEffect, useRef} from "react";
import LogoLoop from '@/components/LogoLoop';
import { SiPython, SiCplusplus, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiGit, SiGithub, SiLatex } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import Footer from "@/components/footer"
import Navigation from '@/components/navigation';

type Skill = { name: string; category: 'languages' | 'frameworks' | 'tools' | 'concepts' };

const skills: Skill[] = [
  { name: 'Python', category: 'languages' },
  { name: 'C++', category: 'languages' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'TypeScript', category: 'languages' },
  { name: 'MATLAB', category: 'languages' },
  { name: 'Java', category: 'languages' },
  { name: 'React', category: 'frameworks' },
  { name: 'Next.js', category: 'frameworks' },
  { name: 'Tailwind CSS', category: 'frameworks' },
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'LaTeX', category: 'tools' },
  { name: 'Object-Oriented Programming', category: 'concepts' },
];

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

const SKILL_TABS: { id: 'all' | 'languages' | 'frameworks' | 'tools' | 'concepts'; label: string }[] = [
  { id: 'all',        label: '--all' },
  { id: 'languages',  label: '--languages' },
  { id: 'frameworks', label: '--frameworks' },
  { id: 'tools',      label: '--tools' },
  { id: 'concepts',   label: '--concepts' },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState<'all' | 'languages' | 'frameworks' | 'tools' | 'concepts'>('all');
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [bioComplete, setBioComplete] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,0.04), transparent 80%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === aboutRef.current && entry.isIntersecting) setAboutVisible(true)
          if (entry.target === skillsRef.current && entry.isIntersecting) setSkillsVisible(true)
        })
      },
      { threshold: 0.1 }
    )
    if (aboutRef.current) observer.observe(aboutRef.current)
    if (skillsRef.current) observer.observe(skillsRef.current)
    return () => observer.disconnect()
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      {/* Cursor spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-30"
      />
      {/* Fixed Beams background — covers entire page like the Projects page */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
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

      {/* Hero section */}
      <div style={{ width: '100%', height: '800px', position: 'relative', zIndex: 1 }} className={`transition-opacity duration-1000 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
        {/* Navigation */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', padding: '50px 0' }}>
          <GlassSurface
            width="45%"
            height={70}
            borderRadius={40}
            opacity={0.8}
            className="nav-bar"
            backgroundOpacity={.5}
            distortionScale={140}
            blur={20}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%',
              width: '100%',
              padding: '0 40px'
            }}>
              <Navigation></Navigation>
            </div>
          </GlassSurface>
        </div>

        {/* Name */}
        <div className="relative mt-30 flex flex-col items-center">
          <BrowserView>
            <h1 className="text-6xl md:text-8xl font-black text-white">
              Elijah Hargreaves
            </h1>
          </BrowserView>
          <MobileView>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white text-center leading-tight">
              Elijah<br />Hargreaves <br />
            </h1>
          </MobileView>
          <TypingText
            text="Computer Engineer @ UCSB"
            className="text-2xl md:text-3xl font-reg bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500 pt-4"
            grow={true}
            repeat={false}
            hideCursorOnComplete={true}
          />
        </div>

        <div className="relative mt-6 flex justify-center gap-4">
          <a
            target="_blank"
            href="https://flowcv.com/resume/k9rrshmuvuso"
            className="flex items-center justify-center bg-white rounded-[40px] min-w-[200px] h-[55px] px-6 text-lg font-semibold text-gray-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-300 cursor-pointer"
          >
            <span className="text-lg md:text-xl font-reg text-black whitespace-nowrap">Resume</span>
          </a>

          <GlassSurface
            width="200px"
            height={55}
            borderRadius={40}
            opacity={0.8}
            className="flex items-center justify-center nav-bar shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-300 cursor-pointer px-6"
            backgroundOpacity={0.5}
            distortionScale={140}
            blur={20}
          >
            <span
              onClick={scrollToNextSection}
              className="text-lg md:text-xl font-reg text-white whitespace-nowrap"
            >
              About Me
            </span>
          </GlassSurface>
        </div>
      </div>

      {/* Tech ticker */}
      <div className="relative z-10 border-y border-white/5">
        <LogoLoop
          logos={techLogos}
          speed={40}
          direction="left"
          pauseOnHover={true}
          fadeOut={true}
          fadeOutColor="#0a0a0a"
          logoHeight={22}
          gap={40}
          ariaLabel="Technologies I work with"
          className="py-5"
        />
      </div>

      {/* About Me + Skills section */}
      <main
        id="next-section"
        className="relative z-10 flex-1 flex flex-col items-start px-8 pt-16 pb-24"
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">

          {/* About Me terminal card */}
          <div
            ref={aboutRef}
            className={`transition-all duration-700 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "16px",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {/* Terminal chrome bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-white/[0.03] rounded-t-2xl">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-white/25 tracking-wide">~/portfolio/about.txt</span>
            </div>
            {/* Terminal body */}
            <div className="p-5 font-mono">
              <p className="text-sm text-white/30 mb-3">$ cat about.txt</p>
              <TypingText
                text={`Hello. I'm Elijah, a Computer Engineering student at UC Santa Barbara with a passion for building things at the intersection of hardware and software.\n\nI love working on embedded systems, simulations, and web applications — whether that's writing firmware for a sensor board, modeling rocket dynamics in MATLAB, or creating a clean UI in React.`}
                grow={true}
                repeat={false}
                hideCursorOnComplete={true}
                delay={20}
                onComplete={() => setBioComplete(true)}
                className="text-sm text-white/60 leading-relaxed whitespace-pre-wrap"
              />
              {bioComplete && (
                <p className="font-mono text-sm text-white/60 leading-relaxed mt-4">
                  {'Feel free to reach out at '}
                  <a
                    href="mailto:ehargreaves@ucsb.edu"
                    className="text-white/80 underline underline-offset-4 hover:text-white transition-colors"
                  >
                    ehargreaves@ucsb.edu
                  </a>
                  .
                </p>
              )}
            </div>
          </div>

          {/* Skills terminal card */}
          <div
            ref={skillsRef}
            className={`transition-all duration-700 delay-150 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "16px",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {/* Terminal chrome bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-white/[0.03] rounded-t-2xl">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-white/25 tracking-wide">~/portfolio/skills.sh</span>
            </div>
            {/* Terminal body */}
            <div className="p-5 font-mono">
              {/* Command line row */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-sm text-white/30">$ ls skills/</span>
                {SKILL_TABS.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setActiveSkillTab(id)}
                    aria-pressed={activeSkillTab === id}
                    className={`font-mono text-xs px-2 py-0.5 rounded border transition-all ${
                      activeSkillTab === id
                        ? 'bg-white/10 border-white/35 text-white/90'
                        : 'border-white/10 bg-transparent text-white/35 hover:text-white/60 hover:border-white/25'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter(s => activeSkillTab === 'all' || s.category === activeSkillTab)
                  .map(skill => (
                    <span
                      key={skill.name}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/55"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          </div>

        </div>
      </main>

      <div className="relative z-10">
        <Footer onAboutClick={scrollToNextSection}></Footer>
      </div>
    </div>
  );
}