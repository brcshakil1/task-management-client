import login_img from "../../assets/images/login.jpg";
import { BsGithub, BsGoogle } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { useState } from "react";
const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  const { signInUser, googleSignIn, githubSignIn } = useAuth();

  //   login user
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log(email, pass);
    signInUser(email, pass)
      .then((result) => {
        console.log(result.user);
        toast.success("logged in successfully!");
      })
      .catch((err) => toast.error(err.message));
  };

  //   Register user
  const handleSubmitRegister = (e) => {
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log(email, pass);
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("logged in successfully!");
        // navigate(location?.state ? location.state : "/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("logged in successfully!");
        // navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err.message));
  };

  console.log(isRegister);
  return (
    <div>
      {isRegister ? (
        <div className="flex md:gap-5 lg:gap-10 text-black">
          <div className="flex-1">
            <h2 className="md:text-4xl text-2xl font-bold pb-5">
              Create Account
            </h2>
            <form onSubmit={handleSubmitRegister}>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Full Name*"
                  name="name"
                  className="bg-gray-200 md:text-xl p-2 w-full rounded-tl-md border-r-0 border border-gray-400 outline-none"
                  required
                />
                <input
                  type="file"
                  placeholder="Photo"
                  name="photo"
                  className="bg-gray-200 md:text-xl p-2 w-full rounded-tr-md border border-gray-400 outline-none"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email*"
                name="email"
                className="bg-gray-200 md:text-xl p-2 w-full border-t-0 border border-gray-400 outline-none"
                required
              />
              <input
                type="password"
                placeholder="Password*"
                name="password"
                className="bg-gray-200 md:text-xl p-2 w-full border border-t-0 border-gray-400 outline-none"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password*"
                name="confirmPassword"
                className="bg-gray-200 md:text-xl p-2 w-full rounded-b-md border border-t-0 border-gray-400 outline-none"
                required
              />
              {/* button container */}
              <div className="flex gap-5 justify-between items-center mt-5">
                <button
                  className="md:w-full w-1/2 hover:bg-blue-500 
             bg-blue-600 py-3  font-semibold
              text-white rounded-full "
                >
                  Create Account
                </button>
                <a
                  onClick={() => setIsRegister(false)}
                  className="underline md:hidden cursor-pointer"
                >
                  sign in
                </a>
              </div>
            </form>
            {/* social login */}
            <div className="mt-6 flex gap-5 flex-col">
              <button
                onClick={handleGoogleSignIn}
                className="btn  w-full md:w-auto  font-semibold text-black border border-gray-500"
              >
                <BsGoogle className="text-xl" /> Continue With Google
              </button>
              <button
                onClick={handleGithubSignIn}
                className="btn  w-full md:w-auto  font-semibold text-black border border-gray-500"
              >
                <BsGithub className="text-xl" /> Continue With Github
              </button>
            </div>
          </div>
          <div className=" hidden md:block flex-1 ">
            <p className="text-right text-sm lg:text-xl">
              Already have an account?{" "}
              <span
                onClick={() => setIsRegister(false)}
                className="text-blue-500 cursor-pointer"
              >
                Sign in
              </span>
            </p>
            <img src={login_img} alt="" />
          </div>
        </div>
      ) : (
        <div className="flex md:gap-5 lg:gap-10 text-black">
          <div className="flex-1">
            <h2 className="md:text-4xl text-2xl font-bold pb-5">Login</h2>
            <form onSubmit={handleSubmitLogin}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="bg-gray-200 md:text-xl p-2 w-full rounded-t-md border border-gray-400 outline-none"
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="bg-gray-200 md:text-xl p-2 w-full rounded-b-md border border-t-0 border-gray-400 outline-none"
                required
              />
              {/* button container */}
              <div className="flex gap-5 justify-between items-center mt-5">
                <button
                  className="md:w-full w-1/2 hover:bg-blue-500 
             bg-blue-600 py-3  font-semibold
              text-white rounded-full"
                >
                  Login
                </button>
                <a
                  onClick={() => setIsRegister(true)}
                  className="underline md:hidden cursor-pointer"
                >
                  create account
                </a>
              </div>
            </form>
            {/* social login */}
            <div className="mt-6 flex gap-5 flex-col">
              <button
                // onClick={handleGoogleSignIn}
                className="btn  w-full md:w-auto  font-semibold text-black border border-gray-500"
              >
                <BsGoogle className="text-xl" /> Continue With Google
              </button>
              <button
                onClick={handleGithubSignIn}
                className="btn  w-full md:w-auto  font-semibold text-black border border-gray-500"
              >
                <BsGithub className="text-xl" /> Continue With Github
              </button>
              <button
                onClick={handleGithubSignIn}
                className="  w-full md:w-auto  font-semibold text-black hover:text-gray-600 "
              >
                Forget Password?
              </button>
            </div>
          </div>
          <div className=" hidden md:block flex-1 ">
            <p className="text-right text-sm lg:text-xl">
              Don{`'`}t have an account yet?{" "}
              <span
                onClick={() => setIsRegister(true)}
                className="text-blue-500 cursor-pointer"
              >
                Create new account!
              </span>
            </p>
            <img src={login_img} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
