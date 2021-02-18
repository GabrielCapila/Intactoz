import React from 'react'
import styled from  'styled-components'

const Main = styled.div`
        height: 100vh;
        display: flex;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.6);
        justify-content: center;
        align-items: center;
        font-family: 'Open Sans', sans-serif;
`

const Bio = styled.div`
justify-content: space-around;
display: flex;
align-items: center;
width: 90vw;
padding-top: 3rem;
padding-bottom: 3rem;
box-shadow: 0px 0px 20px 0px rgb(255, 255, 255);
border-radius: 5px;
`

const Photo = styled.div`
        
        padding: 5rem;
        border-radius: 50%;
        background-color: white;
    `
const PhotoText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;`

const TextArea = styled.div`

width: 50%;
color: white;
display: flex;
justify-content: center;
align-items: center;
`

const Text = styled.span`
    word-wrap: break-word;
    text-align: right;
    font-size: 1.5rem
`

const Label = styled.h1`
color: #022fc2; 
font-family: 'Lobster', cursive; 
font-size: 36px; 
font-weight: normal; 
line-height: 48px; 
margin: 0 0 18px; 
text-shadow: 1px 0 0 #fff;
`

const List = styled.div`
list-style-type: upper-roman;
color: white;
display: flex;
flex-direction: row;
margin-left: 35px;
li{
    padding: 5px;
}
`

function Artists(){
    console.log('lod')
    return(
        <div>
                <Main>
                    <Bio>
                        <PhotoText>
                                <Photo>
                                </Photo>
                                <Label>
                                Artista
                                </Label>
                        </PhotoText>
                        <TextArea>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Text>
                        </TextArea>
                    </Bio>
                </Main>
                

        </div>
    )
}

export default Artists