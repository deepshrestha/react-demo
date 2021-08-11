import React from "react";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./../../FormValidator/ErrorMessage";

const CustomerEdit = ({
  customerData,
  onHandleSubmit,
  onHandleChange,
  onHandleBlur,
  errors,
}) => {
  const history = useHistory();
  const onCancelButton = () => {
    history.push({
      pathname: "/customer/list",
    });
  };
  return (
    <>
      {customerData.length > 0 && (
        <div className="content-wrapper">
          <form className="row g-3 p-3" onSubmit={onHandleSubmit}>
            <div className="col-md-6">
              <label htmlFor="inputCustomerid" className="form-label">
                Customer ID
              </label>
              <input
                type="text"
                name="CustomerID"
                className="form-control"
                id="inputCustomerid"
                value={customerData[0].CustomerID}
                readOnly={true}
              />
            </div>
            <div className="col-6">
              <label htmlFor="inputCustomername" className="form-label">
                Customer Name
              </label>
              <input
                type="text"
                name="CustomerName"
                className="form-control"
                id="inputCustomername"
                defaultValue={customerData[0].CustomerName}
                onChange={onHandleChange}
                onBlur={onHandleBlur}
              />
              {errors.CustomerName.length > 0 && (
                <ErrorMessage errorMsg={errors.CustomerName} />
              )}
            </div>
            <div className="col-6">
              <label htmlFor="inputZone" className="form-label">
                Zone
              </label>
              <input
                type="text"
                name="Zone"
                className="form-control"
                id="inputZone"
                defaultValue={customerData[0].Zone}
                onChange={onHandleChange}
                onBlur={onHandleBlur}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input
                type="text"
                name="City"
                className="form-control"
                id="inputCity"
                defaultValue={customerData[0].City}
                onChange={onHandleChange}
                onBlur={onHandleBlur}
              />
              {errors.City.length > 0 && (
                <ErrorMessage errorMsg={errors.City} />
              )}
            </div>
            <div className="col-12 p-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-danger m-2"
                onClick={onCancelButton}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CustomerEdit;
