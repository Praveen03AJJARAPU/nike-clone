import { useDispatch, useSelector } from "react-redux";
import Topsection from "../components/Topsection";
import Nav from "../components/Nav";
import { SlHeart} from "react-icons/sl";
import { GrTrash } from "react-icons/gr";
import { decrement } from "../../redux/slices/cartSlice";
import { TbMoodSadDizzy } from "react-icons/tb";
import { btnStyle } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import Footer from '../sections/Footer'

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    var size = 6;
    const dispatch = useDispatch();
    const nav = useNavigate();
    console.log(cart);

  return (
    <div>
      <Topsection />
      <Nav />
      {cart.arr.length > 0 ? (
        <div className="lg:mx-44  my-5 lg:mt-20">
          <div className="flex flex-col lg:flex-row lg:items-start md:gap-32">
            <div>
              <h3 className="text-3xl mb-8">Bag</h3>
              {cart.arr.map((item) => (
                <div className="flex mx-2 ms:flex-row flex-col ms:justify-between border-b-2 lg:border-b-2 py-7 gap-5 lg:gap-24">
                  <div className="flex gap-2 md:gap-6">
                    {/* h-[70px] w-[80px] */}
                    <div className=" h-full w-[100px] lg:h-[150px] lg:w-[150px]">
                      <img
                        src={item.product.images[0]}
                        className="h-full w-full object-cover"
                        alt="product-image"
                      />
                    </div>
                    <div>
                      <p className="lg:text-lg">{item.product.title}</p>
                      <p className="lg:text-md text-slate-400 lg:my-">
                        Men's shoes
                      </p>
                      <div className="flex flex-col ms:flex-row md:gap-4 text-slate-700">
                        <div className="flex gap-2">
                          <p>Size:   </p>
                          <p>{item.size}</p>
                        </div>
                        <div className="flex">
                          <p>Quantity:</p>
                          <select>
                            {Array.from({ length: 10 }, (_, index) => (
                              <option
                                value={item.product.quantity}
                                className="border-b-[1px] border-slate-400"
                              >
                                {(index += 1)}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="flex items-center mt-7 lg:mt-10 gap-4">
                        <SlHeart size={20} />
                        <GrTrash
                          size={20}
                          onClick={() => dispatch(decrement(item?.id))}
                          className="cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="font-semibold">
                    MRP: {item.product.price.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
            <div className="mx-3">
              <h2 className="mb-8 text-3xl">Summary</h2>
              <div className="text-base my-4">
                <div className="flex items-center lg:gap-6 justify-between">
                  <p className="my-1">Subtotal</p>
                  <p className="my-1">₹ {cart.subTotal}</p>
                </div>
                <div className="flex items-center lg:gap-6 justify-between">
                  <p>Estimated Delivery <span className="ms:block hidden"> & Handling </span></p>
                  <p>₹ 1250</p>
                </div>
              </div>
              <div className="flex justify-between border-y-[1px] py-4 border-slate-400">
                <p>Total</p>
                <p>₹ {cart.subTotal + 1250}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[70vh] flex justify-center">
          <div className="flex gap-5 items-center justify-center">
            <TbMoodSadDizzy size={100} className="text-slate-400" />
            <div>
              <p className="text-2xl font-sans mb-2">Cart is empty</p>
              <button
                className={`${btnStyle} text-xs`}
                onClick={() => nav("/products")}
              >
                Go to shopping
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Cart;