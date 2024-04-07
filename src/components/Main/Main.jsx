import React from "react";
import robo from "../../assets/images/robot.jpg";
import box from "../../assets/images/box1.jpg";
const Main = () => {
  return (
    <div>
      <div className="container mt-10">
        <div className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
          <h1>
            We're building the
            <br />
            best place on Earth to learn
            <br />
            math and science
          </h1>
        </div>
        {/* <div className="">
          <div className="flex flex-col gap-y-4 sm:flex-row py-6 sm:pt-14 sm:pb-0 sm:px-16 justify-between items-center border-b-2 border-black">
            <div className="w-48">
              <img src={robo} alt="" />
            </div>
            <div className="text-center sm:text-2xl text-gray-600">
              <p>In the process, we've been happy to receive a lot of</p>
              <p>love from our users</p>
            </div>
            <div className="w-48">
              <img src={box} alt="" />
            </div>
          </div>
        </div> */}
        <div className="mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-x-8 gap-y-4 place-items-center border-b-2 border-black ">
            <div className="w-32 pl-5 md:w-48">
              <img src={robo} alt="" />
            </div>
            <div className="text-center sm:col-span-2 md:col-span-3 px-5 sm:pb-8 md:text-2xl text-gray-600">
              <p>In the process, we've been happy to receive a lot of</p>
              <p>love from our users</p>
            </div>
            <div className="w-32 pr-5 md:w-48">
              <img src={box} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
