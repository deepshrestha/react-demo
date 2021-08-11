import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { apiHandler } from "./../api/apiHandler";
import CustomerAdd from "../components/customer/CustomerAdd";
import { useFormValidator } from './../FormValidator';

const AddCustomerContainer = () => {
  const history = useHistory();

  let initialState = {
    mode: "I",
    CustomerName: '',
    Zone: '',
    City: '',
    errors: {
        CustomerName: '',
        City: ''
    }
  };

  const {
    onHandleChange,
    onHandleSubmit,
    onHandleBlur,
    fields,
    setFields
  } = useFormValidator(initialState) 

  const { errors } = fields

  useEffect(() => {
    apiHandler("http://localhost:3000/api/count")
    .then((count) => {
      const formData = {
        ...fields,
        CustomerID: count + 1
      };
      console.log(formData);
      setFields(formData);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  const onAddCustomerDataHandler = (event) => {
    event.preventDefault();
    if(onHandleSubmit(event)){
      apiHandler("http://localhost:3000/api/customerdata", "post", fields)
      .then((result) => {
        history.push("/customer/list")
      })
      .catch((err) => {
        console.error(err);
      });
    }      
  };

  return (
    <CustomerAdd
      onHandleSubmit={onAddCustomerDataHandler}
      onHandleChange={onHandleChange}
      onHandleBlur ={onHandleBlur}
      errors={errors}
    />
  );
};

export default AddCustomerContainer;
