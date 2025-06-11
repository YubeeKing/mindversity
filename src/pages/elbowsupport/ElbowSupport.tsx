import Slider from "react-slick";
import { IoCheckmark } from "react-icons/io5";
import { General } from "../components"
import { bonanzaimg, freedeliver, layeroneleft, layeroneright, layertwoleft, layertworight, stanleyfour, stanleyone, stanleythree, stanleytwo } from "../../assets";


const ElbowSupport = () => {

  const settings = {
        dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
    }
 
    const elbowdetails = ["90% Recycled 18/8 stainless steel BPA-free",
"Recycled stainless steel icon inside the tumbler indicates your Quencher is made from sustainable material",
"Double-wall vacuum insulation",
"Powder coat finish",
"FlowState™ screw-on 3-position lid",
"Reusable straw",
"Comfort-grip handle",
"Car cup holder compatible (base diameter: 3.1 inches)",
"Dishwasher safe"]

  return (
   <div>
    <General>
        <div>
                 <Slider {...settings}>
            <div className="h-[50vh] md:h-[80vh] bg-elbowone bg-center bg-opacity-50 bg-contain flex justify-center items-center align-middle w-full ">
                {/* <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white">
                <div className="md:w-2/3 w-full flex flex-col gap-2 md:gap-4 justify-center items-center text-center">
                  <h3 className="text-2xl md:text-6xl font-['Inter'] font-[800]">INVEST IN <span className="text-primary"> YOURSELF</span></h3>

                    <p className="text-center md:text-lg text:sm leading-4">Just a few minutes on the spin bike today can pave the way for a healthier, happier life, proving that small efforts now yield lasting benefits for your well-being.</p>
                    <button onClick={scrolToForm} className="md:py-3 py-1 md:px-6 px-3 text-sm md:text-md rounded-full border-2 border-white text-white bg-red-900 hover:bg-primary">ORDER NOW</button>

                    
                </div>
              </div> */}
               
            </div>
            <div className="h-[50vh] md:h-[80vh] bg-elbowtwo bg-center bg-contain bg-opacity-80">
              {/* <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white">
                <div className="md:w-2/3 w-full flex flex-col gap-4 justify-center items-center text-center">
                  <h3 className="text-2xl md:text-6xl font-['Inter'] font-[800] uppercase">Why wait for <span className="text-primary">  tomorrow? </span></h3>
                    <p className="text-center md:text-lg leading-4" >Pedal your way to greater strength, boosted energy, and newfound confidence. Start today and experience the empowering benefits of spinning for both your body and mind.</p>
                    <button onClick={scrolToForm} className="py-1 md:py-3 md:px-6 px-3 text-sm md:text-md rounded-full border-2 border-white text-white bg-red-900 hover:bg-primary">ORDER NOW</button>
                </div>
              </div> */}
                
                
            </div>
            <div className="h-[50vh] md:h-[80vh] bg-elbowthree bg-center bg-contain">
                {/* <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white">
                <div className="md:w-2/3 w-full flex flex-col gap-4 justify-center items-center text-center">
                  <h3 className="text-2xl md:text-6xl font-['Inter'] font-[800] uppercase">Make your health a <span className="text-primary"> priority </span> </h3>
                    <p className="text-center md:text-lg leading-4">Pedal towards a stronger, more energized version of yourself. Embrace the power of spinning to boost both your physical strength and happiness, transforming into the best version of you.</p>
                    <button onClick={scrolToForm} className="py-1 md:py-3 md:px-6 px-3 text-sm md:text-md rounded-full text-white bg-red-900 hover:bg-primary border-2 border-white">ORDER NOW</button>
                </div>
              </div> */}
                
            </div>
        </Slider>
        </div>
        <div>
          <div className="container">

          </div>
        </div>


        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8 py-12">
        <div>
          <img src={layeroneleft} alt="" className="w-full" />
        </div>
        <div>
          <img src={layeroneright} alt="" className="w-full" />
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8 py-12">
           <div>
            <Slider {...settings}>
                    <div className="w-full h-[450px]">
                      <img src={stanleyone} alt="" className="w-full rounded-lg object-cover h-full" />
                    </div>
                    <div className="w-full h-[450px]">
                      <img src={stanleytwo} alt="" className="w-full rounded-lg object-cover h-full" />
                    </div>
                    <div className="w-full h-[450px]">
                      <img src={stanleyone} alt="" className="w-full rounded-lg object-cover h-full" />
                    </div>
                    <div className="w-full h-[450px]">
                      <img src={stanleyfour} alt="" className="w-full rounded-lg object-cover h-full" />
                    </div>
                    <div className="w-full h-[450px]">
                      <img src={stanleyone} alt="" className="w-full rounded-lg object-cover h-full" />
                    </div>
                    <div className="w-full h-[450px]">
                      <img src={stanleythree} alt="" className="w-full rounded-lg object-cover h-full" />
                    </div>
                  </Slider>
           </div>
           <div>
            <h2 className="font-[Jost] text-3xl font-[600]">STANLEY QUENCHER FLOWSTATE TUMBLER</h2>
          <p className="py-4">Stay hydrated all day with this versatile travel tumbler, perfect for everything from intense workouts to long commutes. Its lid is designed with a rotating cover that offers three convenient options: a straw opening, a wide-mouth opening for sipping, and a full-cover top to prevent spills. The larger capacity fits easily into standard car cup holders and includes a sturdy handle for easy carrying.</p>
            <ul className="ps-4">
              {elbowdetails.map((item: any, index: any) => (
                <li key={index} className="flex items-center gap-1 font-[500]"> <span><IoCheckmark /></span> {item}</li>
              ))}
            </ul>
          <p></p>
           </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8 py-12">        
        <div>
          <img src={layertworight} alt="" className="w-full" />
        </div>
        <div>
          <img src={layertwoleft} alt="" className="w-full" />
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8 py-12">        
        <div>
          <img src={freedeliver} alt="" className="w-full" />
        </div>
        <div>
          <img src={bonanzaimg} alt="" className="w-full" />
        </div>
        </div>
        

          <div className="w-full py-12">
        <iframe className="w-full h-[500px]" src="https://www.youtube.com/embed/Atw16IuU3yo?si=m7IARG69u6DKhznj" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
        
        </div>
        
    </General>
   </div>
  )
}

export default ElbowSupport