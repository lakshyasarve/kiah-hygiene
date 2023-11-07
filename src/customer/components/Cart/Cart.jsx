import CartItem from "./CartItem"

const Cart = () => {
  return (
    <div>

      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
        {[1,1,1,1].map(()=><CartItem key=""/>)}
        </div>

      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
        <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                    <span>Price</span>
                    <span>$4556</span>
                </div>
                <div className="flex justify-between pt-3">
                    <span>Discount</span>
                    <span className="text-green-600">-$4556</span>
                </div>
                <div className="flex justify-between pt-3">
                    <span>Delivery Charges</span>
                    <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3">
                    <span>Total Amount</span>
                    <span className="text-green-600">$4556</span>
                </div>
            </div>

            <button>Checkout</button>

            </div>  
      </div>  

      </div>  

      
    </div>
  )
}

export default Cart
