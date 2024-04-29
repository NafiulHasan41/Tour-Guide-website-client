import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryCard = ({country}) => {
    return (
      
         <Link to={`/country/${country.country}`} >

        <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="00"
         className="card w-full m-1 md:m-5 bg-gradient-to-r from-cyan-500 to-cyan-200 h-[500px] shadow-2xl shadow-cyan-500/80">
            
            <figure><img className=" overflow-clip rounded-xl" src={country.imageURL} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-black">{country.country}</h2>
                <div>
                   <div className=" my-4">
                       <p className="  text-black font-bold">Avg_Cost : <span className=" text-rose-500 font-medium"> {country.description} </span> </p>
                       
                   </div>
                   
                   
                
                </div>
                
            </div>
            
        </div>
        </Link>

       
    );
};

CountryCard.propTypes = {
    country: PropTypes.object,
};

export default CountryCard;