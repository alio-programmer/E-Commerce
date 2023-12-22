import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Formikinput from "./Formikinput";

const Loginc = () => {
  const CallloginApi = (values) => {
    console.log("sending data", values.email, values.password);
  };

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(6, "password is too small")
      .max(14, "password is too big")
      .required(),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-center items-center placeholder:align-middle">
        <Formik
          initialValues={initialValues}
          onSubmit={CallloginApi}
          validationSchema={schema}
          validateOnMount
        >
          <Form
            className=" w-1/2 h-5/6 p-3 flex flex-col items-center rounded-2xl justify-center border-black border-solid border-2 shadow-2xl"
            method="get"
            action="https://google.com"
          >
            <h5 className="m-t-4">Login to Amazon</h5>
            <div className="p-5 flex flex-col justify-center items-center ">
              <div className="flex flex-col ">
                <Formikinput
                  label="Email-Address"
                  className="p-1 dark:border-black dark:border-solid dark:border-2 dark:rounded-lg focus:outline-blue-500 "
                  placeholder="Enter email address"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </div>
              <div className="flex flex-col">
                <Formikinput
                  label="Password"
                  className="p-1 dark:border-black dark:border-solid dark:border-2 dark:rounded-lg focus:outline-blue-500 "
                  placeholder="Enter Password"
                  name="password"
                  type="password"
                  autoComplete="password"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 m-3 text-white p-2 rounded-md cursor-pointer hover:scale-105 shadow-xl"
              >
                Login
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Loginc;
