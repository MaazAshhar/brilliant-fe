import React from "react";
import apple_logo from "../../assets/logo/apple_logo.png";
import microsoft_logo from "../../assets/logo/microsoft_logo.png";
import atlantic_logo from "../../assets/logo/the_atlantic.png";
import new_york_times_logo from "../../assets/logo/The_New_York_Times.png";
import PressContent from "./PressContent";

const pressArticle = [
  {
    id: 1,
    logo: apple_logo,
    text1: "March 2020",
    text2: "She puzzled it out",
    h1: "h-20",
    h2: "sm:h-24",
  },
  {
    id: 2,
    logo: microsoft_logo,
    text1: "March 2019",
    text2: "Microsoft, Brilliant team up to offer quantum curriculum",
    h1: "h-14",
    h2: "sm:h-24",
  },
  {
    id: 3,
    logo: atlantic_logo,
    text1: "November 2016",
    text2: "The Math Revolution",
    h1: "h-10",
    h2: "sm:h-18",
  },
  {
    id: 4,
    logo: new_york_times_logo,
    text1: "March 2016",
    text2: "Reasonable-Seeming but WRONG Approximations of &Pi;",
    h1: "h-10",
    h2: "sm:h-18",
  },
];

const Press = () => {
  return (
    <div>
      <div className="container mt-6 sm:mt-12 mb-4">
        <div className="border-b-2 border-black pb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center sm:text-left mb-4">
            Press
          </h1>
          <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 sm:pt-6 gap-6">
            {pressArticle.map((article, i) => (
              <PressContent article={article} key={i} />
            ))}
          </div>
          <p className="text-gray-500 sm:text-xl text-center sm:text-left mt-16">
            Read more articles about Brilliant{" "}
            <span className="text-gray-800 font-semibold cursor-pointer">
              <u>here</u>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Press;
