
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <>

    <Routes>
      <Route path='/*' element={<CustomerRouters></CustomerRouters>}></Route>
    </Routes>
      
    </>
  );
}

export default App;
