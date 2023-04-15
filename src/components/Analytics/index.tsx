import React from "react";
import { Images } from "../../assets";

type Props = {};

const Analytics = (props: Props) => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-screen-lg mx-auto grid md:grid-cols-2">
        <img
          src={Images.laptop}
          alt="laptop"
          className="w-[500px] mx-auto my-4"
        />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            Data analytics dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            voluptas quos impedit incidunt, officia sunt vero at natus, porro
            praesentium consectetur repellendus, nostrum ratione optio ut. Quo
            voluptate accusamus minima?
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
