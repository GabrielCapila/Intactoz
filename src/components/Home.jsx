import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function ContrateFunction(){
  setTimeout(function(){
    window.location.href = "https://google.com/contact"
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
  color: white;
  letter-spacing: px;
  font-size: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
      font-size: 14px;
      font-weight: 400;
      line-height: 45px;
      position: relative;
      text-decoration: none;
      text-transform: uppercase;
      height: 50px;
      background-color: rgb(216, 216, 216);
      min-width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
    box-shadow: 0px 0px 10px 0px rgb(255, 255, 255);
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
