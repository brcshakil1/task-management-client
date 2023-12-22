import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  FaGithub,
  FaInstagram,
  FaLanguage,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUS = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  console.log(name, email, message);
  const handleSubmit = (e) => {
    e.preventDefault();

    // You email service id, template id, public key
    const serviceId = "service_kc46yhk";
    const templateId = "template_ciqd3ji";
    const publicKey = "FiB_IkbuhKKe4K17T";
    // create a new object contains dynamic template params
    const templateParams = {
      from_name: name,
      email: email,
      to_Name: "Bayazid",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Email sent successfully!");
          setName(""), setEmail(""), setMessage("");
        }
      })
      .catch((err) => console.error("Error sending email:", err));
  };
  return (
    <div className="md:px-20 px-5 pt-10 pb-32 md:pb-10 ">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-black">Contact me here</h2>
          <div className="pb-10 pt-5">
            <p className="pb-4 text-slate-800">
              Get in touch with me! I am available for collaboration, questions,
              or just a friendly chat. Feel free to reach out using the form
              below. Looking forward to connecting with you!
            </p>
            <div className="space-y-2 text-slate-700">
              <div className="flex justify-between items-center">
                <p className="flex items-center gap-2">
                  <FaLocationArrow /> Location
                </p>{" "}
                <p>: Moulvibazar, Sylhet, BD</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="flex items-center gap-2">
                  <MdEmail /> Email
                </p>{" "}
                <p>: brcshakil72@gmail.com</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="flex items-center gap-2">
                  <FaPhone /> Mobile
                </p>{" "}
                <p>: +8801634264626</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="flex items-center gap-2">
                  <FaLanguage /> Languages
                </p>{" "}
                <p>: Bangla, English</p>
              </div>
            </div>
          </div>
          {/* Social links */}

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/brcshakil/"
              className="text-center  rounded-full "
              rel="noreferrer"
              target="_blank"
            >
              <button className="rounded-full bg-slate-600  py-2 px-2 hover:bg-blue-400">
                <FaInstagram className="text-white text-xl" />{" "}
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/brcshakil/"
              rel="noreferrer"
              target="_blank"
              className="text-center  rounded-full "
            >
              <button className="rounded-full bg-slate-600  py-2 px-2 hover:bg-blue-400">
                <FaLinkedin className="text-white text-xl" />{" "}
              </button>
            </a>
            <a
              href="https://twitter.com/brcshakil"
              className="text-center rounded-full "
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <button className="rounded-full bg-slate-600  py-2 px-2 hover:bg-blue-400">
                <FaTwitter className="text-white text-xl" />{" "}
              </button>
            </a>
            <a
              href="https://github.com/brcshakil1"
              className="text-center  rounded-full "
              rel="noreferrer"
              target="_blank"
            >
              <button className="rounded-full bg-slate-600  py-2 px-2 hover:bg-blue-400">
                <FaGithub className="text-white text-xl" />{" "}
              </button>
            </a>
          </div>

          <div></div>
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                className="textarea textarea-bordered"
                placeholder="message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
