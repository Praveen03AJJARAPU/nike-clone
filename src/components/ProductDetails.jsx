import { useNavigate, useParams } from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import Topsection from '../components/Topsection';
import { HiStar } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi";
import Nav from '../components/Nav'
import Footer from '../sections/Footer'
import { btnStyle, favBtn, para, productsList, reviews, sizes } from '../utils/constants'
import { useState } from 'react';
import Reviews from './Reviews';
import Recomendations from './Recomendations';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { RiVerifiedBadgeFill } from "react-icons/ri";

const ProductDetails = () => {
  const [ returnOpen, isReturnOpen ] = useState(false);
  const [ imgDisplayed, setImgDisplayed ] = useState(0);
  const [ reviewsOpen, areReviewsOpen ] = useState(false);
  const [ sizeSelected, handleSizeSelection ] = useState(0);
  const [ messageView, setMessageView ] = useState('hidden');
  const navigate = useNavigate();

  const { id } = useParams();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const openModal = () => {
    if(cart.flag) {
      setMessageView((prev) => (prev = "block"));
      setInterval(() => {
        setMessageView((prev) => (prev = "hidden"));
      }, 5000);
    }
  }
    
  

  return (
    <div className="relative">
      <Topsection />
      <Nav />
      <div className="my-24">
        <div
          className={`${messageView} fixed left-1/3 bg-white z-50 top-10 shadow-lg px-3 py-3 rounded-md`}
        >
          <div className="flex items-center justify-center gap-3 md:mb-5">
            <RiVerifiedBadgeFill color="green" size={24} />
            <p>Added to cart</p>
          </div>
          <div className="hidden md:block px-4">
            <div className="flex items-start gap-5">
              <img
                className="w-32 h-36 rounded-md"
                src={productsList[id].images[0]}
                alt="product-image"
              />
              <div>
                <h2 className="font-semibold">{productsList[id].title}</h2>
                <p>Size: {sizeSelected}</p>
                <p>Quantity: 1</p>
                <button className={`${btnStyle} mt-2`} onClick={() => navigate('/cart')}>Go to cart</button>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start">
          <div className="flex flex-col-reverse justify-center items-center mx-auto md:flex-row gap-3">
            <div className="flex flex-row md:flex-col gap-2">
              {productsList[id].images.map((img, index) => (
                <div
                  className={`${
                    index == imgDisplayed ? "opacity-60" : ""
                  } w-[70px] h-[70px] mb-3`}
                  key={index}
                >
                  <img
                    src={img}
                    className="h-full w-full rounded-md z-10 object-cover"
                    alt="image-selected"
                    onMouseEnter={() => setImgDisplayed(index)}
                  />
                </div>
              ))}
            </div>
            <div className="h-[400px] md:h-[600px] w-[300px] md:w-[500px]">
              <img
                src={productsList[id].images[imgDisplayed]}
                className="h-full rounded-md w-full object-cover"
                alt="images-array"
              />
            </div>
          </div>
          <div className="px-10 lg:w-[600px] lg:h-[700px] overflow-y-scroll no-scroll  mx-auto">
            <div className="md:text-center lg:text-start">
              <p className="text-2xl font-medium">{productsList[id].title}</p>
              <p className="font-medium mb-2">Shoes</p>
              <p className="font-semibold text-lg mb-2">
                MRP : ₹{productsList[id].price}
              </p>
              <p className="text-slate-500 text-medium mb-3">
                incl. of taxes
                <br />
                (Also includes all applicable duties)
              </p>
            </div>

            <div>
              <div>
                <p
                  className={`${
                    sizeSelected == 0 ? "text-red-500" : ""
                  } font-medium`}
                >
                  {sizeSelected == 0
                    ? "Select the size please !"
                    : `Selected Size UK ${sizeSelected}`}
                </p>
                <div className="grid grid-cols-3 lg:w-[50] my-2 gap-3">
                  {sizes.map((size, index) => (
                    <button
                      id={size}
                      onClick={() => handleSizeSelection((prev) => size)}
                      className={` ${
                        sizeSelected === size ? "border-black" : ""
                      }  border-2 text-sm font-medium py-3 rounded-md text-center hover:border-black border-slate-200`}
                      key={index}
                    >
                      UK {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col lg:w-[50] my-6">
                <button
                  className={`${btnStyle} py-5 rounded-[100px]`}
                  onClick={() => {
                    dispatch(addToCart({product: productsList[id], size: sizeSelected}));
                    openModal()
                  }}
                >
                  Add to bag
                </button>
                <button className={`${favBtn}`}>Favourite</button>
              </div>
            </div>

            <p className="">{para}</p>
            <div className="dropdowns my-6">
              <div
                className="first cursor-pointer border-y-2 ease duration-200 border-slate-200 py-6"
                onClick={() => isReturnOpen((state) => !state)}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xl">Delivery & Returns</p>
                  {returnOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <div className={returnOpen ? "block text-lg mt-5" : "hidden"}>
                  <p className="mb-2">
                    All purchases are subject to delivery fees.
                  </p>
                  <li className="mb-3">Standard delivery 4-9 business days</li>
                  <p>
                    Orders are processed and delivered Monday-Friday (excluding
                    public holidays)
                  </p>
                  <p className="mt-3">Nike Members enjoy free returns.</p>
                </div>
              </div>

              <div className="second cursor-pointer border-b-2 ease duration-200 border-slate-200 py-6">
                <div
                  className="flex items-center justify-between"
                  onClick={() => areReviewsOpen((state) => !state)}
                >
                  <div className="flex items-center ">
                    <p className="text-xl mr-3">Reviews</p>
                    <div className="flex items-center mt-1">
                      <HiStar />
                      <HiStar />
                      <HiStar />
                      <HiStar />
                      <HiOutlineStar size={15} />
                    </div>
                  </div>
                  {reviewsOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <div className={reviewsOpen ? "block text-lg mt-5" : "hidden"}>
                  {reviews.map((rev, index) => (
                    <Reviews review={rev} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Recomendations id={id} />
      <Footer />
    </div>
  );
}

export default ProductDetails