import type { JSX } from "react";
import gsapBackground from './assets/images/background.gsap.jpg';
import FirstAnimation from "./components/FirstAnimation";
import SecondAnimation from "./components/SecondAnimation";


function App():JSX.Element {
  return (
    <div className="bg-main-black ">
      <main className="w-3/4 flex flex-col max-w-3/4 mx-auto">
        <h1 className="w-full h-[60px] text-center pt-6 text-4xl text-light-green font-semibold">Animation with useGSAP</h1>
        <figure className="w-3/4 h-[480px] mt-6 flex mx-auto">
          <img className="w-full h-full " alt="background GSAP" src={gsapBackground}/>
        </figure>
        <h2 className="w-full text-center text-light-green font-semibold mt-6 text-3xl">useGSAP() Hook</h2>
        {/*section for animation */}
        <FirstAnimation/>
        <SecondAnimation/>
      </main>    
    </div>
  )
}

export default App
