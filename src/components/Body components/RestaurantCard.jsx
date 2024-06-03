import { Link } from "react-router-dom";
import { FOOD_IMAGE } from "../../utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    areaName,
    costForTwo,
    id,
  } = resData?.info;
  return (
    <Link to={"/restaurant/" + id}>
      <div className="card w-[21rem] lg:w-72 overflow-hidden flex flex-col gap-3 cursor-pointer transition-all duration-500 hover:scale-95 my-5 rounded-md border-2 border-gray-200 shadow-xl  h-[23rem] bg-slate-50 p-4">
        <img
          src={FOOD_IMAGE + cloudinaryImageId}
          className="w-full h-44 rounded-md"
        />
        <span className="font-bold font-Poppins text-lg px-2">{name}</span>
        <span className="flex justify-between pr-5 pl-1">
          <span className="bg-green-600 px-2 flex items-center gap-1 justify-center rounded-md text-white">
            <span className="text-xl">☆</span>{" "}
            <span className="text-sm">{avgRating}</span>
          </span>
          <span className="text-sm font-semibold">{costForTwo}</span>
        </span>
        <p className="cuisines-text text-sm w-full h-5 px-2 overflow-hidden ">
          {cuisines.join(", ")}
        </p>
        <span className="flex justify-between">
          <span>📍{areaName}</span>
          <span className="px-2">⏰ {resData.info.sla.deliveryTime} mins </span>
        </span>
      </div>
    </Link>
  );
};

export default RestaurantCard;
