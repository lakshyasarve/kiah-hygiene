import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
    <div className="h-[20rem]">
        <img className="h-full w-full object-cover object-left-top" src="https://images.unsplash.com/photo-1562572159-4efc207f5aff?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>

    <div className="textPart bg-white p-3">
        <div>
            <p className="font-bold opacity-60">UniversalOutfit</p>
            <p className="">Casual Puff Sleeves Solid Women White Top</p>
        </div>

        <div className="flex items-center space-x-2">

            <p className="font-semibold">$199</p>
            <p className="line-through opacity-50">$1999</p>
            <p className="text-green-600 font-semibold">90% off</p>

        </div>

    </div>
    </div>
  )
}

export default ProductCard
