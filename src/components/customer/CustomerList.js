import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const CustomerList = ({
  count,
  customers,
  //onGetCustomerDataHandler,
  onDeleteCustomerDataHandler,
}) => {

  const history = useHistory();

  const onEditCustomerDataHandler = (id) => {
    history.push(`/customer/edit/${id}`);
  };

  return (
    <div className="content-wrapper">
      <span className="ml-2 h5">Records: {count ? count : 0}</span>
      <>
        {customers && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Customer ID</th>
                <th scope="col">Customer Name</th>
                <th scope="col">City</th>
                <th scope="col">Zone</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => {
                return (
                  <tr key={customer.CustomerID}>
                    <td>{customer.CustomerID}</td>
                    <td>{customer.CustomerName}</td>
                    <td>{customer.City}</td>
                    <td>{customer.Zone}</td>
                    <td>
                      <button
                        className="primary btn-primary"
                        onClick={() =>
                          onEditCustomerDataHandler(customer.CustomerID)
                        }
                      >
                        Edit
                      </button>
                      &nbsp;
                      <button
                        className="primary btn-danger"
                        onClick={(e) =>
                          onDeleteCustomerDataHandler(e, customer.CustomerID)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </>
    </div>
  );
};

export default CustomerList;
