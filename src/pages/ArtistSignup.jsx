import React, { useState, useCallback } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP_MUTATION } from "../utils/Mutations";
import Swal from "sweetalert2";
import { HeaderLanding } from "../components/Landing";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");
  const [handle, setHandle] = useState("");
  const [username, setUsername] = useState("");
  const role = "USER";
  const artist = true;

  const [signupMutation] = useMutation(SIGNUP_MUTATION);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (password === passwordC) {
        signupMutation({
          variables: { email, password, handle: "@" + handle, username, role, artist },
        });
        Swal.fire({
          title: "Super!",
          text: "Úspešne si si vytvoril účet umelca",
          icon: "success",
          confirmButtonText: "Prihlásiť sa",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/login";
          }
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Heslá sa nezhodujú",
          icon: "error",
          confirmButtonText: "Skúsiť znovu",
        });
      }
    },
    [email, password, handle, username, role, signupMutation]
  );

  return (
    <div className="mx-auto w-full backdrop-blur-xl bg-white rounded-xl">
      <HeaderLanding />
      <div className="mt-12 2xl:mt-20">
        <h3 className="text-center text-3xl pb-4">
          Registruj sa ako <i className="border-b-2 border-black/30">umelec</i>
        </h3>
        <form onSubmit={handleSubmit} className="grid w-64 2xl:w-96 mt-6">
          <input
            className="pl-6 pt-3 pb-3 pr-6 rounded-3xl border-2 border-black text-orange-400 font-bold focus:bg-white"
            type="email"
            placeholder="E-mail"
            required
            value={email}
            minLength={6}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <input
            className="pl-6 pt-3 pb-3 pr-6 rounded-3xl border-2 border-black text-orange-400 font-bold focus:bg-white"
            type="password"
            required
            placeholder="Heslo"
            value={password}
            minLength={6}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <input
            className="pl-6 pt-3 pb-3 pr-6 rounded-3xl border-2 border-black text-orange-400 font-bold focus:bg-white"
            type="password"
            placeholder="Heslo Znovu"
            value={passwordC}
            required
            minLength={6}
            onChange={(e) => setPasswordC(e.target.value)}
          />{" "}
          <br />
          <input
            className="pl-6 pt-3 pb-3 pr-6 rounded-3xl border-2 border-black text-orange-400 font-bold focus:bg-white"
            type="text"
            placeholder="Tvoja @ Prezývka"
            value={handle}
            minLength={4}
            required
            onChange={(e) => setHandle(e.target.value)}
          />{" "}
          <br />
          <input
            className="pl-6 pt-3 pb-3 pr-6 rounded-3xl border-2 border-black text-orange-400 font-bold focus:bg-white"
            type="text"
            placeholder="Celé meno"
            value={username}
            required
            minLength={5}
            onChange={(e) => setUsername(e.target.value)}
          />{" "}
          <br />
          <button
            type="submit"
            className="w-56 m-auto text-center transition-all duration-300 ease-out hover:ease-in mt-6 font-bold  pt-2 pb-2 bg-orange-400 text-white rounded-3xl text-lg bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-400"
          >
            Vytvoriť účet tatéra
          </button>
        </form>

        <p className="text-center pt-4 mt-2">
          Už máš účet?{" "}
          <a
            href="/login"
            className="pl-4 pr-4 pt-2 pb-2 border border-black rounded-3xl text-sm 2xl:ml-2"
          >
            Prihlásiť sa
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
