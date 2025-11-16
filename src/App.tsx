import { useEffect,useState } from "react";
import type { JSX } from "react";
<<<<<<< HEAD
=======
import gsapBackground from './assets/images/background.gsap.jpg';
import FirstAnimation from "./components/FirstAnimation";
import SecondAnimation from "./components/SecondAnimation";
>>>>>>> parent of f6e8950 (adding more animations)

// Clave falsa (para demo de CodeQL):
const API_KEY_GOOGLE:String = "AIzaFAKE_GOOGLE_APIKEY_abcdefghijklmnop"

interface VideoData {
  id: string
  title: string
}

function App():JSX.Element {
 const [data, setData] = useState<VideoData[] | null>(null)
 const [loading, setLoading] = useState(true)

 useEffect(() => {
    async function fetchData() {
      setLoading(true)

      try {
        // Simulación de endpoint REST
        const url = `https://api.fakevideoservice.com/videos?apikey=${API_KEY_GOOGLE}`

        console.log("Llamando a:", url)

        // Simulación de respuesta REST (no hace llamada real)
        await new Promise((resolve) => setTimeout(resolve, 800))

        const fakeResponse: VideoData[] = [
          { id: "1", title: "React Hooks Tutorial" },
          { id: "2", title: "Qué es CodeQL y cómo detectar vulnerabilidades" }
        ]

        setData(fakeResponse)
      } catch (error) {
        console.error("Error simulando petición REST:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p>Cargando...</p>

  return (
<<<<<<< HEAD
     <> 
     <h2>Resultados de la API simulada</h2>
      <ul>
        {data?.map((item:any) => (
          <li key={item.id}>
            <strong>{item.id}</strong> — {item.title}
          </li>
        ))}
      </ul>
    </>
=======
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
>>>>>>> parent of f6e8950 (adding more animations)
  )
}

export default App
