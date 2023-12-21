import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../api/utils";
import { Link, useNavigate } from "react-router-dom";
import { BsGithub, BsGoogle } from "react-icons/bs";
import login_img from "../../assets/images/login.jpg";
import Container from "../../components/ui/Container";

const SignUp = () => {
  const { googleSignIn, githubSignIn, createUser, updateUserProfile } =
    useAuth();
  const navigate = useNavigate();
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.password.value;
    const confirmPass = form.confirmPassword.value;
    const photo = form.photo.files[0];

    if (name === " " || name === "") {
      return toast.error("You have to provide a name.");
    }

    if (pass.length < 6) {
      return toast.error("Password is less than 6 characters!");
    }

    if (!/[A-Z]/.test(pass)) {
      return toast.error("Password Don't have a capital letter");
    }
    if (!/[!#$%&? "]/.test(pass)) {
      return toast.error(
        "Password Don't have a special character. Example: !, #, $, %, & or ?"
      );
    }

    if (pass !== confirmPass) {
      return toast.error("Password Doesn't match");
    }

    try {
      // Upload image
      const imageData = await imageUpload(photo);

      // User registration
      const result = await createUser(email, pass);

      console.log(result);

      //   // Save user name and profile photo
      updateUserProfile(name, imageData?.data?.display_url)
        .then(() => {
          navigate("/");
          toast.success("User created successfully!");
        })
        .catch((err) => {
          if (err) {
            toast.error("something went wrong. Please try again.");
          }
        });
    } catch (err) {
      toast.error(err.message);
    }
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

  return (
    <Container>
      <div className="flex md:gap-5 lg:gap-10 text-black justify-between items-center py-10">
        <div className="flex-1">
          <h2 className="md:text-4xl text-2xl font-bold pb-5">
            Create Account
          </h2>
          <form onSubmit={handleSubmitRegister}>
            <div className="flex md:flex-row flex-col">
              <input
                type="text"
                placeholder="Full Name*"
                name="name"
                className="bg-gray-200 md:text-xl p-2 w-full
                 rounded-t-md md:rounded-tr-none md:rounded-tl-md md:border-r-0 border-r border
                  border-gray-400 outline-none"
                required
              />
              <input
                type="file"
                placeholder="Photo"
                name="photo"
                className="bg-gray-200 md:text-xl p-2 w-full md:rounded-tr-md border-t-0 md:border-t
                border border-gray-400 outline-none"
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
              <a className="underline md:hidden cursor-pointer">sign in</a>
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
        <div className=" hidden md:block flex-1">
          <p className=" text-sm lg:text-xl pl-6">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-blue-500 cursor-pointer">Sign in</span>
            </Link>
          </p>
          <img src={login_img} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
