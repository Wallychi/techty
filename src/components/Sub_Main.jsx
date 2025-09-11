import React, { useState } from "react";
import Button from "./Button";

const Sub_Main = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  return (
    <section className="flex flex-col font-space w-full">
      <div className="flex items-center justify-center py-25">
        <p className="text-center text-4xl lg:text-5xl font-extrabold">
          Empower your business with cutting-edge <span className="text-[#28D08A]">solutions</span></p>
      </div>
      <div className="flex flex-col lg:flex-row mx-5 lg:mx-15 lg:border-b-1 lg:border-b-gray-300 mb-10 gap-2">
        <div
          onClick={() => {
            setFirst(true), setSecond(false), setThird(false);
          }}
          className={
            first
              ? "flex items-center gap-3 pb-7 cursor-pointer border-b-3 border-[#28D08A]"
              : "flex items-center gap-3 pb-7 cursor-pointer"
          }
        >
          <h1 className={
            first 
            ? "font-extrabold text-6xl text-[#28D08A]"
            : "font-extrabold text-6xl"
          }>01</h1>
          <div className="flex flex-col gap-2 ">
            <p className="font-semibold text-lg">Collect Ideas</p>
            <p>Creating or improving products to meet our user needs.</p>
          </div>
        </div>
        <div
          onClick={() => {
            setFirst(false), setSecond(true), setThird(false);
          }}
          className={
            second
              ? "flex items-center gap-3 pb-7 cursor-pointer border-b-3 border-[#28D08A]"
              : "flex items-center gap-3 pb-7 cursor-pointer"
          }
        >
          <h1 className={
            second 
            ? "font-extrabold text-6xl text-[#28D08A]"
            : "font-extrabold text-6xl"
          }>02</h1>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-lg">Data Analysis</p>
            <p>Creating or improving products to meet our user needs.</p>
          </div>
        </div>
        <div
          onClick={() => {
            setFirst(false), setSecond(false), setThird(true);
          }}
          className={
            third
              ? "flex items-center gap-3 pb-7 cursor-pointer border-b-3 border-[#28D08A]"
              : "flex items-center gap-3 pb-7 cursor-pointer"
          }
        >
          <h1 className={
            third 
            ? "font-extrabold text-6xl text-[#28D08A]"
            : "font-extrabold text-6xl"
          }>03</h1>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-lg">Analyze Products</p>
            <p>Creating or improving products to meet our user needs.</p>
          </div>
        </div>
      </div>
      <div>
        {first ? (
          <div className="flex flex-col lg:flex-row items-center mx-5 lg:mx-15 gap-10">
            <img
              src="/images/Frame 29.png"
              alt="image of a phone and laptop"
              className="w-[550px]"
            />
            <div className="flex flex-col gap-7">
              <h1 className="text-center lg:text-left text-3xl font-semibold">Collect Ideas</h1>
              <p className="text-md text-[#4E4E4E] text-justify">
                With our Techty company, you can create landing pages that
                convert more <br /> visitors than any other website. You can
                easily create a page using a variety <br /> of unique blocks.
              </p>
              <div className="flex flex-col gap-3 ">
                <div className="flex items-center gap-2">
                  <img src="/icons/checkbox-circle-line.png" />
                  <p className="text-xl">
                    We collect ideas from different design inspirations,
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/icons/checkbox-circle-line.png" />
                  <p className="text-lg lg:text-xl">
                    Analysis data for any kind of corrections.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/icons/checkbox-circle-line.png" />
                  <p className="text-lg lg:text-xl">
                    Finalize the product for the production to be done.
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button
                  name="Request a Free Demo"
                  style={"bg-black text-white px-5 lg:hover:bg-green-500"}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {second ? (
          <div className="flex flex-col lg:flex-row items-center mx-5 lg:mx-15 mb-10 gap-10">
            <img
              src="/images/data_analysis.JPG"
              alt="image of pencil, paper and book"
              className="w-[550px]"
            />
            <div className="flex flex-col gap-7">
              <h1 className="text-center lg:text-left text-3xl font-semibold">Data Analysis</h1>
              <p className="text-md text-[#4E4E4E] text-justify">
                With our Techty company, you can create landing pages that
                convert more visitors than any other website. You can
                easily create a page using a variety of unique blocks.
              </p>
              <div className="flex flex-col gap-2 lg:gap-3 ">
                <div className="flex items-center gap-2">
                  <img src="/icons/checkbox-circle-line.png" />
                  <p className="text-xl lg:text-xl">
                    We collect ideas from different design inspirations,
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/icons/checkbox-circle-line.png" />
                  <p className="text-lg lg:text-xl">
                    Analysis data for any kind of corrections.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/icons/checkbox-circle-line.png" />
                  <p className="text-lg lg:text-xl">
                    Finalize the product for the production to be done.
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button
                  name="Request a Free Demo"
                  style={"bg-black text-white px-5 lg:hover:bg-green-500"}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {third ? (
          <div className="flex flex-col lg:flex-row items-center  mx-5 lg:mx-15 mb-10 gap-10">
            <img
              src="/images/finalize_project.JPG"
              alt="image of 8 colored papers"
              className="w-[550px]"
            />
            <div className="flex flex-col gap-5 lg:gap-7">
              <h1 className="text-center lg:text-left text-3xl font-semibold">Finalize Product</h1>
              <p className="text-md text-[#4E4E4E] text-justify">
                With our Techty company, you can create landing pages that
                convert more visitors than any other website. You can
                easily create a page using a variety of unique blocks.
              </p>
              <div className="flex flex-col gap-3 ">
                <div className="flex items-center gap-2">
                  <img src="/icons/checkbox-circle-line.png" />
                  <p className="text-lg lg:text-xl">
                    We collect ideas from different design inspirations,
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/icons/checkbox-circle-line.png" />
                  <p className=" text-lg lg:text-xl">
                    Analysis data for any kind of corrections.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/icons/checkbox-circle-line.png" />
                  <p className="text-lg lg:text-xl">
                    Finalize the product for the production to be done.
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button
                  name="Request a Free Demo"
                  style={"bg-black text-white px-5 lg:hover:bg-green-500"}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

    </section>
  );
};

export default Sub_Main;
