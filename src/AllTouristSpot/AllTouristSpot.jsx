import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const AllTouristSpot = () => {
    const spots = useLoaderData();
  return (
    <div>
    <h1 className=" text-cyan-500 drop-shadow-2xl text-xl md:text-4xl font-bold text-center my-5 md:my-20">
        All Tourist Spots
    </h1>
    <div className=" my-20 md:my-40 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
        {spots.map((spot) => (
        <Card key={spot._id} spot={spot}></Card>
        ))}
    </div>
</div>
  );
};

export default AllTouristSpot;
