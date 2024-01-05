import { useNavigate } from "react-router-dom";

const Card = ({ heading, image, price }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* card */}
      <div className=" flex flex-col justify-center rounded-xl border border-slate-200 p-2">
        {/* image */}
        <div className="relative h-72 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl">
          <div className=" w-64 overflow-hidden rounded-lg max-md:w-full  ">
            <img
              src={image}
              alt="Cards"
              className=" transform rounded-lg object-cover transition-transform duration-400 hover:scale-110"
            />
          </div>
          <div className=" flex w-56 justify-start gap-1 truncate max-md:w-full max-md:justify-center ">
            <span className="w-full text-center text-sm font-medium max-md:text-lg max-md:font-semibold">
              {heading}
            </span>
          </div>
          <span className="flex self-start pl-10">Price : {price}</span>
          <button className="h-10 w-32 bg-orange-500 text-black font-bold rounded-lg">
            Add To cart
          </button>
        </div>
      </div>
    </>
  );
};
export default Card;

/* commit */
