import React from "react";

const PressContent = ({ article }) => {
  return (
    <>
        <div className="my-6 flex flex-col sm:block items-center w-full">
          <div className="pb-6 mb-6 flex justify-center sm:block border-b border-gray-300 w-full">
            <img className={`${article.h1} ${article.h2}`} src={article.logo} alt="" />
          </div>
          <p className="sm:text-xl text-gray-500">{article.text1}</p>
          <p className="text-center sm:text-left sm:text-xl font-semibold">
            {article.text2}
          </p>
        </div>
    </>
  );
};

export default PressContent;
