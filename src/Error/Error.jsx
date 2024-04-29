import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className=" pt-32 bg-base-100 h-screen ">
            
        <div className="  card card-compact w-[70%] h-screen bg-base-100 shadow-xl mx-auto items-center text-center ">
        <div className="card-body">
               
               <div className="card-actions justify-end">
                 <Link to="/">  <button className="btn btn-primary">Go Home</button></Link> 
               </div>
           </div>
           
            <figure  className=" w-full">
                <img src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1" alt="Error" />
            </figure>
            
        </div>
      </div>
    );
};

export default Error;