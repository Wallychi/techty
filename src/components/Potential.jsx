import React from "react";

const Potential = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:justify-between lg:px-15 py-5 lg:py-25 bg-[#F0F8FF] mt-20 lg:mt-30 mb-25 lg:mb-35 font-space">
      <h1 className="lg:w-80 text-xl lg:text-3xl font-black">
        <span className="text-green-500">Unleash</span> businesses' full potential
      </h1>
      <div className="flex items-center justify-center gap-1 lg:gap-7">
        
        <div className="flex flex-col items-center gap-3 lg:gap-5">
        <div className="flex rounded-full items-center justify-center w-[70px] p-3 bg-white">
          <img src="/icons/sub_main1.png" alt="A search icon" />
        </div>
        <h1 className="text-sm lg:text-2xl font-semibold">SEO Team Expert</h1>
        <p className="w-30 text-center lg:text-left text-xs lg:w-65 text-[#4E4E4E]">
          Creating products to meet our user needs and market demands.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 lg:gap-5">
        <div className="flex rounded-full items-center justify-center w-[70px] p-3 bg-white">
          <img src="/icons/sub_main2.png" alt="A search icon" />
        </div>
        <h1 className="text-sm lg:text-2xl font-black">Strategic Planning</h1>
        <p className="w-32 text-center lg:text-left text-xs lg:w-65 text-[#4E4E4E]">
          Improving products to meet our user needs and market demands.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 lg:gap-5">
        <div
          className="flex rounded-full items-center justify-center w-[70px] p-3 bg-white">
          <img src="/icons/sub_main3.png" alt="A search icon" />
        </div>
        <h1 className="text-sm lg:text-2xl font-semibold">24/7 Live Support</h1>
        <p className="w-36 text-center lg:text-left text-xs lg:w-70 text-[#4E4E4E]">
          We are ready to help you all day and our customer sevice are
          active.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Potential;
