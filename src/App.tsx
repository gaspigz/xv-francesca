import BloqueUno from "./components/BloqueUno";
import BloqueTres from "./components/BloqueTres";
import BloqueCuatro from "./components/BloqueCuatro";
import BloqueFoto from "./components/BloqueFoto";
import BloqueRegalos from "./components/BloqueRegalos";
import BloqueNoFaltes from "./components/BloqueNoFaltes";

import bgImage1 from './assets/azul1.jpg'; // adjust path if needed
import bgImage2 from './assets/azul2.jpg'; // adjust path if needed
import bgImage3 from './assets/bg3.jpg'; // adjust path if needed
import bgImage4 from './assets/bg4.jpg'; // adjust path if needed
import bgImage5 from './assets/bg5.jpg'; // adjust path if needed
import bgImage6 from './assets/bg6.jpg'; // adjust path if needed
import bgnf from './assets/horizontal1.jpg'; // adjust path if needed
import bgregalos from './assets/bgreg.jpg'; // adjust path if needed

function App() {
  
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <BloqueUno></BloqueUno>
        <BloqueTres></BloqueTres>
        <BloqueFoto text={""} bgImage={bgImage2}></BloqueFoto>
        <BloqueFoto text={""} bgImage={bgImage1}></BloqueFoto>
        <BloqueFoto text={""} bgImage={bgImage3}></BloqueFoto>
        <BloqueFoto text={""} bgImage={bgImage4}></BloqueFoto>
        <BloqueFoto text={""} bgImage={bgImage5}></BloqueFoto>
        <BloqueFoto text={""} bgImage={bgImage6}></BloqueFoto>
        <BloqueCuatro></BloqueCuatro>
        <BloqueNoFaltes text={""} bgImage={bgnf}></BloqueNoFaltes>
        <BloqueRegalos text={""} bgImage={bgregalos}></BloqueRegalos>
      </div>
    </>
  )
}

export default App
