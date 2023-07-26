import React from 'react'
import { styled } from 'styled-components'

const Card = ({Header, text, button1Text, button2Text, onButtonClick }) => {
  return (
    <CardWrap>
        <CapitalText>
            {Header}
        </CapitalText>

        <DescText>
            {text}
        </DescText>

        <ButtonWrapper>
        <Button onClick={onButtonClick}>{button1Text} </Button>
        <Button onClick={onButtonClick}>{button2Text} </Button>
      </ButtonWrapper>
    </CardWrap>



//  This line of code below is used to display the cards I created, just style the card as required 


//    <Card
//    Header="Welcome to my App"
//    text="This is a reusable component."
//    button1Text="Click here"
//    button2Text="Click me"
//  />

//  Card output ends
  )
}

export default Card

const CardWrap = styled.div`
width: 100%;
height: 300px;
background-color: bisque;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const CapitalText = styled.h1`
    color: green;
`
const DescText = styled.p`
    color: green;
    margin-top: 30px;
    margin-bottom: 30px;
`
const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const Button = styled.button`
  padding: 15px 50px;
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;