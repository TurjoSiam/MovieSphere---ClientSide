import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdInsertPhoto } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {

    document.title = 'Movie Sphere | Register';

    const navigate = useNavigate();

    const { createUser, updateProfileWhenLogin } = useContext(AuthContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { name, email, photo, password } = data;

        createUser(email, password)
            .then(result => {
                console.log(result);
                reset();
                updateProfileWhenLogin({
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        navigate("/");
                        toast.success('User registered successfully')
                    })
            })
            .catch((error) => {
                console.log('ERROR', error);
                toast.error('something went wrong')
            })
    }



    return (
        <div className="md:w-full w-10/12 mx-auto my-10">
            <h2 className="text-3xl font-bold mb-10 mx-auto w-full max-w-lg text-center">New User Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto max-w-lg">
                {/* title and genre */}
                <div className="w-full mb-6">
                    <label className="uppercase tracking-wide text-gray-700 text-sm flex items-center gap-1 font-bold mb-2">
                        <FaUserAlt />Name
                    </label>
                    <input {...register("name", { required: 'Name is required' })} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jhon Doe" />
                    {
                        errors.name && (
                            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
                        )
                    }
                </div>
                <div className="w-full mb-6">
                    <label className="uppercase tracking-wide text-gray-700 text-sm flex items-center gap-1 font-bold mb-2">
                        <MdEmail />Email
                    </label>
                    <input {...register("email", { required: 'Email is required' })} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="email" placeholder="example@gmail.com" />
                    {
                        errors.email && (
                            <p className="text-red-500 text-xs italic">{errors.email.message}</p>
                        )
                    }
                </div>
                <div className="w-full mb-6">
                    <label className="uppercase tracking-wide text-gray-700 text-sm flex items-center gap-1 font-bold mb-2">
                        <MdInsertPhoto />Photo URL
                    </label>
                    <input {...register("photo", { required: 'Photo is required' })} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="url" placeholder="https://example.com" />
                    {
                        errors.photo && (
                            <p className="text-red-500 text-xs italic">{errors.photo.message}</p>
                        )
                    }
                </div>
                <div className="w-full">
                    <label className="uppercase tracking-wide text-gray-700 text-sm flex items-center gap-1 font-bold mb-2">
                        <RiLockPasswordFill />Password
                    </label>
                    <input {...register("password", { required: 'Email is required', pattern: { value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, message: "Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long" } })} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="password" placeholder="******" />
                    {
                        errors.password && (
                            <p className="text-red-500 text-xs italic">{errors.password.message}</p>
                        )
                    }
                </div>
                {/* submit */}
                <p className="text-sm text-gray-600 mb-10">Already registered?<Link to="/login" className="text-blue-600 hover:font-bold"> Login Here</Link></p>
                <input className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full" type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;