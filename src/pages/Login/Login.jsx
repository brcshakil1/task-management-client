import login_img from "../../assets/images/login.jpg";
import { BsGithub, BsGoogle } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/ui/Container";

const Login = () => {
  const { signInUser, googleSignIn, githubSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  //   login user
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    signInUser(email, pass)
      .then((result) => {
        console.log(result.user);
        toast.success("logged in successfully!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("logged in successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("logged in successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <Container>
      <div className="flex md:gap-5 justify-between lg:gap-10 text-black items-center py-10">
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
              <Link to="/signUp">
                <p className="underline md:hidden cursor-pointer">
                  create account
                </p>
              </Link>
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
            <button className="  w-full md:w-auto  font-semibold text-black hover:text-gray-600 ">
              Forget Password?
            </button>
          </div>
        </div>
        <div className=" hidden md:block flex-1 ">
          <p className=" text-sm lg:text-xl pl-6">
            Don{`'`}t have an account yet?{" "}
            <Link to="/signUp">
              <span className="text-blue-500 cursor-pointer">
                Create new account!
              </span>
            </Link>
          </p>
          <img src={login_img} className="w-[90%] " alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Login;
