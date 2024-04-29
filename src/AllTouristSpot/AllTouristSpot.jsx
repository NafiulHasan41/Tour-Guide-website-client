import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import { useState } from "react";

const AllTouristSpot = () => {
    const loadedSpots = useLoaderData();

   const [spots , setSpots]= useState(loadedSpots)


  const handleSpotSorting = value => {
      
    if(value === 'avgCost')
    {
       const newArrayWL = [...loadedSpots];
       newArrayWL.sort((a, b) => a.average_cost - b.average_cost);
       setSpots(newArrayWL);

      
       
    }
    else if ( value === 'totalVisit')
    {
      const newArrayWL = [...loadedSpots];
      newArrayWL.sort((a, b) => a.totalVisitorPerYear - b.totalVisitorPerYear);
      setSpots(newArrayWL);
    }
    
    else if(value === 'default')
    {
        const newArrayWL = [...loadedSpots];
        setSpots(newArrayWL);
 
    }

  }



  return (
    <div>
    <h1 className=" text-cyan-500 drop-shadow-2xl text-xl md:text-4xl font-bold text-center my-5 md:my-20">
        All Tourist Spots
    </h1>
    <div>
    <div className=" text-center mt-5">
        <select className="select select-bordered w-full max-w-[150px] bg-cyan-500 "
        onChange={(event) => handleSpotSorting(event.target.value)}
         
        >
          <option disabled selected>
            Sort By
          </option>
          <option value="default" >Default</option>
          <option value="avgCost" >AvgCost</option>
          <option value="totalVisit" >TotalVisit/Year</option>
        </select>
      </div>
    </div>
    <div className=" my-20 md:my-40 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
        {spots.map((spot) => (
        <Card key={spot._id} spot={spot}></Card>
        ))}
    </div>
</div>
  );
};

export default AllTouristSpot;
