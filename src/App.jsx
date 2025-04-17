import React from "react";
import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";
import Services from "./component/services";
import gsap from "gsap";

import { ArrowDown } from 'lucide-react';


function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

   
    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
      <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
        {showCanvas &&
          data[0].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <div className="w-full relative z-[1] h-screen ">
          <nav className="w-full p-8 flex justify-between z-50">
            <div className="brand text-2xl font-md">thirtysixstudios</div>
            <div className="links flex gap-10">
              {[
                "What we do",
                "Who we are",
                "How we give back",
                "Talk to us",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer mt-32 w-full px-[20%]">
            <div className="text w-[50%]">
              <h3 className="text-4xl leading-[1.2]">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="text-lg w-[80%] mt-10 font-normal">
                We are a team of designers, developers, and strategists who are
                passionate about creating digital experiences that are both
                beautiful and functional.
              </p>
              <p className="text-md mt-10">scroll</p>
            </div>
          </div>
          <div className="w-full absolute bottom-0 left-0">
            <h1
              ref={headingref}
              className="text-[17rem] font-normal tracking-tight leading-none pl-5"
            >
              Thirtysixstudios
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full relative mt-32 px-10">
        {showCanvas &&
          data[2].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <h1 className="text-2xl tracking-tighter text-center">ABOUT THE BRAND</h1>
      </div>

      <div className="w-full relative h-auto px-10">
        {showCanvas &&
          data[8].map((canvasdets, index) => <Canvas details={canvasdets} />)}
          <div className="w-full relative mt-32 px-10">
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
    <div className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-lg border border-white/30 transform transition duration-300 hover:-translate-y-2">
      <div className="text-4xl mb-4 text-white/80">✦</div>
      <h3 className="text-2xl font-medium mb-4">Creative Design</h3>
      <p className="text-lg opacity-80">
        Our design philosophy focuses on creating memorable experiences that resonate with your audience and elevate your brand identity.
      </p>
    </div>
    
    <div className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-lg border border-white/30 transform transition duration-300 hover:-translate-y-2">
      <div className="text-4xl mb-4 text-white/80">⦿</div>
      <h3 className="text-2xl font-medium mb-4">Development Excellence</h3>
      <p className="text-lg opacity-80">
        We build robust, scalable solutions using cutting-edge technologies that ensure performance, security, and seamless user experiences.
      </p>
    </div>
    
    <div className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-lg border border-white/30 transform transition duration-300 hover:-translate-y-2">
      <div className="text-4xl mb-4 text-white/80">◎</div>
      <h3 className="text-2xl font-medium mb-4">Strategic Approach</h3>
      <p className="text-lg opacity-80">
        Every project begins with understanding your business goals and audience needs to create digital solutions that drive measurable results.
      </p>
    </div>
  </div>
</div>
      </div>

      <div className="w-full relative mt-32 px-10 mb-32">
        {showCanvas &&
          data[4].map((canvasdets, index) => <Canvas details={canvasdets} />)}
<div className="w-full relative mt-32 px-10">
  <div className="text-white py-24 px-6 backdrop-blur-lg bg-black/20 p-8 rounded-2xl shadow-lg border-white/30 relative border overflow-hidden">
    {/* Gradient circles in background */}
    <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full border border-gray-700 opacity-30"></div>
    <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full border border-gray-700 opacity-20"></div>
    
    {/* Main content */}
    <h1 className="text-5xl font-bold max-w-2xl mx-auto text-center mb-6">
      Relate to our creative designs that are beyond your expectations
    </h1>
    <p className="text-white text-center mb-16">
      Leading digital agency with solid design and development expertise.
    </p>

    {/* Circular badge with arrow */}
    <div className="absolute bottom-12 right-16 flex items-center justify-center">
      <div className="rounded-full border border-gray-400 p-6 flex flex-col items-center justify-center bg-transparent text-xs text-gray-300 w-24 h-24 relative">
        <span className="text-center leading-tight text-white mb-1">digital agency in the world</span>
        <ArrowDown size={20} className="mt-1" />
      </div>
    </div>
  </div>
</div>
      </div>
      <div className="w-full relative font-['Helvetica_Now_Display']">
        {showCanvas &&
          data[5].map((canvasdets, index) => <Canvas details={canvasdets} />)}
          <Services/>
          </div>
      
    </>
  );
}

export default App;