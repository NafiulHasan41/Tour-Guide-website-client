import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const List = () => {
  const { user } = useContext(AuthContext);
  const loadedSpots = useLoaderData()
  const [spots, setSpots] = useState([]);

  useEffect(() => {
       const neededSpots = loadedSpots.filter(spot => spot.email === user.email);
         setSpots(neededSpots);
        
  }, []);

  const handleDelete = _id => {

    Swal.fire({
        title: 'Are you sure want to delete it?',
        text: "You won't be able to undo this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {


            fetch(`http://localhost:4000/touristSpots/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Spot has been deleted.',
                            'success'
                        )
                        const remaining = spots.filter(spot => spot._id !== _id);
                        setSpots(remaining);
                    }
                })

        }
    })
}


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
                      <button onClick={()=> handleDelete(spot._id)} className="btn btn-sm btn-error">Delete</button>
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
