import React from "react";
import styled from "styled-components";

function AddProduct(){
  return(
    <Container>
      <FormContainer>
        <h3>Add Product</h3>

        <InputContainer>
          <p>Name</p>
          <input
            type="text"
          />
        </InputContainer>
        {/* Image input */}
        <InputContainer>
          <p>Image</p>
          <input
            type="file" 
          />
        </InputContainer>
        <InputContainer>
          <p>Price</p>
          <input
            type="number"
          />
        </InputContainer>
        <InputContainer>
          <p>Rating</p>
          <input
            type="number"
          />
        </InputContainer>
        <InputContainer>
          <p>Description</p>
          <input
            type="text"
          />
        </InputContainer>

        <Button>Add Product</Button>
        <Button>Back</Button>
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
  background-image: url('/productPage.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

// const Logo = styled.div`
//   width: 200px;
//   margin-bottom: 0px;
//   img {
//     width: 100%;
//   }
// `;

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
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;

const Button = styled.button`
  width: 70%;
  height: 35px;
  background-color: #009688;
  opacity: 1;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

export default AddProduct;