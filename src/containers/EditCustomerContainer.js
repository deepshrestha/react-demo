import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onFetchCustomerDataByID } from "./../actions/customerAction";
import { apiHandler } from "./../api/apiHandler";
import CustomerEdit from "../components/customer/CustomerEdit";
import { useFormValidator } from "./../FormValidator";

const EditCustomerContainer = ({ match }) => {
  const history = useHistory();

  let initialState = {
    mode: "U",
    CustomerName: "",
    Zone: "",
    City: "",
    errors: {
      CustomerName: "",
      City: "",
    },
  };

  const { onHandleChange, onHandleSubmit, onHandleBlur, fields, setFields } =
    useFormValidator(initialState);

  const { errors } = fields;

  const { id } = match.params;
  const customerData = useSelector((state) => {
    return {
      customer: state.customer.customer,
      customers: state.customer.customers,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    onGetDataByIdHandler(id);
  }, []);

  const onGetDataByIdHandler = (id) => {
    //console.log(id)
    apiHandler(`http://localhost:3000/api/customerdata/${id}`)
      .then((result) => {
        setFields({
          ...fields,
          CustomerID: result[0].CustomerID,
          CustomerName: result[0].CustomerName,
          Zone: result[0].Zone,
          City: result[0].City,
        });
        dispatch(onFetchCustomerDataByID(result));
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onEditCustomerDataHandler = (e) => {
    e.preventDefault();
    if(onHandleSubmit(e)){
      apiHandler(
      `http://localhost:3000/api/customerdata/edit/${id}`,
      "put",
      fields
    )
      .then(() => {
        console.log("Record updated!");
        history.push("/customer/list");
      })
      .catch((err) => {
        alert(err);
      });
    }
  };

  return (
    <CustomerEdit
      customerData={customerData.customer}
      onHandleSubmit={onEditCustomerDataHandler}
      onHandleChange={onHandleChange}
      errors={errors}
    />
  );
};

export default EditCustomerContainer;
