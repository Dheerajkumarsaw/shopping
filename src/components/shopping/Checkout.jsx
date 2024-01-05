import { useState } from "react";
import ShoppingCart from "./Shopping";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const navigate = useNavigate();
  const handlePlaceOrder = () => {};
  return (
    <>
      <div className="navbar h-10 w-full  flex items-center justify-between pl-8 pr-8 border-b-2 ">
        <p className=" text-xl font-bold">Shopping App</p>
        <button className=" text-xl font-bold" onClick={() => navigate("/")}>
          Go to shop
        </button>
      </div>
      <div className="container mx-auto p-8 max-md:p-0">
        <h2 className=" ml-4 mt-4 text-2xl font-bold">Your Cart</h2>
        <ShoppingCart />
      </div>
    </>
  );
}

export default CheckoutPage;
