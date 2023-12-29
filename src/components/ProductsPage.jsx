import Filters from "../sections/Filters";
import ProductsSection from "../sections/ProductsSection";

const ProductsPage = () => {
  return (
    <div className="my-20 flex items-center justify-center md:px-10">
      {/* <p className="font-semibold text-slate-700">Jordan / Shoes</p> */}
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <p className="text-xl lg:text-3xl font-medium">Men's Jordan Shoes (8)</p>
        </div>
        {/* <div className="font-semibold text-xl">
          <p>Hide Filters</p>
        </div> */}

        <div className="mt-10">
        {/* <Filters /> */}        
          <ProductsSection />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage