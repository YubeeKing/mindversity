import Slider from "react-slick";
import { IoCheckmark } from "react-icons/io5";
import { General } from "../components"
import { bonanzaimg, freedeliver, homeherone, homelbowone, homelbowthree, layeroneleft, layeroneright, layertwoleft, layertworight } from "../../assets";


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

    const stanleydet = [
      "Keeps drinks hot or cold for hours",
"Spill-resistant and leak-proof lid",
"Durable stainless steel design",
"Comfortable grip handle",
"Eco-friendly alternative to plastic bottles"
    ]
 
    const elbowdetails = [
      "Builds strong core muscles",

"Enhances balance and stability",

"Supports full-body toning",

"Compact and portable for workouts anywhere",

"Helps improve posture and flexibility"]

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
                      <img src={homeherone} alt="" className="w-full rounded-lg object-cover h-full" />
                    </div>
                    <div className="w-full h-[450px]">
                      <img src={homelbowone} alt="" className="w-full rounded-lg object-cover h-full" />
                    </div>
                    <div className="w-full h-[450px]">
                      <img src={homelbowthree} alt="" className="w-full rounded-lg object-cover h-full" />
                    </div>
                    <div className="w-full h-[450px]">
                      <img src={layeroneleft} alt="" className="w-full rounded-lg object-cover h-full" />
                    </div>
                    <div className="w-full h-[450px]">
                      <img src={homelbowone} alt="" className="w-full rounded-lg object-cover h-full" />
                    </div>
                    <div className="w-full h-[450px]">
                      <img src={layeroneright} alt="" className="w-full rounded-lg object-cover h-full" />
                    </div>
                  </Slider>
           </div>
           <div>
            <div className="flex flex-col items-center justify-center text-center">
            <h2 className="font-[Jost] text-2xl font-[600] uppercase">STANLEY QUENCHER FLOWSTATE TUMBLER</h2>
                  <p className="font-[Jost] text-2xl font-[600] uppercase">&</p>
            <h2 className="font-[Jost] text-2xl font-[600] uppercase"> 6 Elbow Abdominal Wheel</h2>
                
            </div>
           
          <p className="py-4">The Stanley Quencher FlowState Tumbler offers all-day hydration with a spill-proof lid, while the 6 Elbow Abdominal Wheel strengthens core muscles, enhancing balance, endurance, and overall body fitness.</p>
           <p className="font-[600] font-[Jost] text-xl">Benefits:</p>
          <div>
            <h3 className="font-[600] font-[Jost] text-lg">Stanley Quencher FlowState Tumbler:</h3>
                <ul className="ps-4">
              {stanleydet.map((item: any, index: any) => (
                <li key={index} className="flex items-center gap-1 font-[500]"> <span><IoCheckmark /></span> {item}</li>
              ))}
            </ul>
          </div>
          <div className="pt-2">
            <h3 className="font-[600] font-[Jost] text-lg">6 Elbow Abdominal Wheel:</h3>
            <ul className="ps-4">
              {elbowdetails.map((item: any, index: any) => (
                <li key={index} className="flex items-center gap-1 font-[500]"> <span><IoCheckmark /></span> {item}</li>
              ))}
            </ul> 
          </div>
           
          <div className="flex gap-2 font-[Jost] py-2 text-2xl font-[700]">
            <h2 className="font-[700] ">PRICE:</h2>
            <del className="text-red-700">₦120,000</del>
            <p className="text-green-700">₦90,000</p>
          </div>
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