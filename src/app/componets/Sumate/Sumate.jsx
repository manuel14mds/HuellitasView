import Image from 'next/image'; 
import girlDogDesktop from '../../../../public/assets/Sumate/girlDogDesktop.png';
import girlDogMobile from '../../../../public/assets/Sumate/girlDogMobile.png';
function Sumate() {
  return (
    <div className="flex justify-center bg-violetHtas relative">
        <div className="flex-1  bottom-0 end-0 lg:absolute lg:w-5/12">
          <Image src={girlDogDesktop} alt="ImageMobile"/>
        </div>
      <div className="flex items-center w-full  relative "> 
        <div className="flex-1 absolute bottom-0 end-0 xl:hidden">
          <Image src={girlDogMobile} alt="ImageMobile"/>
        </div>


        <div className="flex-1">
          <div className="text-white px-4 py-4 rounded-lg mb-6 text-left xl:text-justify xl:text-2xl">
            <p className="text-xl md:text-3xl font-semibold font-[Poppins] ">TU TAMBIÉN PUEDES AYUDAR</p>
          </div>

          <div>
            
          </div>
          <div className="w-full px-6 py-4 rounded-lg mb-6 hidden md:grid  md:grid-cols-1 md:grid-rows-1">

            <input type="text" placeholder="Escribe tu nombre completo" className="w-5/12  px-4 py-2 bg-white rounded-full border border-gray-300 mb-4 placeholder-gray-500 text-black" /> 
            <div>
              <input type="text" placeholder="Danos un número para contactarte" className="w-3/12  px-4 py-2 bg-white rounded-full border border-gray-300 mr-2 placeholder-gray-500 text-black" /> 
              <input type="text" placeholder="Dejanos tu mail" className="w-3/12 px-4 py-2 bg-white rounded-full border border-gray-300 mr-2 placeholder-gray-500 text-black grow " />
            </div>
            <div className='py-4'>
              <button className=" w-2/12 h-7 bg-transparent  border-white border-2 text-white rounded-full text-center font-[Poppins] text-sm mr-3"> QUIERO SER VOLUNTARIO</button>
              <button className="w-2/12 h-7 bg-transparent  border-white border-2 text-white rounded-full text-center font-[Poppins] text-sm">QUIERO SER PADRINO</button>
            </div>

          </div>

          <div className=" md:hidden grid grid-cols-1 grid-rows-1 px-2 py-4 rounded-lg mb-6 gap-between space-y-4">
            
            <input type="text" placeholder="Nombre completo" className="w-3/5 xl:w-10/12 px-4 py-2 bg-white rounded-full border border-gray-300 mb-4 placeholder-gray-500 text-black" /> 
            <input type="text" placeholder="Celular" className="w-2/5 xl:w-10/12  px-4 py-2 bg-white rounded-full border border-gray-300 mr-2 placeholder-gray-500 text-black" /> 
            <input type="text" placeholder="Mail" className="w-2/5 xl:w-10/12  px-4 py-2 bg-white rounded-full border border-gray-300 placeholder-gray-500 text-black" />
            <button className="px-1 py-2 w-5/12 h-11 bg-transparent border border-white text-white rounded-full text-left font-[Poppins] text-sm">QUIERO SER PADRINO</button>
            <button className="px-1 py-2 w-6/12 h-11 bg-transparent border border-white text-white rounded-full text-left font-[Poppins] text-sm"> QUIERO SER VOLUNTARIO </button>
          </div>

        </div>
        
        
      </div>
        
    </div>
  );
}

export default Sumate;
