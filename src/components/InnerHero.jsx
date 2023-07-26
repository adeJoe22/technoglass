import React from "react";
import styled from "styled-components";


const CenteredImageText = ({ backgroundImage, text }) => {
  return (
    <Container backgroundImage={backgroundImage}>
      <Text>{text}</Text>
    </Container>


// Use this code to output hero at the EventTarget

//     <InnerHero
//     backgroundImage={Background}
//     text="Text goes here"  
//     />

// code ends here
  );
};

export default CenteredImageText;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Text = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-align: center;
  font-weight: 500;
`;