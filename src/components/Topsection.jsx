import { SiJordan } from "react-icons/si";
import { topItems } from "../utils/constants";


const Topsection = () => {
  return (
    <section className="hidden md:block" >
      <div className="bg-[#f5f5f5] flex justify-between px-14 py-2">
        <div>
          <SiJordan size={21} />
        </div>
        <div>
          <ul className="flex ">
            {topItems.map((item, index) => (
              <div className="flex items-center" key={index}>
              <li className="text-[12px] text-black font-semibold  cursor-pointer px-5" key={index}>
                {item}
              </li>
              <div className='h-3 rounded-xl w-[1px] bg-black'></div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Topsection