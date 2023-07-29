import React from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import {Link} from 'react-router-dom'

const Errpage = () => {
  return (
    <ErrWrapper>
        <Wrap>
            <Text>
                Oops!
            </Text>
            <SmallText>
                404 - Page Not Found
            </SmallText>

            <SmallerText>
                Go back home
            </SmallerText>

            <Link to='/'><Button>Home</Button></Link>
        </Wrap>
    </ErrWrapper>
  )
}

export default Errpage

const ErrWrapper = styled.div`
    
`
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
    width: 90%;
    text-align: center;
    margin: 0 auto;
`
const Text = styled.h1`
    font-size: 3rem;
    text-align-center;
`
const SmallText = styled.p`
font-size: 2rem;
text-align-center;
`
const SmallerText = styled.p`
font-size: 1rem;
margin: 15px 0;
text-align-center;
`