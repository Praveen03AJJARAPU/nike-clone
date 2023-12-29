import { SiNike } from "react-icons/si";
import { SlHeart,SlHandbag } from "react-icons/sl";
import { navItems } from "../utils/constants";
import Navitems from './Navitem';
import { openSearchBar } from "../../redux/slices/searchSlice";
import { SlMagnifier } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import MobileNav from "./MobileNav";
import { IoReorderThreeOutline } from "react-icons/io5";
import { openNav } from "../../redux/slices/mobileNavSlice";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";



const Nav = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const search = useSelector((state) => state.search);
  console.log(search.isOpened);
  return (
    <div className=" z-40 bg-white w-[100%]">
      <section className="mx-4 ms:mx-14">
        <div className="flex mx- justify-between items-center">
          <div>
            <SiNike size={55} />
          </div>
          <div>
            <ul className="flex">
              {navItems.map((item, index) => (
                <div key={index}>
                  <Navitems item={item} id={index} />
                </div>
              ))}
              <MobileNav />
            </ul>
          </div>
          <div className="flex gap-2 ms:gap-6 items-center">
            <div onClick={() => dispatch(openSearchBar())} className="flex items-center lg:bg-[#ece9e9] px-5 rounded-2xl">
              <input
                type="text"
                className="bg-[#ece9e9] hidden lg:block outline-none py-2 text-slate-700 text-sm"
                placeholder="Search"  
              />
              <SlMagnifier className="" size={17} />
            </div>
            {search.isOpened ? (<Searchbar />) : ''}
            <SlHeart size={24} />
            <div className="relative cursor-pointer">
              <SlHandbag size={24} onClick={() => navigate("/cart")} />
              <div
                className={`absolute ${
                  cart.items > 0 ? "block" : "hidden"
                } top-0 pointer-events-none left-3 bg-orange-500 font-thin font-mono text-white text-xs rounded-full px-[4.5px] py-[.5px]`}
              >
                <p>{cart.arr.length}</p>
              </div>
            </div>
            <IoReorderThreeOutline
              className="mt-1 block lg:hidden cursor-pointer"
              size={32}
              onClick={() => dispatch(openNav())}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nav