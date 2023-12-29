import { useDispatch, useSelector } from 'react-redux';
import {closeMenu, openMenu} from '../../redux/slices/navSlice.js'
import { navLinks, navVariants } from '../utils/constants'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react';

const Navitems = ({ item, id }) => {

  const dispatch = useDispatch();
  const nav = useSelector((state) => state.nav);
  const megaMenuRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    const megaMenuElement = megaMenuRef.current;

    if (megaMenuElement) {
      megaMenuElement.addEventListener('mouseenter', () => {
        // Cancel the closing action when the mouse enters the mega menu
        clearTimeout(closeMenuTimeout);
      });

      megaMenuElement.addEventListener('mouseleave', () => {
        // Trigger the closing action when the mouse leaves the mega menu
        dispatch(closeMenu());
      })
      return () => {
        if (megaMenuElement) {
          megaMenuElement.removeEventListener('mouseenter', () => {});
          megaMenuElement.removeEventListener('mouseleave', () => {});
        }
      };

  }},[megaMenuRef, dispatch])
  

  let closeMenuTimeout;
  return (
    <div className="hidden lg:block">
      <div
        className="mx-4 text-sm lg:text-base relative navItem font-semibold"
        onMouseEnter={() => {
          if (id !== 5 && id !== 6) {
            dispatch(openMenu(id));
          }
        }}
        onMouseLeave={() => {
          if (id !== 5 && id !== 6) {
            dispatch(closeMenu());
          }
        }}
      >
        <p>{item}</p>
      </div>

      <motion.div
        ref={megaMenuRef}
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`text-black bg-white flex absolute top-[93px] left-0 w-[100%] transition-all duration-500 ease-in-out`}
        style={{
          flexDirection: "column",
          maxHeight: nav.isOpened && id === nav.enterNum.payload ? "45%" : "0",
          overflow: "hidden",
        }}
        onMouseLeave={() => {
          // Delay the closing action
          closeMenuTimeout = setTimeout(() => {
            if (id !== 5 && id !== 6) {
              dispatch(closeMenu());
            }
          }, 10);
        }}
        onMouseEnter={() => {
          if (id !== 5 && id !== 6) {
            dispatch(openMenu(id));
          }
        }}
      >
        <div className="flex flex-wrap justify-around mx-20 my-10">
          {navLinks[id]?.links?.map((item, index) => (
            <div key={index} style={{ flex: 1 }}>
              <h3 className="font-semibold mb-3">{item.title}</h3>
              {item.types.map((innerLinks) => (
                <p
                  className="mb-2 text-slate-500 font-normal text-sm hover:text-black hover:font-semibold duration-300 ease text-md cursor-pointer"
                  onClick={() => {
                    navigate("/products");
                    dispatch(closeMenu());
                  }}
                >
                  {innerLinks}
                </p>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Navitems