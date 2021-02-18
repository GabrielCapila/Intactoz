import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function ContrateFunction(){
  setTimeout(function(){
    window.location.href = "http://franciscosantos.net/loja"
      console.log('ok')
      }, 300);
}

const Main = styled.div`
    height: 100vh;
    background-color: #000000;
    background-image: linear-gradient(315deg, #2d3436 0%, #000000 70%);
    background-repeat: repeat;
    display: flex;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
`
const Text = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
  color: #000000;
  letter-spacing: px;
  font-size: 120px;
  display: flex;
  font-family: 'Poppins', sans-serif;
  flex-direction: row;
  justify-content: space-around;
 text-shadow:
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px rgb(255, 255, 255);
  .notColored{
    margin-left:25px;
    display:flex;
  }

`
const Buttons = styled.div`
    margin-top: 5rem;
    display: flex;    
    justify-content: space-around;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    

    
`
const Inferior = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 100vh;
`
const AllCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 95vw;
    height: 95vh;
    box-shadow: 0 4px 8px 0 rgb(255, 255, 255);
    background-color: rgb(80, 80, 80);
`
const LinkStyled = styled(Link)`
    box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2);
    transition: 0.3s;
    height: 90vh;
    background-color: rgb(126, 126, 126);
    width: 23vw;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
      box-shadow: 0 8px 300px 0 rgba(0,0,0,0.2);
    }
`
const Btn = styled.span`
letter-spacing: 0.1em;
      cursor: pointer;
      font-size: 16px;
      font-weight: 400;
      line-height: 45px;
      color: white;
      position: relative;
      text-decoration: none;
      text-transform: uppercase;
      height: 50px;
      background-color:transparent;
      min-width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 25px;
      border: 2px solid white;
       :hover{
        background-color: white;
        color: black;
        transition: 0.3s;
        border: 2px solid black;

      }
    `

function Home() {
  console.log('ajfia')
  return (
    <div>
      <Main>
        <div>
            <Text>
                <span >intactoz</span>
                <span className="notColored">corp.</span>

            </Text>
            <Buttons>
                <div onClick={ContrateFunction} className="containter">
                    <Btn>Contrate</Btn>
                </div>
                <div className="containter">
                    <Btn>Loja</Btn>
                </div>
            </Buttons>
        </div>
    </Main>
    
    <Inferior>
        <AllCards>
            <LinkStyled to="/artista" ></LinkStyled>
            <LinkStyled to="/artista" ></LinkStyled>
            <LinkStyled to="/artista" ></LinkStyled>
            <LinkStyled to="/artista" ></LinkStyled>
        </AllCards>
      </Inferior>
    </div>
  
  );
}

export default Home;
