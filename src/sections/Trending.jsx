import Products from "../components/Products";
import { hoverBtn, moveStyle, productsList, subHeadingStyle } from "../utils/constants"
import { GrNext, GrPrevious } from "react-icons/gr";
import '../index.css'
import { useRef } from "react";
const Trending = () => {
  const carousel = useRef();
  const handleScroll = (direction) => {
    carousel.current.scrollBy({ left: direction * 1100, behaviour: 'smooth'  })
  }
  return (
    <div className="md:px-16 px-7">
      <div className="flex items-center justify-between">
        <h2 className={subHeadingStyle}>Trending Now</h2>
        <div className="flex items-center gap-5">
          <div className="hidden md:block">
            <p className="pb-5">Shop</p>
          </div>
          <div className="hidden md:block">
            <div className="flex mb-5">
              <button className={`${moveStyle} ${hoverBtn}`} onClick={() => handleScroll(-1)}>
                <GrPrevious />
              </button>
              <button className={`${moveStyle} ${hoverBtn}`} onClick={() => handleScroll(1)}>
                <GrNext  />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 overflow-x-scroll no-scroll" ref={carousel}>
        {productsList.map((item) => (
          <Products {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Trending