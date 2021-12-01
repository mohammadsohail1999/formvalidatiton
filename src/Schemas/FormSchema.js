import * as Yup from "yup";
import "yup-phone";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .required("Required")
    .min(3, "Min 3 Characters required"),

  email: Yup.string().required("Required").email("Invalid Email Address"),
  // .matches(
  //   '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/',
  //   "Invalid email address"
  // )
  number: Yup.string().phone("invalid phone number").required("Required"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  file: Yup.mixed()
    .required("Required")
    .test("fileSize", "File Too Large", (value) => {
      let valid = true;

      if (value && value.size) {
        valid = value.size / 1024 / 1024 > 2 ? false : true;
      } else {
        valid = false;
      }

      return valid;
    })
    .test("fileFormat", "Unsupported Format", (value) => {
      return value && SUPPORTED_FORMATS.includes(value.type);
    }),
  preferredEmail: Yup.string()
    .email("Invalid Preferred Email")
    .test(
      "prefferedEmail",
      "Preffered Email should not be equal to Email",
      function (value) {
        return this.parent.email !== value;
      }
    ),
});
