import React from "react";
import { footer } from "../data/Data.js";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-900">
        <div className="w-10/12 m-auto">
          <div className="flex justify-between py-14 gap-8">
            {footer.map((item, index) => (
              <div className="text-gray-300 w-2/6" key={index}>
                <h1 className="text-2xl mb-5 text-white">{item.header}</h1>
                <h1>{item.content1}</h1>
                <h1>{item.content2}</h1>
                <h1>{item.content3}</h1>
                <h1>{item.content4}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
