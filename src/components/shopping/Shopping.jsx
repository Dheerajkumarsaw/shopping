import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const cartData = [
  {
    id: 1,
    name: "Nike Running shoe",
    price: 2990,
    img: "/nike_shoe.jpeg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Puma Running shoe",
    price: 1990,
    img: "/puma_shoes.jpeg",
    quantity: 1,
  },
];

export default function ShoppingCart() {
  const [globalTotal, setGlobalTotal] = useState(0);

  const buttonApply = {
    button1: false,
    button2: false,
    button3: false,
  };
  const [isApplied, setApplied] = useState(buttonApply);
  const navigate = useNavigate();
  function handleApplyClick(e) {
    const total = calculateTotal();
    const temp = e.target.id;
    if (temp == "b1") {
      if (Number(total) < 5999) {
        alert("Add more " + `${Number(5999 - total)}` + " ₹");
      } else {
        setApplied({
          button1: !isApplied.button1,
          button2: false,
          button3: false,
        });
      }
    }
    if (temp == "b2") {
      if (Number(total) < 5999) {
        alert("Add more " + `${Number(5999 - total)}` + " ₹");
      } else {
        setApplied({
          button3: false,
          button1: false,
          button2: !isApplied.button2,
        });
        setGlobalTotal(total - (total * 15) / 100);
      }
    }
    if (temp == "b3") {
      setApplied({
        button1: false,
        button2: false,
        button3: !isApplied.button3,
      });
      //   if (!isApplied.button) {
      setGlobalTotal(total - (total * 20) / 100);
    } else {
      //     setGlobalTotal(0);
      //   }
    }
  }
  const [cart, setCart] = useState(cartData);

  const handleIncrement = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart((cart) =>
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setGlobalTotal((t) => (t = 0));
  };

  const handleDecrement = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart((cart) =>
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    setGlobalTotal((t) => (t = 0));
  };

  function handlePlace() {
    window.location.reload;
    alert("Order placed successfully");
  }

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    setGlobalTotal((t) => (t = 0));
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity),
      0
    );
  };

  return (
    <div className="flex h-screen">
      <div className="container p-8 max-md:p-5 w-1/2">
        <h2 className="mb-4 text-lg font-semibold">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>No items here</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className=" mb-4 rounded-lg border p-4 shadow-md max-md:h-[55vh] max-md:w-full"
            >
              <div className="flex items-center justify-between max-md:flex-col">
                {/* item information */}
                <div className="">
                  <img
                    src={item.img} // Placeholder image
                    alt={item.name}
                    className="h-[180px] w-[200px] rounded-lg object-cover"
                  />
                  <div className="mt-2">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600 font-semibold">
                      Price: ₹{item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                {/* increase decrease delete buttons */}
                <div className="flex flex-col gap-2 items-center ">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="rounded-md bg-blue-500 h-8 w-8 text-xl text-white hover:bg-blue-600"
                  >
                    -
                  </button>
                  <span className="flex items-center  font-bold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="rounded-md bg-blue-500 h-8 w-8  text-white hover:bg-blue-600"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="ml-5 rounded-md bg-red-500 p-2 px-4 text-white hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
        {/* Total price */}
        <div className="text-left">
          <p className="text-lg font-semibold">
            {globalTotal == 0
              ? `Total: ₹${calculateTotal().toFixed(2)}`
              : `Total: ₹${globalTotal.toFixed(2)}`}
          </p>
        </div>
        {/* Place Order Button */}
      </div>
      {/* place order */}
      <div className="mt-8 text-center w-1/2">
        <button
          className="w-[30%] rounded-lg bg-blue-500 p-2 px-4 text-white hover:bg-blue-600 max-md:w-full"
          onClick={handlePlace}
        >
          Place Order
        </button>
        {/* <Coupon total={calculateTotal().toFixed(2)} couponCode="SUNDEAL"/>
        <Coupon total={calculateTotal().toFixed(2)} couponCode="GLOW20"/>
        <Coupon total={calculateTotal().toFixed(2)} couponCode="GRAB15"/> */}
        {/* coupon codes first */}
        <div className="availableCoupon bg-slate-300 rounded-lg p-2 m-2">
          <h2 className="flex text-start font-bold text-black">
            Available Coupons
          </h2>
          <div className=" h-36 bg-slate-500 text-black flex flex-col  font-semibold rounded-xl p-4 gap-1 m-2">
            <p className="flex  items-start">
              Shop for 5999 & Get 2 Sunscreen Free
            </p>
            <div className="coupon flex justify-between">
              <p className="coupon-code border-2 border-solid border-[#3f36be]  font-bold rounded-md p-1 bg-[#69a4b8]">
                SUNDEAL
              </p>
              <button
                className="apply font-bold"
                id="b1"
                onClick={handleApplyClick}
              >
                {isApplied.button1 ? "Applied" : "Apply"}
              </button>
            </div>
            <hr />
            <p className="flex text-start">
              Shop for ₹5999 & Get 2 Sunscreen ( Glow+ Dewy 15g & Detan + Dewy
              Sunscreen 15g ) Free | Extra prepaid orders
            </p>
          </div>
          {/* second */}
          <div className="h-36 bg-slate-500 text-black flex flex-col  font-semibold rounded-xl p-4 gap-1 m-2">
            <p className="flex  items-start">Flat 15% Off + 5% Prepaid Off</p>
            <div className="coupon flex justify-between">
              <p className="coupon-code border-2 border-solid border-[#3f36be]  font-bold rounded-md p-1 bg-[#69a4b8]">
                GLOW20
              </p>
              <button
                className="apply font-bold"
                id="b2"
                onClick={handleApplyClick}
              >
                {isApplied.button2 ? "Applied" : "Apply"}
              </button>
            </div>
            <hr />
            <p className="flex text-start">
              Shop for ₹5999 to avail this offer | Extra 5% Off on Online Orders
            </p>
          </div>
          {/* third */}
          <div className="h-36 bg-slate-500 text-black flex flex-col  font-semibold rounded-xl p-4 gap-1 m-2">
            <p className="flex  items-start">Flat 10% off + 5% Prepaid off</p>
            <div className="coupon flex justify-between">
              <p className="coupon-code border-2 border-solid border-[#3f36be]  font-bold rounded-md p-1 bg-[#69a4b8]">
                GRAB15
              </p>
              <button
                id="b3"
                className="apply font-bold "
                onClick={handleApplyClick}
              >
                {isApplied.button3 ? "Applied" : "Apply"}
              </button>
            </div>
            <hr />
            <p className="flex text-start">
              Get up to 15% off on all orders | No minimum or required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Coupon({ total, couponCode }) {
  // const obj = {
  //     "SUNDEAL" : 10000,
  //     "GLOW20" :
  // }
  return (
    <div className="h-32 bg-slate-500 text-black flex flex-col  font-semibold rounded-xl p-3 gap-1 m-5">
      <p className="flex  items-start">Add more to get 599 off</p>
      <div className="coupon flex justify-between">
        <p className="coupon-code border-2 border-solid border-[#3f36be]  font-bold rounded-md p-1 bg-[#69a4b8]">
          {couponCode}
        </p>
        <button className="apply font-bold focus:text-blue-500">Apply</button>
      </div>
      <hr />
      <p>shop for more 1000 and get 2 sunscreen glow + Dewy sunscreen 15g</p>
    </div>
  );
}
