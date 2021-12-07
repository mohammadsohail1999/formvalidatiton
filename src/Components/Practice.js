import React, { useRef } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Practice = () => {
  let clearTimeout = useRef(null);

  if (!window.navigator.onLine) {
    offline();
  }
  function offline() {
    clearTimeout.current = setTimeout(() => {
      console.log("user is offline");
      window.location.href = "http://localhost:3000/login";
    }, 1000 * 10);
    console.log(clearTimeout);
  }
  function online() {
    console.log("online called");
    if (clearTimeout.current) {
      clearInterval(clearTimeout.current);
      clearTimeout.current = null;
      console.log(clearTimeout);
    }
  }

  window.onoffline = (e) => {
    offline();
  };

  window.ononline = () => {
    online();
  };

  const accessCameraandVideo = async () => {
    let audioAccess = null;
    let videoAccess = null;
    try {
      audioAccess = await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log(audioAccess);
    } catch (error) {
      console.dir(error, "audio");
    }
    try {
      videoAccess = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log(videoAccess);
    } catch (error) {
      console.dir(error, "video");
    }
  };

  return (
    // <Formik
    //   initialValues={{ firstName: "", lastName: "", email: "" }}
    //   validationSchema={Yup.object({
    //     firstName: Yup.string().min(3, "3 char required").required("Required"),
    //     lastName: Yup.string().min(3, "3 char required").required("Required"),
    //     email: Yup.string().email("Email is invalid").required("Required"),
    //   })}
    //   onSubmit={(values, { setSubmitting }) => {
    //     console.log(values);
    //     // setTimeout(() => {
    //     // alert(JSON.stringify(values, null, 2));
    //     setSubmitting(false);
    //     //   }, 400);
    //   }}
    // >
    //   {(formik) => (
    //     <form onSubmit={formik.handleSubmit}>
    //       <label htmlFor="firstName">First Name</label>
    //       <input
    //         id="firstName"
    //         type="text"
    //         {...formik.getFieldProps("firstName")}
    //       />
    //       {formik.touched.firstName && formik.errors.firstName ? (
    //         <div>{formik.errors.firstName}</div>
    //       ) : null}

    //       <label htmlFor="lastName">Last Name</label>
    //       <input
    //         id="lastName"
    //         type="text"
    //         {...formik.getFieldProps("lastName")}
    //       />
    //       {formik.touched.lastName && formik.errors.lastName ? (
    //         <div>{formik.errors.lastName}</div>
    //       ) : null}

    //       <label htmlFor="email">Email Address</label>
    //       <input id="email" type="email" {...formik.getFieldProps("email")} />
    //       {formik.touched.email && formik.errors.email ? (
    //         <div>{formik.errors.email}</div>
    //       ) : null}

    //       <button type="submit">Submit</button>
    //     </form>
    //   )}
    // </Formik>

    <div>
      <button
        onClick={() => {
          accessCameraandVideo();
        }}
      >
        media Accesss
      </button>
    </div>
  );
};

export default Practice;
