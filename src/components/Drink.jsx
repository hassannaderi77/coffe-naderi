import { RiDrinksFill } from "react-icons/ri";

import { datas } from "../data.js";

function Drink() {
  return (
            <div className="mt-10" id="drink">
              <div className="flex flex-col items-center">
                <RiDrinksFill className="text-yellow-800 text-6xl" />
                <h1 className="text-shadow-sm text-yellow-700 font-serif mt-2 font-semibold text-2xl">
                  HOT DRINKS
                </h1>
              </div>
              <div className="container flex flex-col items-center gap-3 mt-10">
                {datas.hotDrinks.map((hotDrink) => (
                  <div
                    key={hotDrink.id}
                    className="text-white text-xl font-semibold w-70 md:w-85 h-15 bg-yellow-600 shadow-xl flex items-center justify-around rounded-2xl"
                  >
                    <p className="text-start ml-4 md:w-50">{hotDrink.name}</p>
                    <p>{hotDrink.weight} ml</p>
                    <p>{hotDrink.count}$</p>
                  </div>
                ))}
              </div>
            </div>
  )
}

export default Drink