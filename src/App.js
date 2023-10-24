import react from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import styled from 'styled-components';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
import Checkout from './Components/Checkout';
import Address from './Components/Address';
import Payment from './Components/Payment';

function App() {
  //const [basket,setBasket] = useState([]);
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/addProduct" element={<AddProduct/>}/>
          <Route path="/payment" element={<Payment/>}/>
          {/* <Route path="/admin" element={<Admin/>}/>  */}
          <Route path='/address'element={<Address/>}/>
          <Route path="/updateProduct" element={<UpdateProduct/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: 100vw;
  `;
export default App;
