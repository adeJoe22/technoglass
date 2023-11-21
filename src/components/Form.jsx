import React from "react";
import { useState } from "react";
import styled from "styled-components";
// import Button from "../components/Button";
import axios from "axios";
import { Button } from "@chakra-ui/react";

const YourFormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'BACKEND_ENDPOINT' with the actual endpoint for handling form submissions
      const response = await axios.post("BACKEND_ENDPOINT", formData);
      setloading(true);
      if (response.status === 200) {
        setSubmitSuccess(true);
        setloading(false);
        // Reset the form data here
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setSubmitSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitSuccess(false);
    }
  };
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
          <Input
            name='firstName'
            placeholder='first Name'
            type='text'
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='email'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Last Name'
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <TextArea
            rows='8'
            name='message'
            placeholder='Please type your message'
            value={formData.message}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Button
            isLoading={loading}
            colorScheme='primary'
            width='20%'
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </FormGroup>
      </FormLine>
      {submitSuccess && (
        <SuccessMessage>Your form was submitted successfully!</SuccessMessage>
      )}
    </FormContainer>
  );
};

export default YourFormComponent;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormLine = styled.form``;

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
`;
const Span = styled.span`
  color: #00221b;
`;
const SuccessMessage = styled.div`
  color: green;
  margin-top: 20px;
  font-weight: bold;
`;
