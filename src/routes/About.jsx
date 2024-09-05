import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full p-12 flex flex-col items-center justify-center gap-8">
      <h1 className="font-bold text-3xl">Page in progress...</h1>
      <button>
        <Link
          to={"/"}
          className="text-white common-hover text-2xl sm:text-4xl ml-4 px-7 py-2 !rounded-3xl"
        >
          Go back Home
        </Link>
      </button>
    </div>
  );
};

export default About;
