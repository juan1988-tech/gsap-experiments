import type { ReactNode } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function SecondAnimation():ReactNode {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // use selectors...
      gsap.to(".box", { rotation: "+=360", duration: 3 });

      // or refs...
      gsap.to(circleRef.current, { rotation: "-=360", duration: 3 });
    },
    { scope: containerRef }
  ); // <-- 
  return (
    <>
     <h3 className="w-full text-center text-light-green font-semibold mt-6 text-2xl">First Animation</h3>
        <section className="w-full flex h-72 items-center justify-center bg-emerald-950 mt-4">
        <div ref={containerRef} className="container flex items-center justify-around w-3xs self-center justify-self-center">
            <div  className="box w-28 h-28 bg-linear-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53] rounded-xl flex items-center justify-center text-white font-bold">Selector</div>
            <div className="w-28 h-28 rounded-full bg-linear-to-r from-[#59c4ef] via-[#6c3a84] to-[#EDDD53] flex items-center justify-center text-white font-bold" ref={circleRef}>Ref</div>
        </div>    
        <div className="box w-28 h-28 bg-linear-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53] rounded-xl flex items-center justify-center text-white font-bold">selector</div>
        </section>
        
    </>
  )
}
