import React from "react";
import useData from "../Hooks/useData";

const SectionHeading = ({heading, colorHeading, headingDescription}) => {
  const {products} = useData()
  return (
    <div>
      <div className="flex flex-row justify-between mx-5">
        <div className="flex flex-col gap-2">
          <h3 className="font-800 text-4xl">
            {heading}<span className="text-green-400">{colorHeading}</span>
          </h3>
          <p className="text-gray-400 ">{headingDescription}</p>
        </div>
        <div className="flex gap-2 items-center">
          {products.slice(0, 5).map((product) => (
            <div>
              <span>
                {product.categoryName}
              </span>
            </div>


          ))}


        </div>
      </div>

      
    </div>
  );
};

export default SectionHeading;
