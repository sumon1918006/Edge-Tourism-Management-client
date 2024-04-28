import { useContext, useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import 'animate.css';




const Register = () => {
    useEffect(() => {
        document.title = 'Register';
    }, []);

        const {createUser} =useContext(AuthContext);

        const [registerError, setRegisterError] = useState('');
        const [success, setSuccess] =useState('');
        const navigate = useNavigate();

  
    
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);


        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        if (password.length < 6) {
            Swal.fire({
                
                title: "Oops...",
                text: "Password should be at least 6 characters",
              });
            // alert('Password should be at least 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                title: "Oops...",
                text: "Your password should have at least one uppercase character",
              });
            // alert('Your password should have at least one uppercase character');
            return;
        }

        else if (!/[a-z]/.test(password)) {
            Swal.fire({
                title: "Oops...",
                text: "Your password should have at least one Lowercase character",
              });
            // alert('Your password should have at least one Lowercase character');
            return;
        }
        

     
        

       


        //reset error
        setRegisterError('');
        setSuccess('');


        //create user
        createUser(email, password)
        .then(result => {
            console.log(result.user)
            setSuccess('Success');

            //navigate
            // navigate(location?.state ? location.state : '/');

        })
        .catch(error =>{
            console.error(error);
            setRegisterError('Error');
        })
    }
    useEffect(() => {
        if (registerError) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Already Used This Email",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (success) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Register Successful",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                navigate('/');
            }, 1500);
        }
    },[navigate, registerError, success]);

    
    

       

       
    return (
        <div className='bg-[#c2d0d9] w-full  py-20 '>

            <div className="animate__animated animate__zoomIn mx-auto w-[400px]  bg-white rounded-3xl px-12">

                <h1 className='text-center text-2xl font-bold py-7'>Register Now!</h1>

                <form onSubmit={handleRegister}>
                    <p className='pb-1 font-semibold'>Your Name</p>
                    <input className='p-2 mb-2 border rounded-md w-full border-[#a39898]' type="text" name='name' placeholder='Enter Your Name' required />

                    <p className='pb-1 font-semibold'>Photo URL</p>
                    <input className='p-2 mb-2 border rounded-md w-full border-[#a39898]' type="text" name='photo' placeholder='Enter Photo URL' required />

                    <p className='pb-1 font-semibold'>Email Address</p>
                    <input className='p-2 mb-2 border rounded-md w-full border-[#a39898]' type="email" name='email' placeholder='Enter Your email' required />

                    <p className='pb-1 font-semibold'>Password</p>
                    <div className="flex flex-col relative">
                        <input
                            className='p-2 border rounded-md w-full border-[#a39898]'
                            type={showPassword ? "text" : "password"}
                            name="password" id="password"
                            placeholder='Enter your Password' required />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute left-[270px] top-2 text-xl">
                            {
                                showPassword ? <FaRegEyeSlash /> : <AiOutlineEye />
                            }
                        </span>
                    </div>

                    <button className='font-bold text-white w-full mt-5 p-2 rounded-md border bg-[#1c67bc]'>
                        Register
                    </button>
                </form>

                <h1 className='text-center py-5'>Already have an account? <NavLink to="/login" className='text-[16px] font-bold'>Login</NavLink></h1>

            </div>
        </div>
    );
};

export default Register;
