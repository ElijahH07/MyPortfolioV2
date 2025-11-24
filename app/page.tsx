"use client"
import Beams from '@/components/beams';
import GlassSurface from '@/components/glasssurface';
import ColorBends from '@/components/colorBends';
import TypingText from '@/components/typing-text';
import { BrowserView, MobileView } from "react-device-detect";
import IconButton from '@/components/iconButton';
import { ChevronDown, Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div style={{ width: '100%', height: '800px', position: 'relative' }}>
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

            {/* Left side - Navigation links */}
            <nav style={{ display: 'flex', gap: '32px' }}>
              <a href="/" className="font-black text-white text-lg hover:opacity-80 hover:scale-105 transition-opacity">
                Home
              </a>
              <a href="/projects" className="font-black text-white text-lg hover:opacity-80 hover:scale-105 transition-opacity">
                Projects
              </a>
            </nav>
            
            <div style={{display: 'flex'}}> 
              <IconButton 
                icon={<Github size={24} />}
                href="https://github.com/ElijahH07"
                label="GitHub Profile"
              />
              <IconButton 
                icon={<Linkedin size={24} />}
                href="https://linkedin.com/in/elijahchargreaves"
                label="LinkedIn Profile"
              />
            </div>
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

      <div className="relative mt-10 flex flex justify-center">
        <a target="_blank" href="https://flowcv.com/resume/k9rrshmuvuso" className="mr-4 bg-white rounded-[40px] px-12 py-3 text-lg font-semibold text-gray-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-300 cursor-pointer">
            <h1 className="text-1xl md:text-2xl font-reg text-black text-center">Resume</h1>
        </a>
        <GlassSurface 
          width="200px"
          height={55}
          borderRadius={40}
          opacity={0.8}
          className="nav-bar shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-300 cursor-pointer"
          backgroundOpacity={.5}
          distortionScale={140}
          blur={20}
        >
          <h1 className="text-1xl md:text-2xl font-reg text-white text-center leading-tight">
            About Me
          </h1>
        </GlassSurface>
      </div>
    </div>
  );
}