import * as Yup from "yup";

export const LoginvalidationSchema = Yup.object({
  email: Yup.string().required("Required").email("Invalid Email Address"),

  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});
