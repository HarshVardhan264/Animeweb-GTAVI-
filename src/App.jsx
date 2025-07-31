import React from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useState } from 'react';

function App() {
  const [showContent, setShowContent] = useState(false)
  const [showpage, setShowpage] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    })
      .to(".vi-mask-group", {
        scale: 18,
        duration: 1.5,
        delay: -1,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            document.querySelector(".svg").remove();
            // gsap.set(".svg", { display: "none" });
            setShowContent(true);
            this.kill()
          }
        }
      })
  })

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut"
    })
    gsap.to(".sky", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut"
    })
    gsap.to(".bg", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut"
    })
    gsap.to(".character", {
      scale: 1,
      x: "-50%",
      bottom: "-30%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut"
    })
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut"
    })



    const main = document.querySelector(".main")

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: xMove,
        ease: "power1.out",
        duration: 0.5
      })
      gsap.to(".sky", {
        x: xMove,
        ease: "power1.out",
        duration: 0.5
      })
      gsap.to(".bg", {
        x: xMove,
        ease: "power1.out",
        duration: 0.5
      })
    })

  }, [showContent])


  return (
    <>
      <div className='svg  top-0 left-0 z-[100] fixed w-full h-screen overflow-hidden bg-[#000]'>
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="midddle"
                  fontSize="250"
                  fontFamily="Arial Black"
                  fill="white"
                  style={{ fontWeight: 'bold' }}
                >
                  Vi
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent &&
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
          <div className='landing overflow-hidden relative w-full h-screen bg-black'>
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 ">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-1.5">
                  <div className='line w-13 h-1.5 bg-white'></div>
                  <div className='line w-10 h-1.5 bg-white'></div>
                  <div className='line w-5 h-1.5 bg-white'></div>
                </div>
                <h3 className="text-4xl -mt-[10px] leading-none text-white">Rockstar</h3>
              </div>
            </div>

            <div className="imagesdiv overflow-hidden relative w-full h-screen">
              <img className="w-full scale-[1.5] rotate-[-20deg] absolute top-0 left-0 h-full object-cover sky"
                src="./sky.png" alt="" />
              <img className="w-full scale-[2] rotate-[-15deg] absolute top-0 left-0 h-full object-cover sky "
                src="./bg.png" alt="" />
              <div className="text text-white flex flex-col gap-3 absolute top-15 left-1/2 -translate-x-1/2 scale-[1.5] roatate-[-10deg]">
                <h1 className='text-9xl leading-none -ml-40'>grand</h1>
                <h1 className='text-9xl leading-none ml-20'>theft</h1>
                <h1 className='text-9xl leading-none -ml-20'>auto</h1>
              </div>
              <img className=" character absolute -bottom-[150%] left-1/2 -translate-x-1/2 h-full  scale-[2] rotate-[-10deg]"
                src="./girlbg.png" alt="" />

            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent ">
              <div className="flex gap-4 items-center">
                <i onClick={() => setShowpage(true)} className=" text-3xl ri-arrow-down-wide-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">Scroll Down</h3>
              </div>
              <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50px]" src="./ps5.png" alt="" />
            </div>
          </div>
          {/* <div
            className={`fixed top-0 left-0 w-full h-screen bg-black z-[100] transition-transform duration-700 ease-in-out ${showpage ? 'translate-y-0' : 'translate-y-full'
              }`}
          ></div> */}
          <div className={ `w-full flex items-center justify-center h-screen px-10 bg-black fixed top-0 left-0 z-[100] transition-transform duration-700 ease-in-out ${showpage ? 'translate-y-0' : 'translate-y-full'
              }`}>
            <div className="cntnr flex w-full h-[80%] text-white ">
              <div className="limg relative w-1/2 h-full overflow-hidden">
                <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./imag.png" alt="" />
              </div>
              <div className="rg w-[30%] py-10">
                <h1 className="text-white text-6xl">Still Running</h1>
                <h1 className="text-6xl">Not Running</h1>
                <p className="mt-10 font-[Helvetica_Now_Display] text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur laboriosam quo odio distinctio cum culpa maxime voluptas amet natus.
                </p>
                <p className="mt-5 font-[Helvetica_Now_Display] text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil voluptatum impedit vitae minima similique veniam corporis alias atque eos cupiditate laboriosam quo odio distinctio cum culpa maxime voluptas amet natus.
                </p>
                <p className="mt-5 font-[Helvetica_Now_Display] text-xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem maxime rerum quod dolores fugit perspiciatis.
                </p>
                <button className="bg-yellow-500 px-8 py-8 text-4xl text-black mt-5">Download Now</button>
              </div>

            </div>

          </div>

        </div>
      }
    </>
  )
}

export default App
