import React from "react";
import styled from "styled-components";
//import { StateProvider } from "./StateProvider";
import { useStateValue } from '../StateProvider';
import { useNavigate } from "react-router-dom";

function NavBar() {

  const [{basket}]= useStateValue();
  const navigate = useNavigate();
  return (
    <ContainerMain>
      <Container>
        <Inner>
          <Logo>
            <img src="./elegantlogo.png" alt=""/>
          </Logo>
          <Logo1>
          <img src="./Text.png" alt=""/>
          </Logo1>
          <SearchBar>
            <input type="text" placeholder=' Search...'/>
            <SearchIcon>
              <img src="searchIcon.png" alt="" />
            </SearchIcon>
          </SearchBar>
          <SignInButton>Sign In</SignInButton>
          <RightContainer></RightContainer>
        </Inner>
      </Container>
      <ItemBar>
          <ItemBarButton>
            <p>Eye Wear</p>
          </ItemBarButton>
          <ItemBarButton>
            <p>Earrings</p>
          </ItemBarButton>
          <ItemBarButton>
            <p>Neckless</p>
          </ItemBarButton>
          <ItemBarButton>
            <p>Bracelets</p> 
          </ItemBarButton>
          <ItemBarButton>
            <p>Belts</p>
          </ItemBarButton>
          <BasketButton onClick={() => navigate('/checkout')}>
            <h3>Cart Has</h3>
            <p>{basket?.length}</p>
            <h3>Items</h3>
            <img src="./Cart.png" alt=""/>
          </BasketButton>
      </ItemBar>
    </ContainerMain>
  );

  
}

//Main Page
const ContainerMain = styled.div`
width: 100%;
min-width: 400px;
height: 120px;
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
`;

//Top Box
const Container = styled.div`
width: 100%;
height: 60px;
Background-color: #EDE51E;
display: flex;
align-items: center;
position: relative;
`;

const Inner = styled.div`
width: 100%;
display: flex;
align-items: center;
`;
const Logo = styled.div`
margin-left: 20px;
crusor: pointer;
img {
  width: 100px;
  margin-top: 10px;
}
`;
const SearchBar = styled.div`
height: 35px;
flex: 1;
margin:0px 300px 0px 90px;
display: flex;
align-items: center;

input{
flex: 1;
width: 100%;
height: 100%;
border: none;
border-radius: 5px 0px 0px 5px;
}
`;
const RightContainer = styled.div`

`;

const SearchIcon  = styled.div`
background-color: red;
height:100%;
width:40px;
display: flex;
align-items: center;
justify-content: center;

img {
width:22px;
}
`;

const SignInButton = styled.button`
width: 5%;
height: 35px;
background-color: red;
border: none;
outline: none;
border-radius: 12px;
margin: 0px 200px 0px 0px;
color: white;

`;
const Logo1 = styled.div`
margin-left: 50px;
crusor: pointer;
img {
  width: 200px;
  margin-top: 0px;
}
`;

//Item BAr

const ItemBar = styled.div`
width: 100%;
height: 60px;
display: flex;
align-items: center;
`;

const ItemBarButton = styled.div`
padding: 5px;
height: 80%;
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;
crussor: pointer;
margin-left: 150px;
`;

const BasketButton = styled.button`
display: flex;
align-items: center;
height: 80%;
cursor: pointer;
margin-left: 150px;
border:none;
outline: none;

h3{
font-size: 15px;
align-items: center;
font-weight: 400;
margin-left: 10px;

}

img{
width: 80px;
margin-right: 10px;
}
p{
color: red;
font-weight: 500;
font-size:20px;
margin-left:10px;
}
`;

export default NavBar;