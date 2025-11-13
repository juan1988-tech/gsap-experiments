import type { JSX } from "react";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)

export default function ThirdAnimation():JSX.Element {
  const roundedElementRef = useRef<null|HTMLDivElement>(null);  

  const { contextSafe } = useGSAP({scope: roundedElementRef});
  
  // ✅ wrapped in contextSafe() - animation will be cleaned up correctly
// selector text is scoped properly to the container.
    const onClickGood = contextSafe(() => {
	  if (roundedElementRef?.current) {
      gsap.to(roundedElementRef?.current, { rotation: "+=180" });
    }
 });
  
  return (
    <>
    <h3 className="w-full text-center text-light-green font-semibold mt-6 text-2xl">Third Animation</h3>
        <section className="w-full flex h-72 items-center justify-center     bg-emerald-950 mt-4">
            <article onClick={onClickGood} className="good ml-3.5 box w-28 h-28 bg-linear-to-r from-[#2A7B9B]  to-[#3757b7] rounded-2xl" ref={roundedElementRef}> 
                    Click me
            </article>
        </section>
    </>
  )
}
