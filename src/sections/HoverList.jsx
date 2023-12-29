import { closeList, openList, mobileCloseList, mobileOpenList } from "../../redux/slices/hoverList";
import { lists, navVariants } from "../utils/constants"
import { useSelector, useDispatch } from 'react-redux';

const HoverList = () => {
    const list = useSelector((state) => state.list);
    const dispatch = useDispatch();
    
  return (
    <div
      className="flex flex-col ms:flex-row ms:px-1 ms:text-xs md:text-base  md:px-3 justify-evenly md:gap-16 my-16"
      onMouseEnter={() => dispatch(openList())}
      onMouseLeave={() => dispatch(closeList())}
    >
      {lists.map((item, index) => (
        <div key={index} className="ml-4 ms:ml-0">
          <div
            className="flex font-medium gap-2 cursor-pointer"
            onClick={() => dispatch(mobileOpenList(index))}
          >
            <p className="mb-5">{item.title}</p>
            <span>+</span>
          </div>
          <div className={`${list.clickOpen && index == list.openList ? 'block':'hidden'}`} key={index}>
            {item.productsArray.map((product, index) => (
              <p className="mb-4 text-sm text-slate-400" key={index}>
                {product}
              </p>
            ))}
          </div>
          <div className="hidden ms:block">
            <div className="hidden ms:block">
              {item.productsArray.slice(0, 4).map((product, index) => (
                <p className="mb-4" key={index}>
                  {product}
                </p>
              ))}
              <div className={`${list.isOpened ? "ms:block" : "ms:hidden"}`}>
                {item.productsArray.slice(5, 8).map((product, index) => (
                  <p className={`mb-4`} key={index}>
                    {product}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HoverList