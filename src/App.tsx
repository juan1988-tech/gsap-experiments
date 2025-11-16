import { useEffect,useState } from "react";
import type { JSX } from "react";

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
  )
}

export default App
