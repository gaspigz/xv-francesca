import itfiesta2 from "../assets/itfiesta2.png";
import itrel2 from "../assets/itrel2.png";
import bgImage from "../assets/azul1.jpg";

const bloqueData = [
  {
    img: itfiesta2,
    alt: "Logo Itropa",
    title: "Mis 15",
    content: (
      <>
        Sábado 28 de Septiembre <br />
        Altos de Victorian Center <br />
        San Martín 1267 - Rosario.
      </>
    ),
  },
  {
    img: itrel2,
    alt: "Horario",
    title: "Horario",
    content: (
      <>
        La fiesta comienza a las 21:00 hs. <br />
        Por favor, sé puntual. Finaliza 4:00 hs.
      </>
    ),
  },
  {
    img: itrel2,
    alt: "Dress Code",
    title: "Dress Code",
    content: <>
      <span className="text-2xl">Formal</span> <br />
      Elegante, sofisticada
    </>
  },
];

const BloqueTres = () => {
  return (
    <div className="relative md:h-[75vh] w-full overflow-hidden">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Foreground Content */}
      <div className="relative shadow-lg px-4 py-16 h-full w-full flex flex-col md:flex-row gap-16 items-center justify-center">
        {bloqueData.map((item, index) => (
          <div
            key={index}
            className="flex min-h-[55vh] flex-col items-center justify-center rounded-xl py-10 px-4 shadow-lg bg-slate-200 bg-opacity-80"
          >
            <img src={item.img} alt={item.alt} className="w-32 h-auto mb-4" />
            <h1 className="text-4xl font-bold text-center">{item.title}</h1>
            <p className="text-center text-lg mt-1">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloqueTres;
