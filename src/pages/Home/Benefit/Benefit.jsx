import img1 from "../../../assets/images/img-1.jpg";
import img2 from "../../../assets/images/img-2.jpg";
import img3 from "../../../assets/images/img-3.jpg";

const Benefit = () => {
  return (
    <div className="px-4 py-10 md:py-20 max-w-7xl mx-auto">
      <h2 className="text-2xl text-center md:text-4xl font-bold">
        Whom can benefit
      </h2>
      <div className="py-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="card w-full glass">
          <figure>
            <img src={img1} alt="car!" className="h-auto md:h-[300px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Developers & Coders</h2>
            <p>
              Unlock peak productivity for your development team. Our task
              management platform is tailor-made for developers and coders,
              providing a seamless environment to plan, organize, and execute
              coding tasks efficiently.
            </p>
          </div>
        </div>
        <div className="card w-full glass">
          <figure>
            <img src={img2} alt="car!" className="h-auto md:h-[300px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Project Managers & Team Leads</h2>
            <p>
              Simplify project oversight and streamline task delegation. Our
              platform empowers project managers and team leads to allocate
              resources effectively, monitor progress, and ensure timely project
              delivery.
            </p>
          </div>
        </div>
        <div className="card w-full glass">
          <figure>
            <img src={img3} alt="car!" className="h-auto md:h-[300px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Freelancers & Solo Developers</h2>
            <p>
              Take control of your solo projects with ease. Freelancers and solo
              developers can benefit from our intuitive task management tools,
              aiding in project organization, time management, and goal
              achievement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
