import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const Practice = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string().min(3, "3 char required").required("Required"),
        lastName: Yup.string().min(3, "3 char required").required("Required"),
        email: Yup.string().email("Email is invalid").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        // setTimeout(() => {
        // alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        //   }, 400);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            {...formik.getFieldProps("lastName")}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}

          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default Practice;
