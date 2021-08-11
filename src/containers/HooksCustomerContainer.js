import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  onFetchCustomerData,
  onFetchTotalCustomerData,
  onDeleteCustomerData
} from "./../actions/customerAction";
import { apiHandler } from "./../api/apiHandler";
import CustomerList from "./../components/customer/CustomerList";

const HooksCustomerContainer = () => {
  const count = useSelector((state) => state.customer.count);
  const customers = useSelector((state) => state.customer.customers);
  const dispatch = useDispatch();

  //console.log(customers)

  useEffect(() => {
    onGetCustomerDataHandler();
    onGetCountCustomerDataHandler();
  }, []);

  const onGetCountCustomerDataHandler = () => {
    apiHandler(`http://localhost:3000/api/count`, "get")
      .then((result) => {
        //console.log(result)
        dispatch(onFetchTotalCustomerData(result));
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onGetCustomerDataHandler = (id) => {
    if (isNaN(id)) id = "";

    apiHandler(`http://localhost:3000/api/customerdata/${id}`, "get")
      .then((result) => {
        //console.log(result)
        dispatch(onFetchCustomerData(result));
      })
      .catch((err) => {
        alert(err);
      });
  };

  /* const onGetDataByIdHandler = (id) => {
        console.log(id)
        apiHandler(`http://localhost:3000/api/customerdata/${id}`)
        .then(result => {
            dispatch(
                onFetchCustomerData(result)
            )
        })
        .catch(err => {
            alert(err)
        })
    } */

  const onDeleteCustomerDataHandler = (e, id) => {
    e.preventDefault();
    apiHandler(`http://localhost:3000/api/customerdata/delete/${id}`, "delete")
      .then((result) => {
        dispatch(onDeleteCustomerData(count))
        dispatch(onFetchCustomerData(result));
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <CustomerList
      count={count}
      customers={customers}
      onGetCustomerDataHandler={onGetCustomerDataHandler}
      onDeleteCustomerDataHandler={onDeleteCustomerDataHandler}
    />
  );
};

export default HooksCustomerContainer;
