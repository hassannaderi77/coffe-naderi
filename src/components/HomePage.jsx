import Banner from "./Banner";
import Navbar from "./Navbar";

import Coffee from "./Coffee.jsx";
import Dessert from "./Dessert.jsx";
import Drink from "./Drink.jsx";
import Footer from "./Footer.jsx";

function HomePage() {
  return (
    <div className="w-[100%]">
      <Navbar />
      <Banner />
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start gap-10">
        <Coffee />
        <Dessert />
        <Drink />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
