import back from "../../public/background.jpg"

function Banner() {
  return (
    <div className="relative w-full h-100 md:h-[100vh] shadow-md flex flex-col justify-center items-center">
        <img src={back} className="absolute top-0 w-full h-100 md:h-[100vh]" />
        <p className="text-[50px] md:text-[100px] opacity-90 text-[#C4975C] font-serif">Coffee</p>
        <p className="text-[50px] md:text-[100px] opacity-90 text-white font-serif">Naderi</p>
    </div>
  )
}

export default Banner