import React from "react";
import people from "../../assets/images/people.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from "../Shared/Button";
import anime from "../../assets/images/anime-character.png";
import Review from "./Review";

const buttonItem = [
  {
    id: 1,
    textColor: "black",
    bgColor: "bg-gray-100",
    text: "ALL",
  },
  {
    id: 2,
    textColor: "black",
    bgColor: "bg-gray-100",
    text: "STUDENTS",
  },
  {
    id: 3,
    textColor: "black",
    bgColor: "bg-gray-100",
    text: "TEACHERS",
  },
  {
    id: 4,
    textColor: "black",
    bgColor: "bg-blue-200",
    text: "PROFESSIONALS",
  },
  {
    id: 5,
    textColor: "black",
    bgColor: "bg-gray-100",
    text: "PARENTS",
  },
  {
    id: 6,
    textColor: "black",
    bgColor: "bg-gray-100",
    text: "LIFE-LONG LEARNERS",
  },
];

const Reviews =[
    {
        id:1,
        name:"Jacob Snider",
        review:"Throught its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I know feel confident approaching both technical job interviews and real world problem solving situations.",
        category:"PROFESSIONALS"
    },
    {
        id:2,
        name:"Banjo Bulldog",
        review:"As a chemical engineer, I found this app to be an awesome teaching tool and would recommend to anyone interested in STEM",
        category:"PROFESSIONALS"
    },
    {
        id:3,
        name:"Frank Magnotti",
        review:"I've been out of practice as an electrical engineer ever since switching to product management. Brilliant helps me get back up to speed on engineering, mathematics, and computer science -- I love it!!!",
        category:"PROFESSIONALS"
    },
    {
        id:4,
        name:"startupper7777",
        review:"If you want to learn new things quickly and really understand the basic concepts, this is for you! I am an entrepreneur, needing to understand the basics of a lot of subjects at the same time and this is ideal for doing just that",
        category:"PROFESSIONALS"
    },
    {
        id:5,
        name:"Viv W.",
        review:"This app is both super aesthetically and functionally pleasing and incredibly fun. I'm an engineer and like to stay fresh on a few skills that are a bit outside of my everyday use in my current job. This really hits the core of a concept and allows you to feel accomplished by actually learning and passing quizzes.",
        category:"PROFESSIONALS"
    },
    {
        id:6,
        name:"Kem Andrsn",
        review:"It's great for learning and sharpening skills. This app has been helpful with my performance at work and I feel more mentally active than before. Thank you so much devs.",
        category:"PROFESSIONALS"
    },
];

const UserReviews = () => {
  return (
    <div>
      <div className="container mt-6 sm:mt-12 mb-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-x-14 border-b-2 border-black">
          {/* first row */}
          <div className="sm:pt-12 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              User reviews
            </h1>
            <p className="text-sm sm:text-xl">
              Over 50,000 5-star reviews in the App Store and Play Store
            </p>
          </div>
          <div className="sm:col-span-1 md:col-span-2">
            <img className="w-full h-[250px]" src={people} alt="" />
          </div>
          {/* second row */}
          <div className=" w-3/4 sm:w-full h-[50px] border border-black rounded-md flex items-center group">
            <div className="h-full w-[80%] border-r border-gray-300 flex items-center group-hover:cursor-pointer">
              <p className="pl-4 uppercase">Featured</p>
            </div>
            <div className="w-[20%] h-full text-2xl flex items-center justify-center group-hover:cursor-pointer">
              <IoMdArrowDropdown className="group-hover:rotate-180 duration-300" />
            </div>
          </div>
          <div className="sm:col-span-1 md:col-span-2 flex flex-wrap gap-3 border-b border-gray-300 pb-8">
            {buttonItem.map((item) => (
              <Button
                key={item.id}
                text={item.text}
                textColor={item.textColor}
                bgColor={item.bgColor}
                active={item.active}
                activeBgColor={item.activeBgColor}
              />
            ))}
          </div>
          {/* third row */}
          <div className="w-full hidden sm:block pt-8">
            <img className="h-full" src={anime} alt="" />
          </div>
          <div className="sm:col-span-1 md:col-span-2 pt-8">
            <Review reviews={Reviews} />
            <div className="text-center sm:text-left pb-10 sm:pb-20">
            <span>&lt; 1 of 2 &gt;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
