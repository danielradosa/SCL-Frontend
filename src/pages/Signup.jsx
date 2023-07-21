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
  const [error, setError] = useState("");
  const role = "USER";
  const artist = false;

  const [signupMutation] = useMutation(SIGNUP_MUTATION);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (password !== passwordC) {
        setError("Passwords do not match.");
        return;
      }

      if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
      }

      if (handle.length < 4) {
        setError("Username must be at least 4 characters long.");
        return;
      }

      if (email.length < 6) {
        setError("Email must be at least 6 characters long.");
        return;
      }

      try {
        await signupMutation({
          variables: { email, password, handle, username, role, artist },
        });
        setError("");
        Swal.fire({
          title: "Registration was succesfull.",
          text: "You can now login.",
          icon: "success",
          confirmButtonText: "Ok",
        });
      } catch (error) {
        setError(error.message);
      }
    },
    [email, password, passwordC, handle, username, signupMutation]
  );

  return (
    <div className="mx-auto w-full backdrop-blur-xl bg-white rounded-xl">
      <HeaderLanding />
      <div className="mt-12 2xl:mt-20">
        <h3 className="text-center text-3xl pb-4">
          Registruj sa <i className="border-b-2 border-black/30">zadarmo</i>
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
            placeholder="Použivateľské Meno"
            value={username}
            required
            minLength={4}
            onChange={(e) => setUsername(e.target.value)}
          />{" "}
          <br />
          <button
            type="submit"
            className="w-1/2 m-auto text-center transition-all duration-300 ease-out hover:ease-in mt-6 font-bold  pt-2 pb-2 bg-orange-400 text-white rounded-3xl text-lg bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-400"
          >
            Vytvoriť účet
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
