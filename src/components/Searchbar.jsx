import { motion } from 'framer-motion';
import { navVariants, productsList, searchVariants } from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { closeSearchBar } from '../../redux/slices/searchSlice';
import { SiNike } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const nav = useNavigate()
  return (
    <div
      className={`${
        search.isOpened
          ? "h-full w-full fixed top-0 left-0 z-40 backdrop-blur-md"
          : ""
      }`}
    >
      <motion.div
        variants={searchVariants}
        initial="hidden"
        whileInView="show"
        className="bg-white z-50 top-0 h-[800px] px-2 md:px-16 py-10 w-full fixed left-0 backdrop-blur-lg"
        style={{ maxHeight: search.isOpened ? "50%" : "0" }}
      >
        <div className="flex justify-between">
          <SiNike size={55} className="ms:block hidden" />
          <motion.div className="flex flex-col justify-center">
            <input
              type="text"
              className="bg-gray-200 px-5 py-3 mb-6 w-[200px] ms:w-[250px] md:w-[500px] outline-none rounded-3xl"
              placeholder="Search"
            />
            <div className="flex flex-col my-2 px-5">
              <h3 className="text-gray-600">Popular Search Terms</h3>
              {productsList.slice(0, 3).map((item) => (
                <p
                  className="text-lg font-medium text-start my-1 cursor-pointer"
                  onClick={() => {
                    nav(`/product/${item.id}`);
                    dispatch(closeSearchBar())
                  }}
                >
                  {item.title.slice(0, 12)}
                </p>
              ))}
            </div>
          </motion.div>
          <p
            className="font-semibold mt-3 text-xs md:text-base cursor-pointer"
            onClick={() => dispatch(closeSearchBar())}
          >
            Cancel
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Searchbar