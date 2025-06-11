import { useRef, useState } from "react"
import { Navbar } from "../ui"
import { toast } from "react-toastify"
import { FaPhoneAlt, FaShoppingCart } from "react-icons/fa"
import { FaTruckArrowRight } from "react-icons/fa6"
import { BiSmile } from "react-icons/bi"


const General = ({children}: any) => {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        city: "",
        state: "",
        phoneno: "",
        altPhoneNo: "",
        message: ""
      })
    
        // const [formLoading, setFormLoading]= useState(false)
    
    
        const formRef = useRef<HTMLDivElement | null>(null)

        const scrolToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
   }  

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          setFormData({...formData, [e.target.name]: e.target.value})
        }
    
        const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
    
          const form = new FormData();
          form.append("form-name", "contact");
          Object.keys(formData).forEach((key) => form.append(key, formData[key as keyof typeof formData]));
    
          fetch("/", {
            method: "POST",
            body: form
          }).then(() => toast.success("Received, We will contact you shortly", {position: "top-center"})).catch((error) => toast.error(`Submission failed: ${error}`))
        }
  return (
    <div>
        <Navbar navRef={scrolToForm}/>
        <div>{children}</div>
        <div>
                    {/* Fill in Order */}
                    <div className="container py-12 text-center flex flex-col gap-4">
                      <h2 className="font-[700] font-['Inter'] text-2xl md:text-5xl text-red-900">HOW TO ORDER</h2>
                      <p className="font-[500] text-lg">How To Get Your Fitness Machine (BEFORE WE RUN OUT OF STOCK)</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center pt-8">
                      <div className="flex flex-col justify-center items-center gap-4">
                        <FaShoppingCart size={60} color="#d21334" />
                        <p className="font-[500] text-lg">Fill The Form Below To Order</p>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-4">
                        <FaPhoneAlt size={60} color="#d21334"/>
                        <p className="font-[500] text-lg">We'll Call You To Confirm Your Order</p>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-4">
                        <FaTruckArrowRight size={60} color="#d21334" />
                        <p className="font-[500] text-lg">We'll Process And send Your Product</p>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-4">
                        <BiSmile  size={60} color="#d21334"/>
                        <p className="font-[500] text-lg">Receive Your Product (1-3 Days)</p>
                      </div>
                      </div>
                      <div className="py-8">
                      <button className="bg-red-900 hover:bg-primary px-6 py-3 rounded-full text-white w-fit mx-auto border-2 border-black" onClick={scrolToForm}>CLICK HERE TO FILL THE FORM</button>
                      </div>
                    </div>
                    
                    </div>
                    <div className="bg-black text-white py-12">
                      <div className="container">
                      <div className="flex flex-col gap-6 text-center">
                        <h3 className="font-['Inter'] font-[800] text-3xl">DO YOU WANT FREE DELIVERY?</h3>
                        <p>We’ve set up an exclusive delivery offer for our next 17 customers!</p>
                        <p>Normally, delivery costs N1,500 within Lagos or N2,500 nationwide, but if you order now, you’ll enjoy free delivery.</p>
                        <p>Don’t miss this chance to own this life-changing product with free shipping. Click the button below to place your order now!</p>
                        <button className="bg-red-900 rounded-full py-3 px-6 border border-white text-white mx-auto" onClick={scrolToForm}>Click Here To Fill The Form</button>
            
                      </div>  
            
                      </div>
                      
                    </div>
                      {/* Contact Us */}
                    <div className="container py-6" ref={formRef}>
                      <div className="w-full md:w-1/2 mx-auto">
                        <h2 className="text-center font-[700] font-['Inter'] py-4 md:text-4xl text-2xl">Contact <span className="text-primary">Us</span> </h2>
                        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="flex flex-col md:gap-2 gap-0 shadow rounded-xl md:p-8 p-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2 justify-start items-center md:pt-2 pt-0">
                           <div className="flex flex-col md:gap-1 gap-0">
                            <label className="font-[500]">First Name</label>
                            <input type="text" name="firstname"  required className="rounded border-inpcolor outline-none  border-opacity-90 border-2 p-1"  onChange={handleChange} />
                          </div> 
                          <div className="flex flex-col md:gap-1 gap-0">
                            <label className="font-[500]">Last Name</label>
                            <input type="text" name="lastname" required className="rounded border-inpcolor outline-none border-opacity-90 border-2 p-1" onChange={handleChange} />
                          </div>
                          </div>
                          <div className="flex flex-col md:gap-1 gap-0 md:pt-2 pt-0">
                            <label className="font-[500]">Email</label>
                            <input type="email" name="email" required className="rounded border-inpcolor outline-none border-opacity-90 border-2 p-1"  onChange={handleChange} />
                          </div>
                          <div>
                          <div className="flex flex-col md:gap-1 gap-0 md:pt-2 pt-0">
                                <label className="font-[500]">Address</label>
                                <input type="text" name="email" required className="rounded border-inpcolor outline-none border-opacity-90 border-2 p-1" onChange={handleChange} />
                              </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-start items-center md:pt-2 pt-0">
                              <div className="flex flex-col md:gap-1 gap-0">
                                <label className="font-[500]">City</label>
                                <input type="text" name="city" required className="rounded border-inpcolor outline-none border-opacity-90 border-2 p-1" onChange={handleChange} />
                              </div>
                              <div className="flex flex-col md:gap-1 gap-0">
                                <label className="font-[500]">State</label>
                                <input type="text" name="state" required className="rounded border-inpcolor outline-none border-opacity-90 border-2 p-1" onChange={handleChange}/>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-start items-center">
                           <div className="flex flex-col md:gap-1 gap-0">
                            <label className="font-[500]">Phone Number</label>
                            <input type="text" name="phoneno" required className="rounded border-inpcolor outline-none border-opacity-90 border-2 p-1"  onChange={handleChange}/>
                          </div> 
                          <div className="flex flex-col md:gap-1 gap-0">
                            <label className="font-[500]">Alternative Phone Number</label>
                            <input type="text" name="altphoneno" required  className="rounded border-inpcolor outline-none border-opacity-90 border-2 p-1"  onChange={handleChange}/>
                          </div>
                          </div>
                          <div className="flex flex-col md:gap-1 gap-0 justify-start items-start">
                            <label className="font-[700] font-['Inter']">Message</label>
                            <textarea  required name="message" className="w-full md:h-80 h-48 rounded border-inpcolor outline-none border-opacity-90 border-2 p-1"  onChange={handleChange} ></textarea>
                          </div>
                          <div className="pt-2 md:pt-4">
                          <button className="bg-red-900 hover:bg-primary duration-[1s] transition-all ease-in-out py-2 px-4 float-end  text-white w-fit rounded">Submit</button>
                          </div>
                        </form>
                      </div>
                    </div>
            
                    {/* Footer */}
                    <div className="bg-black text-white">
                      <div className="container">
                        <div className="flex flex-col gap-2 text-center py-12">
                          <h3 className="text-2xl md:text-5xl font-['Inter'] text-primary font-[700]">Got Questions?</h3>
                          <p>REACH OUT TO OUR CUSTOMER SUPPORT TEAM</p>
                          <p className="text-4xl font-['Inter'] font-[600]">0803 517 2276</p>
                          <p>Delivery Time: 1-3 Working Days </p>
            
            <p>Our Customer Care team will contact you within 24 hours after placing your order.</p>
            
            <p>This website is not affiliated with or endorsed by Facebook or Facebook Inc. "Facebook" is a registered trademark of Facebook, Inc.</p>
            
            <p>© 2021 | Policy | Terms</p>
                        </div>
                      </div>
                    </div>
        </div>
  )
}

export default General