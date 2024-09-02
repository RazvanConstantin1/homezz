import React from "react";
import { category } from "../data/Data.js";

const Category = () => {
  return (
    <div>
      <div className="w-10/12 m-auto">
        <div>
          <div className="flex flex-col sm:flex-row">
            {category.map((cat, index) => (
              <div className="m-2" key={index}>
                <div>
                  {cat.img && (
                    <div className="relative overflow-hidden rounded-3xl">
                      <img
                        className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all ease-in-out duration-300"
                        src={cat.img}
                        alt="category img"
                      />
                      <p className="absolute rounded-full rounded-s-none p-3 border-white bg-white bottom-0 left-0 capitalize">
                        {cat.name}
                      </p>
                    </div>
                  )}

                  {cat.imgs && cat.imgs.length > 0 && (
                    <div className="relative overflow-hidden rounded-3xl">
                      {cat.imgs.map((image, index) => (
                        <div
                          key={index}
                          className="relative overflow-hidden rounded-3xl mb-4"
                        >
                          <img
                            className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all ease-in-out duration-300"
                            src={image.img}
                            alt="img"
                          />
                          <p className="absolute rounded-full rounded-s-none p-3 border-white bg-white bottom-0 left-0 capitalize">
                            {image.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
