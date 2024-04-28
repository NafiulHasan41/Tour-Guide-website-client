import { useContext , useState } from "react"; import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { IoEye ,IoEyeOff } from "react-icons/io5";



const Register = () => {

    const [ pass , setPass] = useState(false);

    const navigate = useNavigate();
    const { createUser , logOut } = useContext(AuthContext);

    const handleRegister = e => {

        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photoUrl = form.get('url');

        if(password.length < 6){
            toast.error('Password must be at least 6 characters');
            return;
        }
        else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*[a-zA-Z]).{8,}$/.test(password)){
            
            toast.error('Password must contain at least one uppercase letter, one lowercase letter, one number and one special character');
            return;
        }


     

      
        createUser(email, password)
            .then(result => {
                
             
                updateProfile(result.user, { 
                    displayName: name,
                    photoURL: photoUrl
                  }).then(() => {

                    
                    toast.success('User Created Successfully');
                    logOut().then( () => {
                        
                        navigate('/login');
                    
                    })
                    .catch((error) => {
                    
                        toast.error(error.message);
    
                      });

                  }).catch((error) => {
                    
                    toast.error(error.message);

                  });
              
               
            })
            .catch(error => {
                toast.error(error.message);
            })


        }









    return (
        <div className="w-[95%] mx-auto mb-10">
             <Helmet>
            <title>Register</title>
        </Helmet>
       <div className="hero gap-1 md:min-h-[500px] bg-white rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className=" text-xl md:text-3xl lg:text-5xl font-bold">Register now!</h1>
                <p className=" py-3 md:py-6 text-[16px]">Start your Journey with us . We welcome you!</p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-green-400">
                <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Password</span>
                        </label>
                        <div className=" relative">

                       <input type={ pass? "text" : "password" } name="password" placeholder="password"
                           className="input input-bordered w-full" required />
                       <span onClick={()=> setPass(!pass)} className=" text-2xl absolute top-3 right-3">{ pass ?
                           <IoEye /> :
                           <IoEyeOff /> }</span>

                   </div>

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Image URL</span>
                        </label>
                        <input type="url" name="url" placeholder="URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-yellow-300  border-none text-xs md:text-xl">Register</button>
                    </div>
                </form>

                <label className="label text-center  justify-center text-[16px]">
                    <p className=" mx-1"> Already have an account ?</p>
                    <Link to="/login" className="label-text-alt btn bg-green-300 border-none  text-[16px] text-blue-500">
                    Login</Link>
                </label>
            </div>
        </div>
    </div>
    <ToastContainer />
</div>
    );
};

export default Register;