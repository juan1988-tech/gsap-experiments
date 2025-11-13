import { useRef, type JSX, type ReactNode } from "react"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

type CardProps = {
    text:string,
}

gsap.registerPlugin(useGSAP);

const AnimatedCardComponent = ({text}:CardProps):JSX.Element =>{
    //const myReference = useRef<HTMLDivElement|null>(null);

    return (
        <div className="box w-28 h-28 rounded-2xl bg-linear-to-r from-[#3A2BD9] to-[#00D4FF] text-center items-center justify-center align-middle flex mt-6">
            <p>{text}</p>
        </div>
    )
}

export default function FourthAnimation():ReactNode { 
  const container = useRef<null|HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline|null>(null);

  const toggleTimeline = () => {
   if (tl.current) {
      tl.current.reversed(!tl.current.reversed());
    }
  };  

  const animatedComponents:CardProps[] =[
    { text: "Box 1" },
    { text: "Box 2" },
    { text: "Box 3" }
  ]  

  const animatedComponentsSet:JSX.Element[] = animatedComponents.map((item)=>{
            return <AnimatedCardComponent key={item.text} text={item.text} />
        })

  useGSAP(
     () => {
      const boxes:EventTarget[] = gsap.utils.toArray('.box');
      
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, '<')
        .to(boxes[2], { y: -166 })
        .reverse();
    },
    { scope: container }
  )

  return (
    <>
    <h3 className="w-full text-center text-light-green font-semibold mt-6 text-2xl">Fourth Animation</h3>
    <section className="w-full flex flex-col h-auto items-center justify-center bg-emerald-950 mt-4" ref={container}>
        <button className="blog mt-6 text-white w-48 h-10 border-white border-3 flex text-center items-center justify-center align-middle rounded-full cursor-pointer" onClick={toggleTimeline}>
            <span className="align-middle">Trigger </span>
            </button>
        {animatedComponentsSet}
    </section>
    </>
  )
}
