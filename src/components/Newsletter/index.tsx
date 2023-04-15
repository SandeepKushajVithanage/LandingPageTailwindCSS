import React from "react";

type Props = {};

const Newsletter = (props: Props) => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-screen-lg mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-3 flex w-full rounded-md text-black"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium sm:ml-4 my-6 mx-auto py-3 text-black">
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{" "}
            <a href="#" className="text-[#00df9a]">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
