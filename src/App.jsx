import React from "react";
import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";
import Services from "./components/services";
import gsap from "gsap";
import {
  ArrowDown,
  Briefcase,
  HeartHandshake,
  MessageCircle,
  Users,
} from "lucide-react";
import CircularText from "./components/CircularText";
import CompanyValuesPage from "./components/CompanyValuesPage";

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
            <div>
              <div className="brand text-3xl font-md">thirtysixstudios</div>

              <style jsx>{`
                .brand {
                  background-image: linear-gradient(45deg, #ffffff, #ff3333);
                  background-clip: text;
                  -webkit-background-clip: text;
                  color: transparent;
                  -webkit-text-fill-color: transparent;
                }
              `}</style>
            </div>

            <div className="links flex gap-8">
              {[
                {
                  href: "#whatwedo",
                  icon: (
                    <Briefcase className="w-6 h-6 text-indigo-100 drop-shadow-sm" />
                  ),
                  key: "requests",
                },
                {
                  href: "#whoweare",
                  icon: (
                    <Users className="w-6 h-6 text-blue-100 drop-shadow-sm" />
                  ),
                  key: "users",
                },
                {
                  href: "#howwegiveback",
                  icon: (
                    <HeartHandshake className="w-6 h-6 text-green-100 drop-shadow-sm" />
                  ),
                  key: "active users",
                },
                {
                  href: "#talktous",
                  icon: (
                    <MessageCircle className="w-6 h-6 text-purple-100 drop-shadow-sm" />
                  ),
                  key: "projects",
                },
              ].map((item, index) => {
                let bgStyle = "";

                switch (item.key.toLowerCase()) {
                  case "users":
                    bgStyle =
                      "bg-gradient-to-br from-gray-500 to-gray-800 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]";
                    break;
                  case "active users":
                    bgStyle =
                      "bg-gradient-to-br from-gray-500 to-gray-800 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]";
                    break;
                  case "projects":
                    bgStyle =
                      "bg-gradient-to-br from-gray-500 to-gray-800 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]";
                    break;
                  case "requests":
                    bgStyle =
                      "bg-gradient-to-br from-gray-500 to-gray-800 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]";
                    break;
                  default:
                    bgStyle =
                      "bg-gradient-to-br from-gray-600 to-gray-800 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]";
                }

                return (
                  <a key={index} href={item.href} className="relative group">
                    <div
                      className={`
          ${bgStyle}
          p-3
          rounded-lg
          transform 
          transition-all 
          duration-300 
          shadow-lg
          hover:shadow-xl
          hover:scale-110
          hover:translate-y-1
          flex
          items-center
          justify-center
        `}
                    >
                      {item.icon}
                    </div>
                  </a>
                );
              })}
            </div>
          </nav>
          <div className="textcontainer mt-32 w-full text-amber-950 px-[20%]">
            <div className="text w-[50%]">
              <CircularText />
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
            <div className="w-full absolute bottom-0 left-0">
              <div className="relative group w-fit pl-5">
                <h1
                  ref={headingref}
                  className="text-[17rem] font-normal tracking-tight leading-none hover:cursor-pointer bg-clip-text text-transparent"
                  style={{
                    animation: "gradientPulse 4s infinite ease-in-out",
                    backgroundSize: "300% 300%",
                  }}
                >
                  Thirtysixstudios
                </h1>

                <style jsx>{`
                  @keyframes gradientPulse {
                    0% {
                      background-image: linear-gradient(
                        45deg,
                        #ffffff,
                        #ff3333
                      );
                      background-position: 0% 50%;
                    }
                    50% {
                      background-image: linear-gradient(
                        45deg,
                        #ff3333,
                        #ffffff
                      );
                      background-position: 100% 50%;
                    }
                    100% {
                      background-image: linear-gradient(
                        45deg,
                        #ffffff,
                        #ff3333
                      );
                      background-position: 0% 50%;
                    }
                  }
                `}</style>
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-red-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 animate-bounce group-hover:opacity-100 transition duration-300 pointer-events-none whitespace-nowrap">
                  Click on it
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative mt-32 px-10">
        {showCanvas &&
          data[2].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <h1 className="text-2xl tracking-tighter text-amber-950 text-center">
          ABOUT THE BRAND
        </h1>
      </div>

      <div className="w-full relative h-auto text-amber-950 px-10">
        {showCanvas &&
          data[8].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <div className="w-full relative mt-32 px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-lg border border-white/30 transform transition duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4 text-white/80">✦</div>
              <h3 className="text-2xl font-medium mb-4">Creative Design</h3>
              <p className="text-lg opacity-80">
                Our design philosophy focuses on creating memorable experiences
                that resonate with your audience and elevate your brand
                identity.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-lg border border-white/30 transform transition duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4 text-white/80">⦿</div>
              <h3 className="text-2xl font-medium mb-4">
                Development Excellence
              </h3>
              <p className="text-lg opacity-80">
                We build robust, scalable solutions using cutting-edge
                technologies that ensure performance, security, and seamless
                user experiences.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-lg border border-white/30 transform transition duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4 text-white/80">◎</div>
              <h3 className="text-2xl font-medium mb-4">Strategic Approach</h3>
              <p className="text-lg opacity-80">
                Every project begins with understanding your business goals and
                audience needs to create digital solutions that drive measurable
                results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative mt-32  px-10 mb-32">
        {showCanvas &&
          data[4].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <div className="w-full relative mt-32 px-10">
          <div className="text-white py-24 px-6 backdrop-blur-lg bg-black/20 p-8 rounded-2xl shadow-lg border-white/30 relative border overflow-hidden">
            {/* Gradient circles in background */}
            <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full border bg-white/30 border-white-700 opacity-30"></div>
            <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full border bg-white/30 border-white-700 opacity-20"></div>

            {/* Main content */}
            <h1 className="text-5xl font-bold max-w-2xl mx-auto text-amber-950 text-center mb-6">
              Relate to our creative designs that are beyond your expectations
            </h1>
            <p className="text-amber-950 text-center mb-16">
              Leading digital agency with solid design and development
              expertise.
            </p>

            {/* Circular badge with arrow */}
            <div className="absolute bottom-12 right-16 flex items-center justify-center">
              <div className="rounded-full border bg-white/25 border-gray-400 p-6 flex flex-col items-center justify-center  text-xs text-gray-300 w-24 h-24 relative">
                <span className="text-center leading-tight text-amber-950 mb-1">
                  digital agency in the world
                </span>
                <ArrowDown size={20} className="mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative font-['Helvetica_Now_Display']">
        {showCanvas &&
          data[5].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <Services />
      </div>
      {/* <div className="w-full relative font-['Helvetica_Now_Display']">
        {showCanvas &&
          data[8].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <Testimonials />
      </div> */}
         <div className="w-full relative font-['Helvetica_Now_Display']">
        {showCanvas &&
          data[9].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <CompanyValuesPage />
      </div>
    </>
  );
}

export default App;
