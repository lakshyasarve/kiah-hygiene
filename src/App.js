
import './App.css';
import Navigation from './customer/components/Navigation/Navigation'
import Checkout from './customer/components/Checkout/Checkout'
import Footer from './customer/components/Footer/Footer'
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';

function App() {
  return (
    <>
      <div>
        <Navigation></Navigation>
      </div>
      <div>
        {/* <Checkout></Checkout> */}
        {/* <Order></Order> */}
        <OrderDetails></OrderDetails>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
