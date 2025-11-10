import type { JSX } from "react";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const FirstAnimation = ():JSX.Element => {
  //first animation 
  const roundedSquareRef = useRef<HTMLDivElement>(null);

  useGSAP(()=>{
    gsap.to(roundedSquareRef.current,{ x: 360, duration: 2})
  },{ scope: roundedSquareRef })

  return (
    <>
    <h3 className="w-full text-center text-light-green font-semibold mt-6 text-2xl">First Animation</h3>
        <section className="w-full flex h-72 items-center justify-start bg-emerald-950 mt-4">
            <article className="box w-28 h-28 bg-linear-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53] rounded-xl" ref={roundedSquareRef}> 

            </article>
        </section>
    </>
  )
}

export default FirstAnimation
