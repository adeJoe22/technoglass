import React  from 'react';
import { useState } from 'react'
import styled from 'styled-components';
import Button from '../components/Button'

const YourFormComponent = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  console.log("Form Data Submitted:", formData);
    // const handleClick = () => {
    //     console.log('Button clicked!');}
  return (
    <FormContainer>
      <FormLine onSubmit={handleSubmit}>

        <FormText>
            Get in touch<Span>!</Span>
        </FormText>
      <FormGroup>
        
        <Input name="firstName" placeholder='first Name' type="text" value={formData.firstName} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        
        <Input type="email" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Last Name'/>
      </FormGroup>
      <FormGroup>
        
        <Input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange}/>
      </FormGroup>
      <FormGroup>
        
        <TextArea rows="8" name="message" placeholder='Please type your message' value={formData.message} onChange={handleChange}/>
      </FormGroup>

      <FormGroup>
      <Button onClick={handleSubmit}>Click</Button>
      </FormGroup>

      </FormLine>
    </FormContainer>
  );
};

export default YourFormComponent;


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormLine = styled.form``

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
    
    margin-bottom: 25px;
`
const Span = styled.span`
color: #0693e3;
`