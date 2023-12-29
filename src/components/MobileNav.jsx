import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { closeNav } from "../../redux/slices/mobileNavSlice";
import { motion } from "framer-motion";
import { divItemStyle, itemStyle, navItems, navLinks } from "../utils/constants";
import { GrNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { closeSubMenu,openSubMenu } from "../../redux/slices/openNavMenuSlice";
import { useEffect } from "react";



const MobileNav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const subMenu = useSelector((state) => state.subMenu);
    const mobileNav = useSelector((state) => state.mobileNav);
  return (
    <motion.div className="block lg:hidden ">
      <div
        className={`fixed  ${mobileNav.isOpened ? "top-0 right-0" : "hidden"}
          z-20 bg-white h-[100vh] w-[70%] py-6 px-5 overflow-y-scroll no-scroll`}
      >
        <div className="flex justify-between font-extralight text-2xl items-center">
          {subMenu.isMenuOpened ? (
            <p
              className="cursor-pointer"
              onClick={() => {
                dispatch(closeSubMenu());
              }}
            >
              BACK
            </p>
          ) : (
            <p>MENU</p>
          )}
          <RxCross2 className="mt-2 cursor-pointer" onClick={() => dispatch(closeNav())} />
        </div>
        <div className="mt-10">
          {navItems.map((item, index) => (
            <div key={index}>
              <div
                className={`${
                  subMenu.isNavOpened ? "" : "hidden"
                } cursor-pointer`}
                onClick={() => {
                  dispatch(openSubMenu(index));
                }}
              >
                <div className={`${divItemStyle}`}>
                  <p className={`${itemStyle}`}>{item}</p>
                  <GrNext
                    size={12}
                    className={`${index > 4 ? "hidden" : ""}`}
                  />
                </div>
              </div>
              <div>
                {navLinks[index]?.links?.map((item, index) => (
                  <div
                    key={index}
                    style={{ flex: 1 }}
                    className={`${
                      subMenu.isMenuOpened && subMenu.menuID === index
                        ? "block"
                        : "hidden"
                    }`}
                  >
                    <h3 className="font-semibold mb-8 mt-4">{item.title}</h3>
                    {item.types.map((innerLinks) => (
                      <div className={`${divItemStyle} last:mb-16`}>
                        <p
                          className={`${itemStyle} pb-3`}
                          onClick={() => {
                            navigate("/products");
                            dispatch(closeNav());
                          }}
                        >
                          {innerLinks}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
export default MobileNav