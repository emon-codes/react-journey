import React from "react";
import useData from "../Hooks/useData";

const SectionHeading = () => {
  const {products} = useData()
  return (
    <div>
      <div>
        <div className="flex flex-col">
          <h3>
            Propulr<span className="text-yello-600 font-800 text-4xl">products</span>
          </h3>
          <p className="text-gray-400 ">Shop online for new arrivals and get free shoping!</p>
        </div>
        <div>



        </div>
      </div>

      
    </div>
  );
};

export default SectionHeading;
