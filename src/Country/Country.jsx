import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";


const Country = () => {
     
    const { countryName } = useParams();

    const loadedSpots = useLoaderData();
     
    const [spots , setSpots]= useState([]);

    useEffect(()=>{
          
        const neededSpots =loadedSpots.filter(spot=>spot.country === countryName);
        
        setSpots(neededSpots);

    },[])

    return (
        <div>
             <h1 className=" text-cyan-500 drop-shadow-2xl text-xl md:text-4xl font-bold text-center my-5 md:my-20">{countryName}  Spots</h1>

            <div className=" my-20 md:my-40 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">

               {
                spots.map(spot =><Card key={spot._id} spot={spot} ></Card>)
               }

            </div>
        </div>
    );
};

export default Country;