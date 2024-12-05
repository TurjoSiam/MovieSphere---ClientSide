import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdInsertPhoto } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const navigate = useNavigate();

    const { createUser, updateProfileWhenLogin } = useContext(AuthContext);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const {name, email, photo, password} = data;

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
                alert('User registered successfully')
            })
        })
        .catch((error) => {
            console.log('ERROR', error);
            alert('something went wrong')
        })
    }



    return (
        <div className="w-full mx-auto my-10">
            <h2 className="text-3xl font-bold mb-10 mx-auto w-full max-w-lg text-center">New User Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto max-w-lg">
                {/* title and genre */}
                <div className="w-full mb-6">
                    <label className="uppercase tracking-wide text-gray-700 text-sm flex items-center gap-1 font-bold mb-2">
                        <FaUserAlt />Name
                    </label>
                    <input {...register("name")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jhon Doe" />
                </div>
                <div className="w-full mb-6">
                    <label className="uppercase tracking-wide text-gray-700 text-sm flex items-center gap-1 font-bold mb-2">
                        <MdEmail />Email
                    </label>
                    <input {...register("email")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="email" placeholder="example@gmail.com" />
                </div>
                <div className="w-full mb-6">
                    <label className="uppercase tracking-wide text-gray-700 text-sm flex items-center gap-1 font-bold mb-2">
                        <MdInsertPhoto />Photo URL
                    </label>
                    <input {...register("photo")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="url" placeholder="https://example.com" />
                </div>
                <div className="w-full">
                    <label className="uppercase tracking-wide text-gray-700 text-sm flex items-center gap-1 font-bold mb-2">
                        <RiLockPasswordFill />Password
                    </label>
                    <input {...register("password")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="password" placeholder="******" />
                </div>
                {/* submit */}
                <p className="text-sm text-gray-600 mb-10">Already registered?<Link to="/login" className="text-blue-600 hover:font-bold"> Login Here</Link></p>
                <input className="btn w-full" type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;