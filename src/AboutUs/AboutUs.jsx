import { Cursor, useTypewriter } from "react-simple-typewriter";


const AboutUs = () => {
    const[text]=useTypewriter({
        words:['explore all spot is southeast asia' , 'post Your Experience' ,'enjoy the beauty of nature'],
        loop:{},
        typeSpeed:150,
        deleteSpeed:50,

    })
    const[country]=useTypewriter({
        words:['Bangladesh' , 'Thailand' ,'Vietnam' , 'Malaysia' ,'Cambodia' , 'Indonesia'],
        loop:{},
        typeSpeed:150,
        deleteSpeed:50,

    })
    return (
        <div className=" my-7 md:my-14">
        <div className="my-5" >

            <h1 className=" text-xl md:text-4xl text-cyan-500 text-center">
             Our website is a platform where you can {' '}
             <span className=" text-rose-600">
                {text}
             </span>
             <span>
                <Cursor cursorStyle='|'/>
             </span>
                </h1>
        </div>
        <div>
        <h1 className=" text-xl md:text-4xl text-cyan-500 text-center">
             You can explore  {' '}
             <span className=" text-rose-600">
                {country}
             </span>
             <span>
                <Cursor cursorStyle='|'/>
             </span>
             <span>
                from our website
             </span>
                </h1>
        </div>
         <div className=" my-10">
         <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"  className="  mx-auto rounded-3xl m-2 md:m-8 ">
           
       <div className="card flex flex-col md:flex-row lg:card-side bg-gradient-to-b from-cyan-500 to-cyan-200  shadow-2xl shadow-cyan-500/70 rounded-3xl  p-5 md:p-10">
           <div className=" flex-1">
               <figure><img className=" rounded-xl"
                       src="https://www.wegowithanuar.com/wp-content/uploads/2023/02/places-to-visit-in-Malaysia.jpg"
                       alt="Album" />
               </figure>
           </div>

           <div className="card-body flex-1 ">

            <h2 className="card-title">Explore Southeast Asia with Us!</h2>
            <p>
                Embark on an unforgettable journey through the wonders of Southeast Asia with our curated tours and
                travel experiences. Our website is your gateway to discovering the rich cultural heritage, stunning
                landscapes, and vibrant cities of this diverse region. Whether you are seeking adventurous excursions,
                cultural immersions, or serene getaways, we have something for every traveler.
            </p>

        </div>
        </div>
        </div>
        </div>
         <div>
            <h1 className="text-xl md:text-4xl text-cyan-500 text-center">Contact Us</h1>
         <div className="mx-auto bg-gradient-to-b from-cyan-500 to-cyan-200  rounded-3xl p-4 md:p-10 shadow-2xl shadow-cyan-500/70 my-14">
            <div className=" md:w-[50%] mx-auto">
            <label className="input input-bordered flex items-center my-2 md:my-5">
           Name
           <input type="text" className="grow" placeholder="" />
       </label>
       <label className="input input-bordered flex items-center my-2 md:my-5">
           Email
           <input type="email" className="grow" placeholder="" />
       </label>
            </div>

            <div className=" text-center md:w-[50%] mx-auto">
            <textarea placeholder="Description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
            </div>

            <div className="md:w-[50%] mx-auto my-5">
            <button className="btn btn-primary w-full ">Submit</button>
            </div>
      
   </div>
         </div>
        </div>
    );
};

export default AboutUs;