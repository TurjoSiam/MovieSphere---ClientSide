import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import loginPhoto from '../../src/assets/login.png'

const Login = () => {

    document.title = 'Movie Sphere | Login';

    const navigate = useNavigate();

    const { signInUser, googleLogin } = useContext(AuthContext);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                console.log(result);
                toast.success('User logged in successfully')
                navigate("/")
            })
            .catch((error) => {
                console.log('ERROR', error);
                toast.error('Something went wrong')
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                console.log(result);
                navigate("/");
                toast.success('Google login successful')
            })
    }

    return (
        <div className="md:w-10/12 mx-auto my-16 flex items-center flex-col-reverse md:flex-row">
            <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 mx-auto max-w-lg">
                <h2 className="text-3xl font-bold mb-10 mx-auto w-full max-w-lg text-center">Welcome Back! Please Log In</h2>
                <div className="w-full mb-6">
                    <label className="uppercase tracking-wide text-gray-700 text-sm flex items-center gap-1 font-bold mb-2">
                        <MdEmail />Email
                    </label>
                    <input {...register("email")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="email" placeholder="example@gmail.com" />
                </div>
                <div className="w-full">
                    <label className="uppercase tracking-wide text-gray-700 text-sm flex items-center gap-1 font-bold mb-2">
                        <RiLockPasswordFill />Password <Link to="/forgotpassword" className='text-xs font-normal text-gray-700 normal-case ml-3 hover:text-blue-600'>(Forgot password?)</Link>
                    </label>
                    <input {...register("password")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="password" placeholder="******" />
                </div>
                {/* submit */}
                <p className="text-sm text-gray-600 mb-6">New user?<Link to="/register" className="text-blue-600 hover:font-bold">  Register</Link></p>
                <input className="btn w-full bg-orange-900 text-white hover:bg-orange-200 outline outline-transparent hover:outline-orange-800 duration-300 ease-in-out hover:text-orange-800 mb-1" type="submit" value="Login" />
                <button onClick={handleGoogleLogin} className='btn w-full flex bg-orange-900 text-white hover:bg-orange-200 outline outline-transparent hover:outline-orange-800 duration-300 ease-in-out hover:text-orange-800 mb-2 items-center gap-1'><FcGoogle /> Login with Google</button>
            </form>
            <div className='w-1/3'>
                <img src={loginPhoto} alt="login photo" />
            </div>
        </div>
    );
};

export default Login;