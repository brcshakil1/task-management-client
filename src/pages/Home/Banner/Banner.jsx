import { Link } from "react-router-dom";
import bannerImg from "../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="hero  bg-[#3058A8] py-10">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={bannerImg}
          className="md:max-w-sm max-w-full rounded-lg shadow-2xl"
        />
        <div className="text-white">
          <h1 className="text-5xl font-bold">
            CodeCraft Tasks:
            <br /> Empowering Developers
          </h1>
          <p className="py-6 text-slate-300">
            Welcome to the ultimate task management solution for developers.
            Code smarter, collaborate seamlessly, and bring your projects to
            life with ease.
          </p>
          <Link to="/dashboard">
            {" "}
            <button className="btn bg-gray-800 hover:bg-gray-700 text-white">
              Let{`'`}s Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
