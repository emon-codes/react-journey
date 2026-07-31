import React from "react";
import useData from "../../../Hooks/useData";
import SectionHeading from "../../SectionHeading";

const Hero = () => {
  const { products } = useData();
  console.log("SectionHeading Render");

  return (
    <div>
      <div className="flex flex-row flex-wrap gap-3">
        {products.map((product) => (
          <div>
            <div>
              <img
                className="w-64 h-80 shadow-md object-cover rounded-md"
                src={product.image}
                alt=""
              />
              <h1>{product.name}</h1>
              <h1>{product.categoryName}</h1>
            </div>
          </div>
        ))}
      </div>
      <div>
        <SectionHeading
          heading={"Propular"}
          colorHeading={"productss"}
          headingDescription={
            "Shop online for new arrivals and get free shoping!"
          }
        ></SectionHeading>
      </div>
    </div>
  );
};

export default Hero;
