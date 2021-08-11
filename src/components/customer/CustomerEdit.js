import React from "react";

const CustomerEdit = ({
  customerData,
  onEditCustomerDataHandler,
  onChangeHandler,
}) => {
  return (
    <>
      {customerData.length > 0 && (
        <div className="content-wrapper">
          <form
            className="row g-3 p-3"
            onSubmit={(e) => onEditCustomerDataHandler(e)}
          >
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
                onChange={onChangeHandler}
              />
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
                onChange={onChangeHandler}
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
                onChange={onChangeHandler}
              />
            </div>
            <div className="col-12 p-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CustomerEdit;
