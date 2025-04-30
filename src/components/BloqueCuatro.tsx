const BloqueCuatro = () => {
  return (
    <div className="min-h-[60vh] w-full flex flex-col md:flex-row items-center justify-center gap-10 bg-slate-100 px-6 py-10">
      {/* Gift Block */}
      <div className="bg-white min-h-[55vh] justify-center rounded-2xl shadow-xl p-6 w-full max-w-sm flex flex-col items-center text-center">
        <p className="text-xl md:text-2xl font-medium text-gray-800 mb-4 leading-relaxed">
          Si deseas regalarme algo más que tu hermosa presencia...
        </p>
        <a
          className="mt-2 px-8 py-3 bg-pink-500 text-white text-lg rounded-full shadow-md hover:bg-pink-600 transform hover:scale-105 transition duration-200"
          href="#regalos"
        >
          Regalos
        </a>
      </div>

      {/* Song Suggestion Block */}
      <div className="bg-white min-h-[55vh] justify-center rounded-2xl shadow-xl p-6 w-full max-w-sm flex flex-col items-center text-center">
        <p className="text-xl md:text-2xl font-medium text-gray-800 mb-4 leading-relaxed">
          Sugiere las canciones que no pueden faltar...
        </p>
        <a
          className="mt-2 px-8 py-3 bg-indigo-600 text-white text-lg rounded-full shadow-md hover:bg-indigo-700 transform hover:scale-105 transition duration-200"
          href="#sugerir"
        >
          Sugerir
        </a>
      </div>
    </div>
  );
};

export default BloqueCuatro;
