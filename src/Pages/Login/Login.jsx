import { FaGoogle } from "react-icons/fa";
import signInImage from "../../assets/FormImages/signin.jpg"
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth"
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    // hooks and states
    const { login, googleRegister } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { handleSubmit, register, formState: { errors } } = useForm();


    // google register
    const googleSignIn = () => {
        googleRegister()
            .then(result => {
                // getting user info
                const user = result.user;
                if (user.uid) {
                    toast.success('New user created through google login!');
                }
                navigate(location?.state ? location.state : "/");
            })
    }



    // sign in with email and password
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        login(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                if (user.uid) {
                    toast.success('New user created through google login!');
                    navigate(location?.state ? location.state : "/");
                }
            })
            .catch(err => {
                console.log(err.error);
            })

    }

    return (
        <section className="bg-white">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt="signIn-image"
                        src={signInImage}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </section>

                <main
                    className="flex items-center justify-center px-8 pb-8 sm:px-12 lg:col-span-7 lg:px-16 lg:pb-16 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Sign In to access your account.
                        </h1>

                        <p className="mt-4 leading-relaxed text-gray-500">
                            You can access many features by signing in your accounts and also you can explore dashboard. So, its time to sign in.
                        </p>
                        <div className="my-6 space-y-4">
                            <button onClick={googleSignIn} aria-label="Login with Google" type="button" className="flex items-center hover:bg-blue-600 hover:text-white justify-center w-full p-2 space-x-4 border rounded-md focus:ri focus:ri border-gray-600 focus:ri">
                                <FaGoogle></FaGoogle>
                                <p>Login with Google</p>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">


                            {/* email */}
                            <div className="col-span-6">
                                <label className="block text-sm font-medium text-gray-700"> Email </label>

                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    className="mt-1 w-full rounded-md border p-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                                {errors.email && <span className="text-red-600">Email address is required</span>}
                            </div>

                            {/* password */}
                            <div className="col-span-6">
                                <label className="block text-sm font-medium text-gray-700"> Password </label>

                                <input
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                    type="password"
                                    className="mt-1 w-full rounded-md border p-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                                {errors.password?.type === "required" && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === "minLength" && <span className="text-red-600">Password should be minimum 6 character</span>}
                                {errors.password?.type === "maxLength" && <span className="text-red-600">Password should be maximum 20 character</span>}
                                {errors.password?.type === "pattern" && <span className="text-red-600">Password should have one uppercase, one lowercase , one numeric value & one special character</span>}
                            </div>

                            {/* conditions circle */}
                            <div className="col-span-6">
                                <label className="flex gap-4">
                                    <input
                                        type="checkbox"
                                        name="marketing_accept"
                                        className="h-5 w-5 rounded-md border p-2 border-gray-200 bg-white shadow-sm"
                                    />

                                    <span className="text-sm text-gray-700">
                                        I want to receive emails about events, product updates and company announcements.
                                    </span>
                                </label>
                            </div>

                            <div className="col-span-6">
                                <p className="text-sm text-gray-500">
                                    By creating an account, you agree to our
                                    <a className="text-gray-700 underline"> terms and conditions </a>
                                    and
                                    <a className="text-gray-700 underline">privacy policy</a>.
                                </p>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    type="submit"
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                >
                                    Create an account
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Already have an account?
                                    <a className="text-gray-700 underline">Log in</a>.
                                </p>
                            </div>
                        </form>
                        
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Login;