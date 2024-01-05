import React from "react";
import Card from "./Cards/Card";
import { useNavigate } from "react-router-dom";
import store from "../Store";

function Items() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar h-10 w-full  flex items-center justify-between pl-8 pr-8 border-b-2 ">
        <p className=" text-xl font-bold">Shopping App</p>
        <button
          className=" text-xl font-bold"
          onClick={() => navigate("/cart")}
        >
          Go to Cart
        </button>
      </div>
      <div className=" relative flex gap-9 mt-3 flex-wrap">
        {store.map((item, index) => (
          <Card
            heading={item.heading}
            image={item.image}
            price={item.price}
            key={index}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Items;
