import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const List = () => {
  const { user } = useContext(AuthContext);
  const loadedSpots = useLoaderData()
  const [spots, setSpots] = useState([]);

  useEffect(() => {
       const neededSpots = loadedSpots.filter(spot => spot.email === user.email);
         setSpots(neededSpots);
         console.log(neededSpots);
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Avg_cost</th>
            <th>FavorableSeason</th>
            <th>Visitor/Year</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row  */}
          {
                spots.map(spot =>
                    <tr key={spot._id}>
            
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={spot.imageURL}
                              alt={spot.touristSpotName}
                            />
                          </div>
                        </div>
                        <div >
                          <div className="font-bold">{spot.touristSpotName}</div>
                          <div className="text-sm opacity-50">{spot.location}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                        <span className="badge bg-cyan-500 p-2 text-black">{spot.average_cost}</span>
                      
                    </td>
                    <td>{ spot.seasonality }</td>
                    <td>{ spot.totalVisitorPerYear }</td>
                    <td>
                      <button className="btn btn-sm btn-primary">update</button>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-error">Delete</button>
                    </td>
                   
                  </tr>
                )
            }
         
        </tbody>
      </table>
    </div>
  );
};

export default List;
