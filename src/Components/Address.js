import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { useState } from "react";

function Address() {

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [house, setHouse] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [{}, dispatch] = useStateValue();

  const navigate = useNavigate();
 
  const deliver = (e) => {
    e.preventDefault();

    dispatch({
      type: "SET_ADDRESS",
      item: {
        fullName,
        phone,
        house,
        street,
        city,
        province,
        country,
      },
    });

    navigate("/payment");

  };

return (
  <Container>
    <FormContainer>
      <h3>Address Details</h3>

      <InputContainer>
        <p>Full Name</p>
        <input
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          value={fullName}
        />
      </InputContainer>
      <InputContainer>
        <p>Phone Number</p>
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="number" 
          value={phone}
        />
      </InputContainer>
      <InputContainer>
        <p>House No</p>
        <input
          onChange={(e) => setHouse(e.target.value)}
          type="text"
          value={house}
        />
      </InputContainer>
      <InputContainer>
        <p>Street</p>
        { <input
          onChange={(e) => setStreet(e.target.value)}
          type="text"
          value={street}
        /> }
      </InputContainer>
      <InputContainer>
        <p>Town/City</p>
        { <input
          onChange={(e) => setCity(e.target.value)}
          type="text"
          value={city}
        /> }
      </InputContainer>
      <InputContainer>
        <p>Province</p>
        { <input
          onChange={(e) => setProvince(e.target.value)}
          type="text"
          value={province}
        /> }
      </InputContainer>
      <InputContainer>
        <p>Country</p>
        { <input
          onChange={(e) => setCountry(e.target.value)}
          type="text"
          value={country}
        /> }
      </InputContainer>
      <Button onClick={deliver}>Order To Here</Button>
    </FormContainer>
  </Container>
);
}

const Container = styled.div`
width: 100%;
min-width: 450px;
height: 100vh;
padding: 15px;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
background-color: #F5F5F5;
background-size: cover;
background-repeat: no-repeat;
`;


const FormContainer = styled.form`
border: 1px solid lightgray;
width: 600px;
height: fit-content;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 15px;
background-color: white;
opacity: 0.7;
border-radius: 30px;

h3 {
  font-size: 28px;
  font-weight: 400;
  line-height: 33px;
  align-self: flex-start;

  margin-bottom: 0px;
}
`;

const InputContainer = styled.div`
width: 100%;
padding: 0px;

p {
  font-size: 14px;
  font-weight: 600;
}

input {
  width: 95%;
  height: 33px;
  padding-left: 5px;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin-top: 1px;

  &:hover {
    border: 1px solid orange;
  }
}
`;

const Button = styled.button`
width: 70%;
height: 35px;
background-color: orange;
opacity: 1;
border: none;
outline: none;
border-radius: 10px;
margin-top: 30px;
`;


export default Address;