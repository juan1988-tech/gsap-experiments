import type { JSX } from "react";
import gsapBackground from './assets/images/background.gsap.jpg';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function App():JSX.Element {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(()=>{
    gsap.to(container?.current,{ x: 360,y:60, duration: 2})
  },{ scope: container })

  return (
    <div className="bg-main-black ">
      <main className="w-3/4 flex flex-col max-w-3/4 mx-auto">
        <h1 className="w-full h-[60px] text-center pt-6 text-4xl text-light-green font-semibold">Animation with useGSAP</h1>
        <figure className="w-3/4 h-[480px] mt-6 flex mx-auto">
          <img className="w-full h-full " alt="background GSAP" src={gsapBackground}/>
        </figure>
        <h2 className="w-full text-center text-light-green font-semibold mt-6 text-3xl">useGSAP() Hook</h2>
        <p className="text-white text-lg mt-4">GSAP itself is a completely agnostic framework that can be used in any Javascript Framework without
        special wrappers or dependencies. However, this hook solves a React-specific friction point so we can 
        focus on the most important: make great animation</p>
        <p className="text-white text-lg mt-4">useGap() is intended to replace the hooks useEffect() and useLayoutEffect() that automatically handles cleanup using gsap.context()</p>
        <h3 className="w-full text-center text-light-green font-semibold mt-6 text-3xl">My First Example with useGSAP(), Typescript y React </h3>
        {/*section for animation */}
        <section className="w-full flex h-72 items-center justify-start">
            <article className="box w-28 h-28 bg-linear-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53] rounded-xl" ref={container}> 

            </article>
        </section>
      </main>    
    </div>
  )
}

export default App
