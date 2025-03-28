import { clsx } from "clsx";
import React from "react";
import FormLogin from "./Form/FormLogin";

function Login() {
  const inputStyles = "";

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="bg-gradient-to-b from-sky-200 to-fuchsia-200 col-span-3 h-full overflow-hidden">
        <img className="w-full h-full object-cover" src="images/logo.png" />
      </div>
      <div className="col-span-2 h-full flex items-center justify-center flex-col">
        <i className="fa-regular fa-circle-user"></i>
        <FormLogin />
      </div>
    </div>
  );
}

export default Login;
