import { useNavigate } from "react-router-dom"
import { productsList } from "../utils/constants"


const ProductsSection = () => {
    const nav = useNavigate();
    const routeToProduct = (id) => {
        nav(`/product/${id}`)
    }
  return (
    <div className="flex justify-center flex-wrap gap-6">
        {
            productsList.map((product,id) => (
                <div key={id} className="cursor-pointer text-sm md:text-lg" onClick={() => routeToProduct(id)}>
                    <div className="w-[240px] h-[200px] md:w-[380px] md:h-[350px] mb-2">
                    <img src={product.images[0]} className="object-cover h-full w-full" alt="product_image" />
                    </div>
                    <p className="font-semibold ">{product.title}</p>
                    <div className="text-slate-500 ">
                    <p>Men's Shoes</p>
                    <p>1 color</p>
                    </div>
                    <p className="font-semibold mt-2">MRP : ₹ {product.price}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ProductsSection