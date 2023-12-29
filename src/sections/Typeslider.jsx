import { useEffect, useRef } from "react";
import { hoverBtn, moveStyle, typesSlider } from "../utils/constants"
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";


const Typeslider = () => {
  const carousel = useRef();
  const handleScroll = (direction) => {
    console.log(direction)
    carousel.current.scrollBy({ left: direction * 500, behaviour: 'smooth'  })
  }
  
  return (
    <section className="md:mx-16 mx-7 mb-16">
      <div className="hidden md:block">
        <div className="flex justify-end mb-5">
          <button
            className={`${moveStyle} ${hoverBtn}`}
            onClick={() => handleScroll(-1)}
          >
            <GrPrevious size={20} />
          </button>
          <button
            className={`${moveStyle} ${hoverBtn}`}
            onClick={() => handleScroll(1)}
          >
            <GrNext size={20} />
          </button>
        </div>
      </div>
      <div ref={carousel} className="flex no-scroll overflow-x-auto">
        {typesSlider.map((type, index) => (
          <div key={type.index} className="mr-5 relative">
            <div className=" h-[300px] w-[250px]  md:h-[600px] md:w-[500px]">
              <img
                src={type.image}
                className="w-full h-full object-cover"
                alt="sliding_image"
                loading="lazy"
              />
              <div className="absolute bottom-10 right-10 border-2 border-black px-2 rounded-3xl bg-black text-white font-medium text-xl">
                <p>{type.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Typeslider