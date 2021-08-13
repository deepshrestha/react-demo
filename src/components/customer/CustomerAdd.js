import React, { useEffect, useRef } from "react";
import ErrorMessage from "./../../FormValidator/ErrorMessage";

const CustomerAdd = ({
  onHandleSubmit,
  onHandleChange,
  onHandleBlur,
  errors,
}) => {
  //console.log("errors", errors)
  let inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="content-wrapper">
      <form className="row g-3 p-3" onSubmit={onHandleSubmit}>
        <div className="col-6">
          <label htmlFor="inputCustomername" className="form-label">
            Customer Name
          </label>
          <input
            ref={inputRef}
            type="text"
            name="CustomerName"
            placeholder="Customer Name"
            className="form-control"
            id="inputCustomername"
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
            placeholder="Zone"
            className="form-control"
            id="inputZone"
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
            placeholder="City"
            className="form-control"
            id="inputCity"
            onChange={onHandleChange}
            onBlur={onHandleBlur}
          />
          {errors.City.length > 0 && <ErrorMessage errorMsg={errors.City} />}
        </div>
        <div className="col-12 p-2">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerAdd;
