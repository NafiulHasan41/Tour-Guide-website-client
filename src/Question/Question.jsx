

const Question = () => {
    return (
        <div className=" flex flex-col gap-5 ">
     <div className="collapse collapse-arrow bg-gradient-to-b from-cyan-500 to-cyan-200 shadow-xl shadow-cyan-500/70 text-black font-semibold ">
         <input type="radio" name="my-accordion-2" defaultChecked />
         <div className="collapse-title text-xl font-medium">
            What is Purpose of this website?
         </div>
         <div className="collapse-content">
             <p>Exploring different places of southeast asia and also sharing your own experience .Its like a community website of explorer people</p>
         </div>
     </div>
     <div className="collapse collapse-arrow bg-gradient-to-b from-cyan-500 to-cyan-200 shadow-xl shadow-cyan-500/70 text-black font-semibold">
         <input type="radio" name="my-accordion-2" />
         <div className="collapse-title text-xl font-medium">
             what are the best places to visit in bangladesh?
         </div>
         <div className="collapse-content">
             <p>
                    Cox`s Bazar, Sundarban, Sajek Valley, Rangamati, Saint Martin Island,
                     Kuakata, Bandarban, Sylhet, Dhaka, Chittagong, Khulna, Rajshahi, Barishal,
                      Mymensingh, Comilla, Bogura, Pabna, Tangail, Dinajpur, Jessore, Narayanganj,
                       Narsingdi, Narail, Netrokona, Nilphamari, Noakhali, Panchagarh, Patuakhali, Pirojpur,
                        Rajbari, Rangpur, Satkhira, Shariatpur, Sherpur, Sirajganj, Sunamganj, Sylhet, Tangail, Thakurgaon,
                         and other places are the best places to visit in Bangladesh.
             </p>
         </div>
     </div>
     <div className="collapse collapse-arrow bg-gradient-to-b from-cyan-500 to-cyan-200 shadow-xl shadow-cyan-500/70 text-black font-semibold">
         <input type="radio" name="my-accordion-2" />
         <div className="collapse-title text-xl font-medium ">
                what is the best time to visit in bangladesh?
         </div>
         <div className="collapse-content f">
             <p>
                    The best time to visit Bangladesh is from October to March. During this time,
                     the weather is pleasant and you can explore the country without any hassle. 
                     The temperature ranges from 10°C to 20°C, which is perfect for sightseeing and outdoor activities.
                      You can also enjoy the festivals and events that take place during this time, 
                      such as Durga Puja, Eid, and Pohela Boishakh.
             </p>
         </div>
     </div>

 </div>
    );
};

export default Question;