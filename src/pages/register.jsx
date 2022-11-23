import React, { useEffect } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 15) {
    errors.lastName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.noTelp = "Required";
  } else if (values.noTelp.length > 13) {
    errors.lastName = "Must be 13 characters or less";
  }

  return errors;
};

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      noTelp: "",
      password: "",
      validationPassword: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
        <input
          type="number"
          id="noTelp"
          name="noTelp"
          placeholder="Telephone Number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.noTelp}
        />
        {formik.touched.noTelp && formik.errors.noTelp ? (
          <div>{formik.errors.noTelp}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Register;
