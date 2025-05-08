import bgImage from '../assets/vert1.jpg'; // adjust path if needed
import logo from '../assets/logobla.png'; // adjust path if needed

const BloqueUno = () => {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center' // push image 40px down
      }}
      
    >
      <img className='w-1/3 mr-32 mt-[20vh]' src={logo} alt="" />
    </div>
  );
};

export default BloqueUno;
