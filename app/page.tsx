"use client"
import Beams from '@/components/beams';
import GlassSurface from '@/components/glasssurface';
import ColorBends from '@/components/colorBends';
import TypingText from '@/components/typing-text';
import { BrowserView, MobileView } from "react-device-detect";
import IconButton from '@/components/iconButton';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import {useState, useEffect} from "react";
import LogoLoop from '@/components/LogoLoop';
import { SiPython, SiCplusplus, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiGit, SiGithub, SiLatex } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import Footer from "@/components/footer"
import Navigation from '@/components/navigation';

const techLogos = [
  { node: <span className="text-white"><SiReact /></span>, title: "React", href: "https://react.dev" },
  { node: <span className="text-white"><SiNextdotjs /></span>, title: "Next.js", href: "https://nextjs.org" },
  { node: <span className="text-white"><SiTypescript /></span>, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <span className="text-white"><SiTailwindcss /></span>, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];


export default function Home() {

  const [scrolled, setScrolled] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState<'all' | 'languages' | 'frameworks' | 'tools' | 'concepts'>('all');

  type Skill = { name: string; icon?: React.ReactNode; category: 'languages' | 'frameworks' | 'tools' | 'concepts' };

  const skills: Skill[] = [
    { name: 'Python', icon: <SiPython />, category: 'languages' },
    { name: 'C++', icon: <SiCplusplus />, category: 'languages' },
    { name: 'JavaScript', icon: <SiJavascript />, category: 'languages' },
    { name: 'TypeScript', icon: <SiTypescript />, category: 'languages' },
    { name: 'MATLAB', category: 'languages' },
    { name: 'Java', icon: <FaJava />, category: 'languages' },
    { name: 'React', icon: <SiReact />, category: 'frameworks' },
    { name: 'Next.js', icon: <SiNextdotjs />, category: 'frameworks' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'frameworks' },
    { name: 'Git', icon: <SiGit />, category: 'tools' },
    { name: 'GitHub', icon: <SiGithub />, category: 'tools' },
    { name: 'LaTeX', icon: <SiLatex />, category: 'tools' },
    { name: 'Object-Oriented Programming', category: 'concepts' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* main header */}
      <div style={{ width: '100%', height: '800px', position: 'relative' }} className={` transition-opacity duration-1000 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
        {/* Background layer - Beams */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
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

        {/* Foreground layer - Navigation */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', padding: '50px 0'  }}>
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
            
            {/* Nav Bar */}
            <Navigation></Navigation>
            </div>
          </GlassSurface>
        </div>

        {/* Name and shi */}
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

      {/* About me / Skills section*/}
        <div 
          id="next-section"
          className={`center-div max-w-[50%] flex flex-col items-center justify-center min-h-screen transition-opacity duration-1000 overflow-hidden ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative px-6">
            <h2 className="text-4xl font-switzer-black text-white mb-3 mt-4">About Me</h2>
            <div className="w-50 h-1 bg-gradient-to-r from-white to-black mb-8"></div>
            <p className="text-xl text-gray-300 font-switzer-reg leading-relaxed">
              Hello. I&apos;m <span className="text-white font-switzer-black">Elijah</span>, a Computer Engineering student at UC Santa Barbara with a passion for building things at the intersection of hardware and software.
              <br /><br />
              I love working on embedded systems, simulations, and web applications — whether that&apos;s writing firmware for a sensor board, modeling rocket dynamics in MATLAB, or shipping a clean UI in React.
              <br /><br />
              Feel free to reach out at{' '}
              <a href="mailto:ehargreaves@ucsb.edu" className="text-white underline underline-offset-4 hover:opacity-80 transition-opacity">
                ehargreaves@ucsb.edu
              </a>.
            </p>

            <div className="section-divider my-16"></div>

            <h2 className="text-4xl font-switzer-black">
              <span className="text-white">My Skills</span>
            </h2>
            <div className="w-50 h-1 bg-gradient-to-r from-white to-black mb-6 mt-3"></div>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {(['all', 'languages', 'frameworks', 'tools', 'concepts'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSkillTab(tab)}
                  aria-pressed={activeSkillTab === tab}
                  className={`px-4 py-1.5 rounded-full text-sm font-switzer-black capitalize transition-all duration-200 ${
                    activeSkillTab === tab
                      ? 'bg-white text-black'
                      : 'bg-white/5 text-white/60 border border-white/15 hover:bg-white/10 hover:text-white/80'
                  }`}
                >
                  {tab === 'all' ? 'All' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-3">
              {skills
                .filter((s) => activeSkillTab === 'all' || s.category === activeSkillTab)
                .map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-white/80 font-switzer-reg text-sm hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-200"
                  >
                    {skill.icon && (
                      <span className="text-base leading-none">{skill.icon}</span>
                    )}
                    {skill.name}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <Footer onAboutClick={scrollToNextSection}></Footer>
    </>
  );
}