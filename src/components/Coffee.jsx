import { SiCoffeescript } from "react-icons/si";

import { datas } from "../data.js";

function Coffee() {
  return (
    <div className="mt-10" id="coffee">
      <div className="flex flex-col items-center">
        <SiCoffeescript className="text-yellow-800 text-6xl" />
        <h1 className="text-shadow-sm text-yellow-700 font-serif mt-2 font-semibold text-2xl">
          COFFEE
        </h1>
      </div>
      <div className="container flex flex-col items-center gap-3 mt-10">
        {datas.coffees.map((coffee) => (
          <div
            key={coffee.id}
            className="text-white text-xl font-semibold w-70 h-15 bg-yellow-600 shadow-xl flex items-center justify-around rounded-2xl"
          >
            <p className="text-center">{coffee.name}</p>
            <p>{coffee.weight} ml</p>
            <p>{coffee.count}$</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coffee;
