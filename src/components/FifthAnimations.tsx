import type { JSX } from "react";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)

const Nested = ():JSX.Element =>{
   const circle = useRef<HTMLDivElement|null>(null);
   
   useGSAP(()=>{
    gsap.to(circle.current,{
        rotation: "+=360",
        duration: 3,
        repeat: -1,
        ease:"none"
    })
   })

   return(
    <div className="w-36 h-auto p-3 flex flex-col justify-center rounded-2xl border-2 border-white">
        <article className="flex box w-28 h-28 bg-linear-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53] rounded-xl text-white justify-center align-middle">
            <p className="text-center">Selector</p>
        </article>
        <div className="w-28 h-28 rounded-full bg-linear-to-r from-[#59c4ef] via-[#6c3a84] to-[#EDDD53] flex items-center justify-center text-white font-bold mt-4" 
        ref={circle}>Ref</div> 
    </div>
   )
}

export default function FifthAnimations() {
  return (
    <>
    <h3 className="w-full text-center text-light-green font-semibold mt-6 text-2xl">Fifth Animation</h3>
    <section className="w-full flex h-72 items-center justify-center bg-emerald-950 mt-4">
       <Nested/>
       <div className="good ml-3.5 box w-28 h-28 bg-linear-to-r from-[#2A7B9B]  to-[#3757b7] rounded-2xl">
        <p>Selector</p>
       </div>
       <div className="good ml-3.5 box w-28 h-28 bg-linear-to-r from-[#2A7B9B]  to-[#3757b7] rounded-2xl">
        <p>Ref - No Leaking</p>
       </div>
    </section>
    </>
  )
}