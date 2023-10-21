import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


function SignUp() {
  return(
<Container>
          
          <FormContainer>
            <h3>Create Account</h3>
            <InputContainer>
              <p>Your Name</p>
              <input type="text"
              placeholder='First and Last Name'
              />
            </InputContainer>
            <InputContainer>
              <p>Email</p>
              <input type="email"
              placeholder='example@gmail.com'
              />
            </InputContainer>
            <InputContainer>
              <p>Phone Number</p>
              <input type="phone"
              placeholder='+xx xx xxx xxxx'
              />
            </InputContainer>
            <InputContainer>
              <p>Enter Password</p>
              <input type="password"
              placeholder='********'
              />
            </InputContainer>
            <SignUpButton>Continue</SignUpButton>
            <InfoText>
            By creating an account, you agree to Elegant’s 
            <span>Terms & Conditions</span> and 
            <span>Privacy Policy</span>.
            </InfoText>
            <InfoText>
            Already You Have Elegant Account? <Link to="/login">Sign In</Link>
            </InfoText>
          </FormContainer>
          <FormContainer1>
          <Logo>
            <img src="./elegantlogo.png" alt=""/>
          </Logo>
          </FormContainer1>
         

        </Container>
  );  
}
const Container = styled.div`
  width: 100%;
  min-width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  background-image: url('/Artboard.png');
  background-size: cover;
  background-repeat: no-repeat;
  `;
  
const Logo = styled.div`
  width: 100px;
  margin-bottom: 0px;
  img(
    width: 50%;
  )
  `;

const FormContainer = styled.form`
border: 1px solid lightgray;
width: 50%;
height: 600px;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
background-color: white;
opacity: 0.6;
border-radius: 30px;
margin-top: 30px;


h3{
  font-size: 20px;
  font-weight: 700;
  line-height: 33px;
  align-self: flex-start;
  margin-bottom: 5px;
  margin-left: 10px;

}
`;

const InputContainer = styled.div`
width: 100%;
padding: 5px;
margin-left: 20px;


p{
  font-size: 14px;
  font-weight: 600;
}
input{
  width: 95%;
  height: 33px;
  padding-left: 5px;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin-top: 2px;

  &:focus{
    otline: none;
  }

  &:hover{
   border: 1px solid purple;
  }

}
`;

const SignUpButton = styled.button`
width: 70%;
height: 35px;
background-color: yellow;
border: none;
otline: none;
border-radius: 12px;
margin-top: 20px;

`;



const InfoText = styled.p`
font-size: 12px;
font-weight: 600;
width: 100%;
word-wrap: normal;
word-break: normal;
margin-top: 10px;
margin-left: 20px;
alignment: center;


span{
  color: blue;
}
`;

const FormContainer1 = styled.form`
border: 1px solid lightgray;
width: 100%;
height: 80px;
display: flex;
flex-direction: row;
align-items: center;
padding: 20px;
background-color: white;
margin-top: 60px;


`;


export default SignUp;