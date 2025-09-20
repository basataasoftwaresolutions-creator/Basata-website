import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[url('../public/contact.png')] bg-cover bg-center bg-no-repeat max-md:py-[100px] md:max-lg:px-10 px-3">
      <form className="bg-form-dark-bg py-[60px] md:px-[24px] shadow-[2px_10px_28px_rgba(0,0,0,0.25)] w-full max-w-[1050px] max-md:px-3 rounded-[24px]">
        <h1 className="mx-auto w-fit text-gradient-orange font-bold text-[24px] tracking-[1%] border-b-2 border-gradient-orange [font-family:'Nunito',Helvetica] mb-10">
          CONTACT US
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-[58px] w-full md:max-w-[750px] max-lg:px-5">
          <div className="w-full">
            <p className="text-white [font-family:'Nunito',Helvetica] font-medium text-[20px] mb-4">
              Leave us a message
            </p>

            {/* Name Input */}
            <div className="relative w-full mb-[29px]">
              <input
                type="name"
                id="name"
                placeholder=" "
                required
                className="peer bg-transparent pl-[14px] pt-[17px] pb-[11px] rounded-sm w-full border-[1.2px] border-form-dark-light_gray focus:border-gradient-orange focus:ring-1 focus:ring-gradient-orange outline-none text-white"
              />
              <label
                htmlFor="name"
                className="absolute left-[14px] top-[15px] text-gray-400 text-base transition-all duration-200 pointer-events-none
                peer-placeholder-shown:top-[15px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                peer-focus:top-[-8px] peer-focus:left-[10px] peer-focus:text-form-dark-light_gray peer-focus:text-sm
                peer-valid:top-[-8px] peer-valid:left-[10px] peer-valid:text-form-dark-light_gray peer-valid:text-sm
                bg-form-dark-bg px-2"
              >
                Name
              </label>
            </div>


            {/* Email Input */}
            <div className="relative w-full mb-[29px]">
              <input
                type="email"
                id="email"
                placeholder=" "
                required
                className="peer bg-transparent pl-[14px] pt-[17px] pb-[11px] rounded-sm w-full border-[1.2px] border-form-dark-light_gray focus:border-gradient-orange focus:ring-1 focus:ring-gradient-orange outline-none text-white"
              />
              <label
                htmlFor="email"
                className="absolute left-[14px] top-[17px] text-gray-400 text-base transition-all duration-200 pointer-events-none
                peer-placeholder-shown:top-[17px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                peer-focus:top-[-8px] peer-focus:left-[10px] peer-focus:text-form-dark-light_gray peer-focus:text-sm
                peer-valid:top-[-8px] peer-valid:left-[10px] peer-valid:text-form-dark-light_gray peer-valid:text-sm
                bg-form-dark-bg px-2"
              >
                Email
              </label>
            </div>

            

            {/* Textarea with floating label */}
            <textarea
              className="bg-transparent pl-[14px] rounded-sm h-[137px] pt-[17px] w-full box-border border-[1.2px] border-form-dark-light_gray mb-[29px]"
              placeholder="Your Message"
            ></textarea>

            <Button variant="orange" className="w-full py-3">
              Send
            </Button>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-5">
              <img src="/public/location.svg" alt="location" />
              <p className="text-white">Basataa</p>
            </div>
            <div className="flex items-center gap-4 my-[18px]">
              <img src="/public/phone.svg" alt="phone" />
              <p className="text-white">+91 9599272754</p>
            </div>
            <div className="flex items-center gap-4">
              <img src="/public/email.svg" alt="email" />
              <p className="text-white">Basataasoftware@info.com</p>
            </div>
            <div className="flex items-center gap-6 my-[18px]">
              <img
                src="/public/twitter.svg"
                alt="twitter"
                className="size-[25px] object-contain"
              />
              <img
                src="/public/gmail.svg"
                alt="gmail"
                className="size-[25px] object-contain"
              />
              <img
                src="/public/linkedin.svg"
                alt="linkedin"
                className="size-[25px] object-contain"
              />
              <img
                src="/public/facebook.svg"
                alt="facebook"
                className="size-[25px] object-contain"
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
