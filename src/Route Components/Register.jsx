import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdInsertPhoto } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import registerPhoto from '../../src/assets/signup.png'

const Register = () => {

    document.title = 'Movie Sphere | Register';

    const navigate = useNavigate();

    const { createUser, updateProfileWhenLogin, userSignout } = useContext(AuthContext);

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
                        userSignout()
                            .then(() => {
                                navigate("/login");
                                toast.success('User registered successfully')
                            })
                            .catch((error) => {
                                console.log('ERROR', error.message);
                            })

                    })
            })
            .catch((error) => {
                console.log('ERROR', error);
                toast.error('something went wrong')
            })
    }



    return (
        <div className="md:w-10/12 mx-auto my-10 flex items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 mx-auto max-w-lg">
                <h2 className="text-3xl font-bold mb-10 mx-auto w-full max-w-lg text-center">New User Registration</h2>
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
                <input className="btn w-full flex bg-orange-900 text-white hover:bg-orange-200 outline outline-transparent hover:outline-orange-800 duration-300 ease-in-out hover:text-orange-800 mb-2 w-full" type="submit" value="Register" />
            </form>
            <div className="w-1/3">
                <img src={registerPhoto} alt="register photo" />
            </div>
        </div>
    );
};

export default Register;