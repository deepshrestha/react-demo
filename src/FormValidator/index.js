import { useState } from "react";

export const useFormValidator = (props) => {
  const [fields, setFields] = useState(props);

  const emailPattern = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  const formValid = function (errors) {
    let valid = true;
    Object.values(errors).forEach(function (value) {
      value.length !== 0 && (valid = false);
    });

    return valid;
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    let errors = fields.errors;
    Object.keys(errors).map((error) => {
      if (event.target[error] !== undefined)
        validate(
          error,
          event.target[error].placeholder,
          fields[error],
          event.target[error].type,
          fields.errors
        );
    });

    if (formValid(errors)) {
      if(props.mode === "I")
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
    const { name, placeholder, value, type } = event.target;
    let errors = props.errors;
    if(type === "select-multiple"){
      let optionValue = Array.from(event.target.selectedOptions, option => option.value);
      validate(name, placeholder, optionValue, type, errors);
    }    
    else
      validate(name, placeholder, value, type, errors);
  };

  const onHandleBlur = (event) => {
    event.preventDefault();
    const { name, placeholder, value, type } = event.target;
    let errors = props.errors;
    validate(name, placeholder, value, type, errors);
  };
  
  const validate = (name, placeholder, value, type, errors) => {
    switch (type) {
      case "text":
      case "password":
        errors[name] =
          (value.length == 0 && props.errors.hasOwnProperty(name)) ? `The ${placeholder ?? name} field is required` : "";
        break;
      case "select-one":
        errors[name] =
          (value == 0 && props.errors.hasOwnProperty(name)) ? `The ${placeholder ?? name} field is required` : "";
        break;
      case "select-multiple":
        errors[name] =
        (value.length == 0 && props.errors.hasOwnProperty(name)) ? `The ${placeholder ?? name} field is required` : "";
        break;        
      case "email":
        errors.email = (!emailPattern.test(value) && props.errors.hasOwnProperty(name)) ? "The Email is invalid!" : "";
        break;
      default:
        break;
    }

    setFields({
      ...fields,
      errors,
      [name]: value
    });
  }

  const resetForm = (event) => {
    let resetFields = {
      ...props,
    };
    Object.keys(fields).forEach((field) => {
      if (event.target[field] !== undefined) {
        event.target[field].value = "";
      }
    });
    setFields({
      ...fields,
      ...resetFields,
    });
  };

  return {
    onHandleChange,
    onHandleSubmit,
    onHandleBlur,
    fields,
    setFields
  };
};
