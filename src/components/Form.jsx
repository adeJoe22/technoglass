import React from 'react';
import styled from 'styled-components';

const YourFormComponent = () => {
  return (
    <FormContainer>

        <FormText>
            Get in touch<Span>!</Span>
        </FormText>
      <FormGroup>
        
        <Input type="text" name="firstName" placeholder='first Name'/>
      </FormGroup>
      <FormGroup>
        
        <Input type="text" name="lastName" placeholder='Last Name'/>
      </FormGroup>
      <FormGroup>
        
        <Input type="email" name="email" placeholder='Email'/>
      </FormGroup>
      <FormGroup>
        
        <TextArea rows="8" name="message" />
      </FormGroup>
    </FormContainer>
  );
};

export default YourFormComponent;


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
 
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

// const Label = styled.label`
//   font-weight: bold;
//   margin-bottom: 5px;
// `;

const Input = styled.input`
  padding: 14px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormText = styled.h3`
    font-size: 3.25rem;
    font-weight: 500;
    margin-top: 25px;
    margin-bottom: 25px;
`
const Span = styled.span`
color: #0693e3;
`