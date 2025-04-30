import bgImage from '../assets/vert1.jpg'; // adjust path if needed
import logo from '../assets/111blanco.png'; // adjust path if needed

const BloqueUno = () => {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center' // push image 40px down
      }}
      
    >
      <img className='w-1/2 shadow' src={logo} alt="" />
      <h3 className='text-white mt-2 shadow text-3xl'>30.05.2025</h3>
    </div>
  );
};

export default BloqueUno;
