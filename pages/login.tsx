import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import Logo from "../assets/img/logo.png";
import Link from "next/link";
import SpinnerSmall from "../components/common/SpinnerSmall";
import { LoginFormSchema } from "../yupSchemas";
import TextInput from "../components/common/TextInput";
import { useFormik } from "formik";
import { authenticateUser } from "../functions";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Login = () => {
  // ?State For Loading ---------------------------->
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // !State For Loading ---------------------------->

  const router = useRouter();

  // ?Configurations For Formik -------------------------->
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginFormSchema,
      onSubmit: async (values, action) => {
        setIsLoading(true);

        const isUserLoggedIn = await authenticateUser(values);

        /**
         * Show An Error If API Returns An Error Else Navigate To Dashboard And Set Token In localStorage
         */
        if (isUserLoggedIn.error) {
          toast.error(isUserLoggedIn.msg);
          setIsLoading(false);
          return;
        }

        localStorage.setItem("re-user", JSON.stringify(isUserLoggedIn.token));
        router.push("/dashboard?route=myProperties");
      },
    });
  // !Configurations For Formik -------------------------->

  /**
   * Protected Route
   */
  useEffect(() => {
    if (localStorage.getItem("re-user")) {
      router.push("/dashboard?route=myProperties");
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Real Estate Site My Muhammad Uzair. Login"
        />
      </Head>
      <BreadCrumb text="Login" />
      <div className="form py-20 pb-40 bg-gray-50">
        <section>
          <div className="flex flex-col items-center justify-start px-6 mx-auto">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
            >
              <Image alt="Loading..." src={Logo} />
            </a>
            <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Login To Your Account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                  action="#"
                >
                  <TextInput
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    error={errors.email && touched.email}
                    errorText={errors.email}
                    onBlur={handleBlur}
                    placeholder="name@company.com"
                    onChange={handleChange}
                  />
                  <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={values.password}
                    label="Password"
                    error={errors.password && touched.password}
                    errorText={errors.password}
                    onBlur={handleBlur}
                    placeholder="••••••••"
                    onChange={handleChange}
                  />
                  <div className="flex items-center justify-end">
                    <Link
                      href="/forgot_password"
                      className="text-sm font-medium text-red-600 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  {isLoading ? (
                    <div className="text-center">
                      <SpinnerSmall />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                      Login
                    </button>
                  )}

                  <p className="text-sm font-light text-center text-gray-500">
                    Dont Have An Account?{" "}
                    <Link
                      href="/register"
                      className="font-medium text-red-600 hover:underline"
                    >
                      Register Now
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
