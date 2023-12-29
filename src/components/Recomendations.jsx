import { useEffect, useRef } from "react";
import { hoverBtn, moveStyle, productsList } from "../utils/constants"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Recomendations = ({ id }) => {
  const nav = useNavigate();
  const carousel = useRef();
  const handleScroll = (direction) => {
    carousel.current.scrollBy({ left: direction * 1100, behaviour: 'smooth'  })
  }
  const onToTop = () => {window.scrollTo(0,0)}
  useEffect(() => {
    onToTop();
  },[nav])
  return (
    <div>
      <div className="flex items-center mx-10 my-5 justify-between">
        <h1 className="text-xl md:text-4xl font-bold">You might also like</h1>
        <div className="hidden md:block">
          <div className="flex items-center">
            <button
              className={`${hoverBtn} ${moveStyle}`}
              onClick={() => handleScroll(-1)}
            >
              <FaChevronLeft />
            </button>
            <button
              className={`${hoverBtn} ${moveStyle}`}
              onClick={() => handleScroll(1)}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex overflow-x-scroll no-scroll mb-24 mx-5 gap-5"
        ref={carousel}
      >
        {productsList.slice(0, productsList.length).map((item, index) => (
          <div key={index} onClick={() => nav(`/product/${index}`)}>
            <div className="w-[250px] md:w-[350px] md:h-[280px] h-[180px]">
              <img
                src={item.images[0]}
                className="object-cover h-full w-full"
                alt="shoe-image"
              />
            </div>
            <div className="mt-2">
              <p className="text-lg font-medium">{item.title}</p>
              <p className="text-slate-400 mb-2">Shoes</p>
              <p className="font-semibold  md:text-xl">MRP : ₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recomendations