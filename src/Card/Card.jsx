import PropTypes from 'prop-types';

const Card = ({spot}) => {


    return (
        <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="00"
         className="card w-full m-1 md:m-5 bg-gradient-to-r from-cyan-500 to-cyan-200  shadow-2xl shadow-cyan-500/80">
            <figure><img className=" overflow-clip rounded-xl" src={spot.imageURL} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{spot.touristSpotName}</h2>
                <div>
                   <div className="flex gap-5 justify-between">
                       <p className="  text-black font-bold">Avg_Cost : <span className=" text-rose-500 font-medium"> {spot.average_cost} </span> </p>
                       <p className="  text-black font-bold">TotalVisit : <span className=" text-rose-500 font-medium"> {spot.totalVisitorPerYear} </span> </p>
                   </div>
                   <div className="flex gap-5 justify-between my-3">
                       <p className="  text-black font-bold">Travel_time : <span className=" text-rose-500 font-medium"> {spot.travel_time} </span> </p>
                       <p className="  text-black font-bold">Seasonality : <span className=" text-rose-500 font-medium"> {spot.seasonality} </span> </p>
                   </div>
                   <div>
                   <button className="btn bg-rose-500 border-black w-full ">View Details</button>
                   </div>
                
                </div>
                
            </div>
        </div>
    );
};
Card.propTypes = {
    spot: PropTypes.object,
};

export default Card;