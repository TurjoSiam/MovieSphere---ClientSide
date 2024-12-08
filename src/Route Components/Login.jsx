import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

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
        <div className="md:w-full w-10/12 mx-auto my-10">
            <h2 className="text-3xl font-bold mb-10 mx-auto w-full max-w-lg text-center">Welcome Back! Please Log In</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto max-w-lg">
                {/* title and genre */}
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
                <input className="btn mb-3 w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="submit" value="Login" />
                <button onClick={handleGoogleLogin} className='btn w-full flex text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 items-center gap-1'><FcGoogle /> Login with Google</button>
            </form>
        </div>
    );
};

export default Login;