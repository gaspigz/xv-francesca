import itfiesta2 from "../assets/card1.png";
import itrel2 from "../assets/card2.png";
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
  }
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
            className="flex min-h-[55vh] flex-col items-center justify-center rounded-xl min-w-[80vw] py-10 px-4 shadow-lg bg-slate-200 bg-opacity-10"
          >
            <img src={item.img} alt={item.alt} className={index == 1 ? 'w-40 h-auto mb-4' : 'w-64 h-auto mb-4'} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloqueTres;
