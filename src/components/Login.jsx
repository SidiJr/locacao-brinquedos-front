import { clsx } from "clsx";
import React from "react";

function Login() {
  const inputStyles = "border border-neutral-300 rounded-md";

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="bg-gradient-to-b from-sky-200 to-fuchsia-200 col-span-3 h-full overflow-hidden">
        <img className="w-full h-full object-cover" src="images/logo.png" />
      </div>
      <div className="col-span-2 h-full">
        <i className="fa-regular fa-circle-user"></i>
        {/* inputs temporários só pra definir os estilos */}
        <form className="flex flex-col justify-center overflow-hidden"> 
          <label>Usuário</label>
          <input className={clsx(inputStyles)} />
          <label>Senha</label>
          <input className={clsx(inputStyles)} />
          <input type="button" />
        </form>
      </div>
    </div>
  );
}

export default Login;
