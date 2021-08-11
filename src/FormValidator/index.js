import { useState } from "react";

export const useFormValidator = (props) => {
  const [fields, setFields] = useState(props);

  const emailPattern = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  const formValid = function (fields) {
    let valid = true;

    Object.values(fields).forEach(function (value) {
      value.length == 0 && (valid = false);
    });

    return valid;
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    Object.keys(fields).map((field) => {
      if (event.target[field] !== undefined)
        validate(field, fields[field], event.target[field].type, fields.errors);
    });

    if (formValid(fields)) {
      resetForm(event);
      return true;
    } else {
      let errors = fields.errors;
      Object.keys(errors).every(function (key) {
        if (errors[key].length > 0) {
          event.target[key].focus();
          return false;
        } else {
          return true;
        }
      });
      return false;
    }
  };

  const onHandleChange = (event) => {
    event.preventDefault();
    const { name, value, type } = event.target;
    let errors = props.errors;
    validate(name, value, type, errors);
  };

  const onHandleBlur = (event) => {
    event.preventDefault();
    const { name, value, type } = event.target;
    let errors = props.errors;
    validate(name, value, type, errors);
  };

  function validate(name, value, type, errors) {
    switch (type) {
      case "text":
      case "password":
        errors[name] =
          value.length == 0 ? `${name} is required`.toUpperCase() : "";
        break;
      case "email":
        errors.email =
          value.length == 0
            ? `${name} is required`.toUpperCase()
            : !emailPattern.test(value)
            ? "Email is invalid!".toUpperCase()
            : "";
        break;
      default:
        break;
    }

    setFields({
      ...fields,
      errors,
      [name]: value,
    });
  }

  const resetForm = (event) => {
    Object.keys(fields).forEach((field) => {
      if (event.target[field] !== undefined) {
        event.target[field].value = "";
      }
    });
  };

  return {
    onHandleChange,
    onHandleSubmit,
    onHandleBlur,
    fields,
  };
};
