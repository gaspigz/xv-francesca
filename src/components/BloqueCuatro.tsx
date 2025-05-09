import regalos from "../assets/regalos.png";
import canciones from "../assets/canciones.png";

const BloqueCuatro = () => {
  return (
    <div className="min-h-[60vh] w-full flex flex-col md:flex-row items-center justify-center gap-10 bg-slate-100 px-6 py-10">
      {/* Gift Block */}
      <div className="bg-white min-h-[55vh] justify-center rounded-2xl shadow-xl p-6 w-full max-w-sm flex flex-col items-center text-center">
        <img
          src={regalos}
          alt="Regalos"
          className="w-full h-auto mb-4"
        />
        <a
          className="mt-2 px-8 py-3 bg-slate-100 text-gray-500 border-2 border-slate-500 text-lg rounded-full shadow-md hover:bg-slate-200 transform hover:scale-105 transition duration-200"
          href="#regalos"
        >
          Regalos
        </a>
      </div>

      {/* Song Suggestion Block */}
      <div className="bg-white min-h-[55vh] justify-center rounded-2xl shadow-xl p-6 w-full max-w-sm flex flex-col items-center text-center">
        <img
          src={canciones}
          alt="Canciones"
          className="w-full max-w-[60vw] h-auto mb-4"
        />
        <a
          className="mt-2 px-8 py-3 bg-slate-100 text-gray-500 border-2 border-slate-500 text-lg rounded-full shadow-md hover:bg-slate-200 transform hover:scale-105 transition duration-200"
          href="https://docs.google.com/forms/d/e/1FAIpQLSemG_K4jbiyJlCf67_ZDH9lqZFB_fL1We_5BY_QX_A0XTcC7A/viewform"
        >
          Sugerir
        </a>
      </div>
    </div>
  );
};

export default BloqueCuatro;
