import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      noTelp: "",
      password: "",
      validationPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      noTelp: Yup.string().max(15, "Must be 13").required("Required"),
      password: Yup.string().required("Required"),
      validationPassword: Yup.string()
        .required("Required")
        .when("password", {
          is: (values) => (values && values.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Both password need to be the same"
          ),
        }),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate("/Login");
      localStorage.setItem("email", email.values);
    },
  });

  return (
    <>
      <div className="flex align-middle content-center items-center justify-center bg-gray-300 h-full">
        <div className="flex flex-col bg-white mx-auto w-1/3 h-full mt-12 mb-12 p-6 border-b rounded-xl text-center justify-center space-y-8">
          <div className="title text-center text-xl font-semibold">SIGN UP</div>
          <form onSubmit={formik.handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="mb-4 border-0 border-b-2 p-3 w-full"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="bg-yellow-200 rounded-md py-2 mb-4">
                {formik.errors.email}
              </div>
            ) : null}
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="mb-4 border-0 border-b-2 p-3 w-full"
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
              className="mb-4 border-0 border-b-2 p-3 w-full"
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
              className="mb-4 border-0 border-b-2 p-3 w-full"
            />
            {formik.touched.noTelp && formik.errors.noTelp ? (
              <div>{formik.errors.noTelp}</div>
            ) : null}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="mb-4 border-0 border-b-2 p-3 w-full"
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <input
              type="password"
              id="vaidationPassword"
              name="validationPassword"
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.validationPassword}
              className="mb-4 border-0 border-b-2 p-3 w-full"
            />
            {formik.touched.validationPassword &&
            formik.errors.validationPassword ? (
              <div>{formik.errors.validationPassword}</div>
            ) : null}
            <button
              type="submit"
              className="h-12 w-full rounded-md bg-red-300 text-white hover:bg-red-400 mt-8"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
