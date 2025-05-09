import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BloqueUno from "./components/BloqueUno";
import BloqueTres from "./components/BloqueTres";
import BloqueCuatro from "./components/BloqueCuatro";
import BloqueFoto from "./components/BloqueFoto";
import BloqueNoFaltes from "./components/BloqueNoFaltes";
import BloqueDos from "./components/BloqueDos";
import BloqueRegalos from "./components/BloqueRegalos";

import bgImage1 from './assets/azul1.jpg';
import bgImage2 from './assets/azul2.jpg';
import bgImage3 from './assets/bg3.jpg';
import bgImage4 from './assets/bg4.jpg';
import bgImage5 from './assets/bg5.jpg';
import bgImage6 from './assets/bg6.jpg';
import bgnf from './assets/horizontal1.jpg';
import bgregalos from './assets/bgreg.jpg';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <BloqueUno />
      <BloqueDos />
      <BloqueTres />
      <BloqueFoto text={""} bgImage={bgImage2} />
      <BloqueFoto text={""} bgImage={bgImage1} />
      <BloqueFoto text={""} bgImage={bgImage3} />
      <BloqueFoto text={""} bgImage={bgImage4} />
      <BloqueFoto text={""} bgImage={bgImage5} />
      <BloqueFoto text={""} bgImage={bgImage6} />
      <BloqueCuatro />
      <BloqueNoFaltes text={""} bgImage={bgnf} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regalos" element={<BloqueRegalos text="" bgImage={bgregalos} />} />
      </Routes>
    </Router>
  );
}

export default App;
