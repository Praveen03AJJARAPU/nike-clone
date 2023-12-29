import { useNavigate } from "react-router-dom";


const Products = ({ images, price, title, id }) => {
  const nav = useNavigate();
  return (
    <div>
      <div className="w-[250px] h-[200px] cursor-pointer md:w-[500px] md:h-[300px]" onClick={() => nav(`/product/${id - 1}`)}>
        <img src={images[0]} loading="lazy" alt="product-first-pic" className="w-full h-full object-cover" />
      </div>
      <div className="mt-3">
        <p className="text-md ">{title}</p>
        {/* <p className="text-sm text-slate-500">{categoryPara}</p> */}
        <p>Price: ₹ {price}</p>
      </div>
    </div>
  );
}

export default Products