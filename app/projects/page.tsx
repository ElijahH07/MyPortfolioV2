"use client"

import Beams from "@/components/beams";
import { BrowserView, MobileView } from "react-device-detect";
import GlassSurface from "@/components/glasssurface";
import IconButton from "@/components/iconButton";
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import Navigation from "@/components/navigation";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <>
            {/* background */}
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

            {/* Foreground - navbar */}
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
                Coming Soon
                </h1>
            </BrowserView>
            <MobileView>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white text-center leading-tight">
                Coming<br />Soon <br />
                </h1>
            </MobileView>
            </div>
        </>
        

        
  );
}
