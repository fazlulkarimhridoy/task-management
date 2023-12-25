import { FaGoogle } from "react-icons/fa";
import signInImage from "../../assets/FormImages/signin.jpg"

const Login = () => {
    return (
        <section className="bg-white">
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

                        <form className="mt-8 grid grid-cols-6 gap-6">
                            

                            {/* email */}
                            <div className="col-span-6">
                                <label className="block text-sm font-medium text-gray-700"> Email </label>

                                <input
                                    type="email"
                                    className="mt-1 w-full rounded-md border p-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            {/* password */}
                            <div className="col-span-6">
                                <label className="block text-sm font-medium text-gray-700"> Password </label>

                                <input
                                    type="password"
                                    className="mt-1 w-full rounded-md border p-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
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
                        <div className="my-6 space-y-4">
                            <button aria-label="Login with Google" type="button" className="flex items-center hover:bg-blue-600 hover:text-white justify-center w-full p-2 space-x-4 border rounded-md focus:ri focus:ri border-gray-600 focus:ri">
                                <FaGoogle></FaGoogle>
                                <p>Login with Google</p>
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Login;