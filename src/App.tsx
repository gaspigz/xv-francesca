import BloqueUno from "./components/BloqueUno";
import BloqueDos from "./components/BloqueDos";
import BloqueTres from "./components/BloqueTres";
import BloqueCuatro from "./components/BloqueCuatro";
import BloqueFoto from "./components/BloqueFoto";

import bgImage1 from './assets/horizontal1.jpg'; // adjust path if needed
import bgImage2 from './assets/azul1.jpg'; // adjust path if needed
import bgImage3 from './assets/vert2.jpg'; // adjust path if needed

function App() {
  
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <BloqueUno></BloqueUno>
        <BloqueDos></BloqueDos>
        <BloqueTres></BloqueTres>
        <BloqueFoto text={""} bgImage={bgImage2}></BloqueFoto>
        <BloqueFoto text={""} bgImage={bgImage1}></BloqueFoto>
        <BloqueCuatro></BloqueCuatro>
        <BloqueFoto text={""} bgImage={bgImage3}></BloqueFoto>
      </div>
    </>
  )
}

export default App
