import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Card from './Card';

function Home({ }) {

return(
  <Container>
      <NavBar />
      <Banner1>
        <Banner1Text>
          Unleash her inner charm with our latest sunglass collection tailored exclusively for girls. From vibrant shades to adorable designs, these sunglasses are the ultimate style companion for every little fashionista
          <Banner1Button>SHOP NOW</Banner1Button>
        </Banner1Text>
        <BannerLogo>
          <img src="./Banner1.png" alt="" />
        </BannerLogo>
      </Banner1>
      
      <Main>
        <Card 
        id={1}
        image = {"https://m.media-amazon.com/images/I/61UkvKPuwQL._AC_UX679_.jpg"}
        title = {"WEDDINEN Layered Initial Letter Pendant"}
        price = {2000}
        rating = {3}
       
        />
        <Card 
        id={2}
        image = {"https://m.media-amazon.com/images/I/71C0oFfNdwL._AC_UX679_.jpg"}
        price = {1000}
        rating = {4.5}
        title = {"Leafael Infinity Love Heart Birthstone Crystal"}/>
        <Card />
        <Card />
        

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

//Banner 1
const Banner1 = styled.div`
width: 100%;
height: 270px;
background: linear-gradient(to right, White,#E91E63);
display: flex;
align-items: center;
position: relative;
margin-top: 0px;


`;
const Banner1Text = styled.div`
font-size: 28px;
font-weight: 600;
color: #607D8B; 
font-family: Judson;
width: 100%;
word-wrap: break-word;
word-break: normal;
margin: 50px 150px 90px 200px;
@media (max-width: 1250px) {
  font-size: 12px;
  margin: 0px 0px 0px 50px;
}
`;

const Banner1Button = styled.button`
width: 15%;
height: 35px;
display: flex;
align-items: center;
justify-content: center;
background-color: red;
border: none;
otline: none;
border-radius: 12px;
color: white;
font-size: 15px;

@media (max-width: 1250px) {
  
  width: 40%;
}

`;
const BannerLogo = styled.div`
margin-right: 0px;
crusor: pointer;
  img {
    width: 411px;
    margin-Button: 0px;
  }
  
`;
const Main = styled.div`
display: grid;
justify-content: center;
place-items: center;
width: 100%;
margin-top: 20px;
margin-bottom: 20px;

grid-auto-rows: 450px;
grid-template-columns : repeat(4,300px);
grid-gap: 20px;

`;


export default Home;