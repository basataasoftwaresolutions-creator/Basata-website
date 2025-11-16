import { Button } from "./ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_42dpa1q",
          template_id: "template_nr93q4s", 
          user_id: "Syiiwb3N8KOdI2dek",
          template_params: {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            title: "Website Contact Form"
          }
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }
  };

  return (
    <section 
      className="flex items-center justify-center min-h-screen bg-[url('/contact.png')] bg-cover bg-center bg-no-repeat max-md:py-[100px] md:max-lg:px-10 px-3" 
      dir="ltr"
      style={{ direction: 'ltr' }}
    >
      <form 
        onSubmit={handleSubmit}
        className="bg-white dark:bg-form-dark-bg py-[60px] md:px-[24px] shadow-[2px_10px_28px_rgba(0,0,0,0.25)] w-full max-w-[1050px] max-md:px-3 rounded-[24px]"
      >
        <h1 className="mx-auto w-fit text-gradient-orange font-bold text-[24px] tracking-[1%] border-b-2 border-gradient-orange [font-family:'Nunito',Helvetica] mb-10">
          CONTACT US
        </h1>
        <div className="flex flex-col md:flex-row items-start gap-[58px] w-full md:max-w-[750px] mx-auto max-lg:px-5">
          <div className="w-full">
            <p className="text-[#232323] dark:text-white [font-family:'Nunito',Helvetica] font-medium text-[20px] mb-4">
              Leave us a message
            </p>

            {/* Name Input */}
            <div className="relative w-full mb-[29px]">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                required
                className="peer bg-transparent pl-[14px] pt-[17px] pb-[11px] rounded-sm w-full border-[1.2px] border-form-dark-light_gray focus:border-gradient-orange focus:ring-1 focus:ring-gradient-orange outline-none text-[#232323] dark:text-white"
              />
              <label
                htmlFor="name"
                className="absolute left-[14px] top-[15px] text-gray-400 text-base transition-all duration-200 pointer-events-none
                peer-placeholder-shown:top-[15px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                peer-focus:top-[-8px] peer-focus:left-[10px] peer-focus:text-form-dark-light_gray peer-focus:text-sm
                peer-valid:top-[-8px] peer-valid:left-[10px] peer-valid:text-form-dark-light_gray peer-valid:text-sm
                bg-white dark:bg-form-dark-bg px-2"
              >
                Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative w-full mb-[29px]">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                required
                className="peer bg-transparent pl-[14px] pt-[17px] pb-[11px] rounded-sm w-full border-[1.2px] border-form-dark-light_gray focus:border-gradient-orange focus:ring-1 focus:ring-gradient-orange outline-none text-[#232323] dark:text-white"
              />
              <label
                htmlFor="email"
                className="absolute left-[14px] top-[17px] text-gray-400 text-base transition-all duration-200 pointer-events-none
                peer-placeholder-shown:top-[17px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                peer-focus:top-[-8px] peer-focus:left-[10px] peer-focus:text-form-dark-light_gray peer-focus:text-sm
                peer-valid:top-[-8px] peer-valid:left-[10px] peer-valid:text-form-dark-light_gray peer-valid:text-sm
                bg-white dark:bg-form-dark-bg px-2"
              >
                Email
              </label>
            </div>

            {/* Textarea with proper styling */}
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-transparent pl-[14px] rounded-sm h-[137px] pt-[17px] pr-[14px] w-full box-border border-[1.2px] border-form-dark-light_gray focus:border-gradient-orange focus:ring-1 focus:ring-gradient-orange outline-none mb-[29px] text-[#232323] dark:text-white resize-none"
              placeholder="Your Message"
            ></textarea>

            {status && (
              <div className={`mb-4 p-3 rounded ${
                status === "success" ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100" :
                status === "error" ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100" :
                "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100"
              }`}>
                {status === "success" && "Message sent successfully!"}
                {status === "error" && "Failed to send message. Please try again."}
                {status === "sending" && "Sending..."}
              </div>
            )}

            <Button 
              variant="orange" 
              className="w-full py-3"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send"}
            </Button>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-5">
              <img src="/location.svg" alt="location" className="w-6 h-6" />
              <p className="text-[#232323] dark:text-white">Basataa</p>
            </div>
            <div className="flex items-center gap-4 my-[18px]">
              <img src="/phone.svg" alt="phone" className="w-6 h-6" />
              <p className="text-[#232323] dark:text-white">+91 9599272754</p>
            </div>
            <div className="flex items-center gap-4">
              <img src="/email.svg" alt="email" className="w-6 h-6" />
              <p className="text-[#232323] dark:text-white">Basataasoftware@info.com</p>
            </div>
            <div className="flex items-center gap-6 my-[18px]">
              <img
                src="/twitter.svg"
                alt="twitter"
                className="size-[25px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src="/gmail.svg"
                alt="gmail"
                className="size-[25px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src="/linkedin.svg"
                alt="linkedin"
                className="size-[25px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src="/facebook.svg"
                alt="facebook"
                className="size-[25px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;