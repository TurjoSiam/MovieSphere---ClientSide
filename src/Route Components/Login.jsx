import { useForm } from 'react-hook-form';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }



    return (
        <div className="w-full mx-auto my-10">
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
                <p className="text-sm text-gray-600 mb-10">New user? <Link to="/register" className="text-blue-600 hover:font-bold">Register</Link></p>
                <input className="btn" type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;