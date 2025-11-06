import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAthletes, setIsOpenAthletes] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F7FB]/80 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto flex items-center justify-between  px-6 py-3">
          <div className="w-[169px]" />

          <div className="flex justify-center">
            <img src="/Logo.svg" alt="Logo" className="object-contain" />
          </div>

          <div className="flex gap-4">
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

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false); // click outside to close
          }}
        >
          <div className="bg-white rounded-sm shadow-lg w-[700px] p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            <h2 className="text-[24px] font-bold text-center mb-5">
              Join As a Coach
            </h2>

            <form className="flex flex-col gap-4 mt-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className=" font-medium text-[#020817]">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#3440B5]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className=" font-medium text-[#020817]">Email</label>
                  <input
                    type="email"
                    placeholder="john.doe@gmail.com"
                    className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#3440B5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className=" font-medium text-[#020817]">Phone</label>
                  <input
                    type="text"
                    placeholder="123 456 7890"
                    className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#3440B5]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-medium text-[#020817]">City</label>
                  <input
                    type="text"
                    placeholder="London"
                    className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#3440B5]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className=" font-medium text-[#020817]">Message</label>
                <textarea
                  placeholder="Tell us about your requirements..."
                  className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#3440B5]"
                ></textarea>
              </div>

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

      {isOpenAthletes && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpenAthletes(false); // click outside to close
          }}
        >
          <div className="bg-white rounded-sm shadow-lg w-[700px] p-6 relative">
            <button
              onClick={() => setIsOpenAthletes(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            <h2 className="text-[24px] font-bold text-center mb-5">
              Join As a Athletes
            </h2>

            <form className="flex flex-col gap-4 mt-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className=" font-medium text-[#020817]">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#3440B5]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className=" font-medium text-[#020817]">Email</label>
                  <input
                    type="email"
                    placeholder="john.doe@gmail.com"
                    className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#3440B5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className=" font-medium text-[#020817]">Phone</label>
                  <input
                    type="text"
                    placeholder="123 456 7890"
                    className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#3440B5]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-medium text-[#020817]">City</label>
                  <input
                    type="text"
                    placeholder="London"
                    className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#3440B5]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className=" font-medium text-[#020817]">Message</label>
                <textarea
                  placeholder="Tell us about your requirements..."
                  className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#3440B5]"
                ></textarea>
              </div>

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
    </>
  );
};

export default Header;
