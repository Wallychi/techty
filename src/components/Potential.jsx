import React from "react";

const Potential = () => {
  return (
    <div className="flex items-center justify-between px-15 py-25 bg-[#F0F8FF] mt-30 mb-35 font-space">
      <h1 className="text-3xl font-bold">
        <span className="text-green-500">Unleash</span> businesses'
        <br /> full potential
      </h1>
      <div className="flex flex-col gap-5">
        <div className="flex rounded-full items-center justify-center w-[70px] p-3 bg-white">
          <img src="/icons/sub_main1.png" alt="A search icon" />
        </div>
        <h1 className="text-2xl font-semibold">SEO Team Expert</h1>
        <p className="text-[#4E4E4E]">
          Creating products to meet our user
          <br /> needs and market demands.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex rounded-full items-center justify-center w-[70px] p-3 bg-white">
          <img src="/icons/sub_main2.png" alt="A search icon" />
        </div>
        <h1 className="text-2xl font-semibold">Strategic Planning</h1>
        <p className="text-[#4E4E4E]">
          Improving products to meet our
          <br /> user needs and market demands.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div
          className="flex rounded-full items-center justify-center w-[70px] p-3
             bg-white"
        >
          <img src="/icons/sub_main3.png" alt="A search icon" />
        </div>
        <h1 className="text-2xl font-semibold">24/7 Live Support</h1>
        <p className="text-[#4E4E4E]">
          We are ready to help you all day and <br /> our customer sevice are
          active.
        </p>
      </div>
    </div>
  );
};

export default Potential;
