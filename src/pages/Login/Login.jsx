import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { NavLink, useLocation, useNavigate} from "react-router-dom";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import 'animate.css';



const Login = () => {
    
    useEffect(() => {
        document.title = 'Login';
    }, []);

    
    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] =useState('');
    const [showPassword, setShowPassword] = useState(false);
    
     //navigate 
    const navigate = useNavigate();
    const location = useLocation();
    console.log('location in the login page',location);
   

    const [user, setUser] = useState(null);

   
    

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //github
    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
            setSuccess('Success');
            navigate(location?.state ? location.state : '/');

        })
        .catch(error =>{
            console.error(error)
        })
    }



    //google
    const handleGoogleSignIn = () =>{
        console.log('clicked')
        signInWithPopup(auth,googleProvider)
        .then( result =>{
            const loggedInUser =result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
            setSuccess('Success');
            // navigate(location?.state ? location.state : '/');


        })
        .catch(error =>{
            console.error(error);
        })
    }

        //email 

        const {signIn} = useContext(AuthContext)

        const handleLogin = e =>{
            e.preventDefault();
            console.log(e.currentTarget);
            const form = new FormData(e.currentTarget);
            const email = form.get('email');
            const password = form.get('password');
            console.log(email, password);

            //reset error
        setLoginError('');
        setSuccess('');


            signIn(email, password)
            .then(result =>{
                console.log(result.user)
                setSuccess('Success');

                //navigate
                navigate(location?.state ? location.state : '/');
            })
            .catch(error =>{
                console.error(error)
                setLoginError('Error')
            })
          }

          useEffect(() => {
            if (loginError) {
                Swal.fire({
                    position: "middle",
                    icon: "error",
                    title: "Use Correct password",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            if (success) {
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 1500);
            }
        }, [location.state, loginError, navigate, success]);


    return (
        
        <div className='bg-[#c2d0d9]  w-full  py-20'>

            <div className="animate__animated animate__zoomIn mx-auto w-[390px] h-[520px] bg-white rounded-3xl px-8">

                <h1 className='text-center text-2xl font-bold py-7'>Please login</h1>

                <button onClick={handleGoogleSignIn} className='border border-[#a39898] w-full p-2 gap-2 flex items-center justify-center rounded-md'>
                    <FcGoogle className='text-xl' />
                    <p className='font-semibold'>
                        Sign in with Google
                    </p>
                </button>

                <button onClick={handleGithubSignIn}  className='w-full mt-2 rounded-md border border-[#a39898] p-2 gap-2 flex items-center justify-center '>
                    <FaGithub className='text-xl text-black' />
                    <p className='font-semibold'>
                        Sign in with GitHub
                    </p>
                </button>

                <div className='flex my-6 justify-between items-center'>
                    <p className='flex-grow border-b border-[#a39898]'></p>
                    <p className='px-4'>or</p>
                    <p className='flex-grow border-b border-[#a39898]'></p>
                </div>

                <form onSubmit={handleLogin} >
                    <p className='pb-1 font-semibold'>Email Address</p>
                    <input className='p-2 mb-2 border border-[#a39898] rounded-md w-full ' type="email" name='email' placeholder='Enter Your email' required />

                    <p className='pb-1 font-semibold'>Password</p>
                    <div className="flex flex-col relative">
                        <input
                            className='p-2 border rounded-md w-full border-[#a39898]'
                            type={showPassword ? "text" : "password"}

                            name="password" id="password"
                            placeholder='Enter your Password' required />
                          <span onClick={() => setShowPassword(!showPassword)} className="absolute left-[290px] top-2 text-xl">
                            {
                                showPassword ? <FaRegEyeSlash /> : <AiOutlineEye />
                            }
                        </span>
                    </div>

                    <button className='font-bold text-white w-full mt-5 p-2 rounded-md border bg-[#1c67bc]'>
                        Login
                    </button>
                </form>

                <h1 className='text-center mt-4 '>Do not have an account? <NavLink to='/register' className='text-[16px] font-bold'>Register</NavLink></h1>

            </div>

        </div>

    );
};

export default Login;