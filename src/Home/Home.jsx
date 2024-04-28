import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Question from "../Question/Question";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";





const Home = () => {
   
    const loadedSpot = useLoaderData();
    const[spots, setSpots] = useState([]);

     useEffect(()=>{
         
        const neededSpots =loadedSpot.slice(0,6);
        console.log(neededSpots);
        setSpots(neededSpots);
        

     } , []);

     console.log(spots);



    return (
        <div className=" mt-24">
              <Helmet>
            <title>Explore SouthAsia : Home</title>
        </Helmet>

            <div  className=" w-[80%] mx-auto">
                <Banner/>
            </div>
            <h1 className=" text-cyan-500 drop-shadow-2xl text-xl md:text-4xl font-bold text-center my-5 md:my-20">Popular Spots</h1>
            <div className=" my-20 md:my-40 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">

               {
                spots.map(spot =><Card key={spot._id} spot={spot} ></Card>)
               }

            </div>
             <div>
             <h1 className=" text-cyan-500 drop-shadow-2xl text-xl md:text-4xl font-bold text-center my-5 md:my-10">Best Photos</h1>
              <PhotoGallery/>
             </div>
            <div className=" my-10 md:my-24">
                <h1 className=" text-cyan-500 drop-shadow-2xl text-xl md:text-4xl font-bold text-center my-5 md:my-10">Frequently Asked Question</h1>
                <Question/>
            </div>


        </div>
    );
};


export default Home;