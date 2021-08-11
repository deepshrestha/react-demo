import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onFetchCustomerDataByID } from "./../actions/customerAction";
import { apiHandler } from "./../api/apiHandler";
import CustomerEdit from "../components/customer/CustomerEdit";

const EditCustomerContainer = ({ match }) => {
  const history = useHistory();
  const [formState, setFormState] = useState([]);

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

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    //console.log(name, value)
    const formData = {
      ...formState,
      [name]: value,
    };

    setFormState(formData);
  };

  const onGetDataByIdHandler = (id) => {
    //console.log(id)
    apiHandler(`http://localhost:3000/api/customerdata/${id}`)
      .then((result) => {
        setFormState({
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
    apiHandler(
      `http://localhost:3000/api/customerdata/edit/${id}`,
      "put",
      formState
    )
      .then(() => {
        console.log("Record updated!");
        history.push("/customer/list");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <CustomerEdit
      customerData={customerData.customer}
      onEditCustomerDataHandler={onEditCustomerDataHandler}
      onChangeHandler={onChangeHandler}
    />
  );
};

export default EditCustomerContainer;
