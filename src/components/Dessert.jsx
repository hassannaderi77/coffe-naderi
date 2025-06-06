import { GiCakeSlice } from "react-icons/gi";

import { datas } from "../data.js";

function Dessert() {
  return (
        <div className="mt-10" id="desert">
          <div className="flex flex-col items-center">
            <GiCakeSlice className="text-yellow-800 text-6xl" />
            <h1 className="text-shadow-sm text-yellow-700 font-serif mt-2 font-semibold text-2xl">
              DESSERTS
            </h1>
          </div>
          <div className="container flex flex-col items-center gap-3 mt-10">
            {datas.desserts.map((dessert) => (
              <div
                key={dessert.id}
                className="text-white text-xl font-semibold w-70 h-15 bg-yellow-600 shadow-xl flex items-center justify-around rounded-2xl"
              >
                <p className="text-center">{dessert.name}</p>
                <p>{dessert.weight} ml</p>
                <p>{dessert.count}$</p>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Dessert