import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAthletes, setIsOpenAthletes] = useState(false);
  const [isOpenThanks, setIsOpenThanks] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ Load SendFox script once and listen for successful submission
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.sendfox.com/js/form.js";
    script.charset = "utf-8";
    document.body.appendChild(script);

    const handleSuccess = (event) => {
      if (event.target.id === "3qeezl") {
        setTimeout(() => {
          setIsOpen(false);
          setIsOpenThanks(true);
        }, 500);
      }
    };

    document.addEventListener("sendfox:form-submitted", handleSuccess);

    return () => {
      document.removeEventListener("sendfox:form-submitted", handleSuccess);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F7FB]/80 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          {/* LEFT SIDE: Mobile logo + menu */}
          <div className="flex items-center justify-between w-full lg:hidden">
            <img
              src="/logo.png"
              alt="Logo"
              className="object-contain h-[40px] ml-2"
            />
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-[#3440B5] hover:bg-[#E0E6F8] rounded-md transition mr-2"
            >
              <Menu size={26} />
            </button>
          </div>

          {/* CENTER LOGO (Desktop only) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-[165px] object-contain"
            />
          </div>

          {/* RIGHT SIDE: Desktop Buttons */}
          <div className="hidden lg:flex gap-4 ml-auto">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#EBF0FA] font-semibold text-[#3440B5] w-[120px] h-[42px] border border-[#3440B5] rounded-[6px] hover:bg-[#E0E6F8] transition"
            >
              Coaches
            </button>
            <button
              onClick={() => setIsOpenAthletes(true)}
              className="bg-[#EBF0FA] font-semibold text-[#3440B5] w-[120px] h-[42px] border border-[#3440B5] rounded-[6px] hover:bg-[#E0E6F8] transition"
            >
              Athletes
            </button>
          </div>
        </div>
      </header>

      {/* ✅ MOBILE SIDEBAR MENU */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[60] flex"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsMenuOpen(false);
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <div className="relative bg-white w-[260px] h-full shadow-lg p-5 flex flex-col gap-6 animate-slideInLeft">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
            >
              <X size={24} />
            </button>

            <img
              src="/logo.png"
              alt="Logo"
              className="h-[40px] object-contain mt-2 mb-8 mx-auto"
            />

            <button
              onClick={() => {
                setIsOpen(true);
                setIsMenuOpen(false);
              }}
              className="bg-[#EBF0FA] font-semibold text-[#3440B5] w-full py-3 border border-[#3440B5] rounded-[6px] hover:bg-[#E0E6F8] transition"
            >
              Coaches
            </button>
            <button
              onClick={() => {
                setIsOpenAthletes(true);
                setIsMenuOpen(false);
              }}
              className="bg-[#EBF0FA] font-semibold text-[#3440B5] w-full py-3 border border-[#3440B5] rounded-[6px] hover:bg-[#E0E6F8] transition"
            >
              Athletes
            </button>
          </div>
        </div>
      )}

      {/* ✅ COACHES MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[70]"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="bg-white rounded-md shadow-lg w-[90%] max-w-[700px] p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            <h2 className="text-[24px] font-bold text-center mb-5 text-[#3440B5]">
              Join As a Coach
            </h2>

            <form
              method="post"
              action="https://sendfox.com/form/mp8yzl/3qeezl"
              className="sendfox-form flex flex-col justify-center"
              id="3qeezl"
              data-async="true"
              data-recaptcha="true"
            >
              <input
                type="text"
                id="sendfox_form_first_name"
                placeholder="First Name (optional)"
                name="first_name"
                className="block w-full mb-3 p-2 border rounded"
              />
              <input
                type="email"
                id="sendfox_form_email"
                placeholder="Email Address"
                name="email"
                required
                className="block w-full mb-3 p-2 border rounded"
              />
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="a_password"
                  tabIndex="-1"
                  autoComplete="off"
                  defaultValue=""
                />
              </div>
              <button
                type="submit"
                className="bg-[#3440B5] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              >
                Get Free Training Plan
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ✅ ATHLETES MODAL */}
      {isOpenAthletes && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[70]"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpenAthletes(false);
          }}
        >
          <div className="bg-white rounded-md shadow-lg w-[90%] max-w-[700px] p-6 relative">
            <button
              onClick={() => setIsOpenAthletes(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            <h2 className="text-[24px] font-bold text-center mb-5 text-[#3440B5]">
              Join As an Athlete
            </h2>

            <form
              className="flex flex-col gap-4 mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                setIsOpenAthletes(false);
                setIsOpenThanks(true);
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Name" placeholder="John Doe" />
                <Input
                  label="Email"
                  type="email"
                  placeholder="john.doe@gmail.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Phone" placeholder="123 456 7890" />
                <Input label="City" placeholder="London" />
              </div>

              <Textarea
                label="Message"
                placeholder="Tell us about your requirements..."
              />

              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  className="bg-[#3440B5] text-white font-semibold py-2 px-6 rounded-sm hover:bg-[#2b359a] transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ✅ THANK YOU MODAL */}
      {isOpenThanks && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[80]"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpenThanks(false);
          }}
        >
          <div className="bg-white rounded-md shadow-lg w-[90%] max-w-[500px] p-8 text-center relative animate-fadeIn">
            <button
              onClick={() => setIsOpenThanks(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            <h2 className="text-[28px] font-bold text-[#3440B5] mb-3">
              Thank You!
            </h2>

            <img
              src="/thanks.svg"
              alt="Thank you"
              className="mx-auto mb-4 w-[120px] h-[120px]"
            />

            <p className="text-gray-600 text-[16px] leading-relaxed">
              Your details have been submitted{" "}
              <span className="font-bold">successfully</span>. Our team will
              review your information and contact you shortly to help you get
              started with <span className="font-bold">TriSchedule</span>.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

/* ✅ Reusable Input and Textarea */
const Input = ({ label, type = "text", placeholder }) => (
  <div className="flex flex-col gap-1">
    <label className="font-medium text-[#020817]">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#3440B5]"
    />
  </div>
);

const Textarea = ({ label, placeholder }) => (
  <div className="flex flex-col gap-1">
    <label className="font-medium text-[#020817]">{label}</label>
    <textarea
      placeholder={placeholder}
      className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#3440B5]"
    ></textarea>
  </div>
);

export default Header;
