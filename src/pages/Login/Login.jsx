import login_img from "../../assets/images/login.jpg";
const Login = () => {
  return (
    <div>
      <div>
        <h2 className="md:text-4xl text-2xl font-bold">Login</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="bg-gray-200 text-xl p-2 w-full rounded-t-md border border-gray-400 outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="email"
            className="bg-gray-200 text-xl p-2 w-full rounded-b-md border border-t-0 border-gray-400 outline-none"
            required
          />
          {/* button container */}
          <div></div>
        </form>
      </div>
      <div>
        <p>
          Don{`'`}t have an account? <span>Create new account</span>
        </p>
        <img src={login_img} alt="" />
      </div>
    </div>
  );
};

export default Login;
