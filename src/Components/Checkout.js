import React from "react";
import { useStateValue } from '../StateProvider';
import styled from "styled-components";
import NavBar from "./NavBar";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";


function Checkout(){

  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const removeFromBasket = (e, id) => {
    e.preventDefault();

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  console.log("checkout >>>>",basket);
  return(
    <Container>
      <NavBar />
      <Main>
        <ShoppingCart>
          <h2>Shopping Cart</h2>
          {basket?.map((product) => (
          <Product>
              <Image>
                <img src= {product.image} />
              </Image>
              <Description>
                <h4>{product.title}</h4>

                <p>Rs {product.price}</p>

                <button onClick={(e) => removeFromBasket(e, product.id)}>
                  Remove
                </button>
              </Description>
            </Product>
          ))}
        </ShoppingCart>
        <Subtotal>
        <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal ( {basket.length} items ) : <strong> {value}</strong>
                </p>
                <small>
                  <input type="checkbox" />
                  <span>This order contains a gift.</span>
                </small>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={"Rs "}
          /> <button onClick={() => navigate("/address")}>
          Proceed to Checkout
        </button>
        </Subtotal>
      </Main>
    </Container>
  );
}

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
padding: 0px;
background-color: rgb(234,237,237);
`;

const Main = styled.div`
  display: flex;
  padding: 15px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const ShoppingCart = styled.div`
  padding: 15px;
  background-color: #fff;
  flex: 0.7;

  @media only screen and (max-width: 1200px) {
    flex: none;
  }

  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;
const Subtotal = styled.div`
  flex: 0.3;
  background-color: #fff;
  margin-left: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    flex: none;
    margin-top: 20px;
  }
  p {
    font-size: 20px;
  }

  small {
    display: flex;
    align-items: center;
    margin-top: 10px;

    span {
      margin-left: 10px;
    }
  }

  button {
    width: 65%;
    height: 33px;
    margin-top: 20px;
    background-color: #FFCA28;
    color: white;
    font-weight: 800;
    border: none;
    outline: none;

    border-radius: 8px;
  }
`;

const Product = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  flex: 0.2;
  img {
    width: 100%;
  }
`;
const Description = styled.div`
  flex: 0.7;
  margin-left: 15px;

  h4 {
    font-weight: 600;
    font-size: 18px;
  }

  p {
    font-weight: 600;
    margin-top: 10px;
    color: #E91E63;
    font-weight: 1000;
  }

  button {
    background-color: transparent;
    color: #009688;
    font-weight: 1000;
    border: none;
    outline: none;
    margin-top: 10px;
    cursor: pointer;
    left-align: 0px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export default Checkout;