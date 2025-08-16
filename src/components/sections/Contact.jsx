import React, { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import emailjs from "emailjs-com";
import { IoMailUnreadSharp } from "react-icons/io5";

const Contact = () => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const apiKey = import.meta.env.VITE_API_KEY;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateID, e.target, apiKey)
      .then((res) => {
        alert("Message Sent!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong! Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <div className="text-center mb-10">
            <p className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              You can also reach me directly:
            </p>
            <p className="text-blue-400 font-medium mt-2">
              <IoMailUnreadSharp className="inline" />{" "}
              <a
                href="mailto:saisasnk.gunji@gmail.com"
                className="hover:underline"
              >
                saisasnk.gunji@gmail.com
              </a>
            </p>
            <p className="text-gray-400 mt-1 relative">
              <span className="font-[900]">📍 Location:</span> Vadodara,
              Gujarat, India
            </p>
            <p className="text-gray-400 mt-1">
              <span className="font-[900]">📞 Phone:</span> +91-6281319055
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get in Touch With Me
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                className="peer w-full bg-white/5 border border-white/10 placeholder-transparent rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                id="name"
                name="name"
                placeholder=" "
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <label
                htmlFor="name"
                className="absolute left-[15px] text-gray-500 transition-all peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-[#02060d]"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                className="peer w-full bg-white/5 border border-white/10 placeholder-transparent rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                id="email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <label
                htmlFor="email"
                className="absolute left-[15px] text-gray-500 transition-all peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-[#02060d]"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                id="message"
                name="message"
                placeholder="Your Message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Submit
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
