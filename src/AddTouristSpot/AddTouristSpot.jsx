import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTouristSpot = () => {

    const { user } = useContext(AuthContext);
  const [country, setCountry] = useState("");

  const handleCountryChange = (value) => {
    setCountry(value);
 
  };

 const handleAddTouristSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageURL = form.url.value;
    const touristSpotName = form.touristSpotName.value;
    const location = form.location.value;
    const description = form.description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totalVisitorPerYear = form.TotalVisitorPerYear.value;
    const email = form.email.value;
    const userName = form.userName.value;

    const spot = { imageURL, touristSpotName, location, description, average_cost, seasonality, travel_time, totalVisitorPerYear, email, userName, country };

    

       fetch('https://tour-guide-server-green.vercel.app/touristSpots',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(spot)
       }).then(res=>res.json())
       .then(data=>{
       
        if(data.insertedId){
           toast.success("Tourist Spot Added Successfully");
            form.reset();
        }
       })






  }  
  return (
    <div>
        <h1 className="text-center text-xl md:text-4xl font-bold text-red-500 my-5">Add Tourist Spot</h1>

        <form onSubmit={handleAddTouristSpot}
            className=" bg-gradient-to-b from-cyan-500 to-cyan-200 rounded-2xl p-3 md:p-7 shadow-2xl shadow-cyan-500/70">
            <div>
                <label className="label">
                    <span className="label-text text-red-500 text-xl font-bold">
                        Image URL
                    </span>
                </label>
                <input type="url" name="url" placeholder="URL" className="input input-bordered w-full" required />
            </div>
            <div className=" flex flex-col md:items-end md:flex-row gap-5 my-5">
                <div className=" flex-1">
                    <label className="label">
                        <span className="label-text text-red-500 text-xl font-bold">
                            Tourist Spot Name
                        </span>
                    </label>
                    <input type="text" name="touristSpotName" placeholder="Name" className="input input-bordered w-full"
                        required />
                </div>
                <div className=" flex-1">
                    <div className=" text-center mt-5">
                        <label className="label">
                            <span className="label-text text-red-500 text-xl font-bold">
                                Country Name
                            </span>
                        </label>
                        <select className="select select-bordered w-full  " required onChange={(event)=>
                            handleCountryChange(event.target.value)}

                            >
                            <option disabled selected>
                                Country Name
                            </option>
                            <option value="bangladesh">Bangladesh</option>
                            <option value="thailand">Thailand</option>
                            <option value="indonesia">Indonesia</option>
                            <option value="malaysia">Malaysia</option>
                            <option value="vietnam">Vietnam</option>
                            <option value="cambodia">Cambodia</option>
                        </select>
                    </div>
                </div>
            </div>

            <div>
                <label className="label">
                    <span className="label-text text-red-500 text-xl font-bold">
                        Location:
                    </span>
                </label>
                <input type="text" name="location" placeholder="Location" className="input input-bordered w-full"
                    required />
            </div>
            <div>
                <label className="label">
                    <span className="label-text text-red-500 text-xl font-bold">
                        Short Description:
                    </span>
                </label>
                <input type="text" name="description" placeholder="Short Description"
                    className="textarea textarea-bordered textarea-lg w-full" required />
            </div>
            <div className=" flex flex-col md:flex-row gap-2 md:gap-5">
                <div className="flex-1">
                    <label className="label">
                        <span className="label-text text-red-500 text-xl font-bold">
                            Average Cost:
                        </span>
                    </label>
                    <input type="number" name="average_cost" placeholder="Average_cost"
                        className="input input-bordered w-full" required />
                </div>
                <div className="flex-1">
                    <label className="label">
                        <span className="label-text text-red-500 text-xl font-bold">
                            Seasonality:
                        </span>
                    </label>
                    <input type="text" name="seasonality" placeholder="Seasonality-like summer , winter"
                        className="input input-bordered w-full" required />
                </div>
                <div className="flex-1">
                    <label className="label">
                        <span className="label-text text-red-500 text-xl font-bold">
                            Travel Time:
                        </span>
                    </label>
                    <input type="text" name="travel_time" placeholder="Travel_time like-7days"
                        className="input input-bordered w-full" required />
                </div>
                <div className="flex-1">
                    <label className="label">
                        <span className="label-text text-red-500 text-xl font-bold">
                            TotalVisitorPerYear:
                        </span>
                    </label>
                    <input type="number" name="TotalVisitorPerYear" placeholder="TotalVisitorPerYear"
                        className="input input-bordered w-full" required />
                </div>

            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-5">
                <div className="flex-1">
                    <label className="label">
                        <span className="label-text text-red-500 text-xl font-bold">
                            Email:
                        </span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered w-full"
                        defaultValue={user.email} readOnly />
                </div>
                <div className="flex-1">
                    <label className="label">
                        <span className="label-text text-red-500 text-xl font-bold">
                            User Name:
                        </span>
                    </label>
                    <input type="text" name="userName" placeholder="UserName" className="input input-bordered w-full"
                        defaultValue={user.displayName} readOnly />
                </div>
            </div>
            <div className="my-3">
                <button className="btn bg-rose-500 border-black w-full ">Submit</button>
            </div>
        </form>
        <ToastContainer />
    </div>
  );
};

export default AddTouristSpot;
