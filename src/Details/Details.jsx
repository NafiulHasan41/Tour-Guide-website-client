import { useLoaderData } from "react-router-dom";


const Details = () => {
    const spot =useLoaderData();
    return (
       
        <div className="card lg:card-side bg-gradient-to-r from-cyan-500 to-cyan-200  shadow-2xl shadow-cyan-500/80 p-3 md:p-10">
       <figure><img className=" rounded-2xl" src={spot.imageURL} alt="Album" /></figure>
       <div className="card-body">
       <h2 className="card-title text-black">{spot.touristSpotName}</h2>
                <div>
                   <div className="flex gap-5 justify-between">
                       <p className="  text-black font-bold">Avg_Cost : <span className=" text-rose-500 font-medium"> {spot.average_cost} </span> </p>
                       <p className="  text-black font-bold">TotalVisit : <span className=" text-rose-500 font-medium"> {spot.totalVisitorPerYear} </span> </p>
                   </div>
                   <div className="flex gap-5 justify-between my-3">
                       <p className="  text-black font-bold">Travel_time : <span className=" text-rose-500 font-medium"> {spot.travel_time} </span> </p>
                       <p className="  text-black font-bold">Seasonality : <span className=" text-rose-500 font-medium"> {spot.seasonality} </span> </p>
                   </div>
                   <div className=" my-4">
                   <p className="  text-black font-bold ">Location : <span className=" text-rose-500 font-medium"> {spot.location} </span> </p>
                   </div>
                   <div className="my-4">
                   <p className="  text-black font-bold ">Description : <span className=" text-rose-500 font-medium"> {spot.description} </span> </p>
                   </div>

                   <div className="my-4">
                   <p className="  text-black font-bold ">County : <span className=" text-rose-500 font-medium"> {spot.country} </span> </p>
                   </div>
                   <div className="my-4">
                   <p className="  text-black font-bold ">UserAdded : <span className=" text-rose-500 font-medium"> {spot.userName} </span> </p>
                   </div>
                   <div className="my-4">
                   <p className="  text-black font-bold ">UserAdded Email : <span className=" text-rose-500 font-medium"> {spot.email} </span> </p>
                   </div>

                  
           </div>
       </div>
   </div>
    );
};

export default Details;