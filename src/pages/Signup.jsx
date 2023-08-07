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
          variables: { email, password, handle, username, role },
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
    <div className="w-[960px] flex-col">
      <HeaderLanding />
      <h3 className="text-2xl pb-4">Sign up</h3>
        <form onSubmit={handleSubmit} className="mt-4 flex-col flex w-[360px] mx-0">
          <input
            className="p-3 rounded-[5px] border border-black/5 text-blue-600  focus:bg-white"
            type="email"
            placeholder="E-mail"
            required
            value={email}
            minLength={6}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <input
            className="p-3 rounded-[5px] border border-black/5 text-blue-600  focus:bg-white"
            type="password"
            required
            placeholder="Password"
            value={password}
            minLength={6}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <input
            className="p-3 rounded-[5px] border border-black/5 text-blue-600  focus:bg-white"
            type="password"
            placeholder="Password again"
            value={passwordC}
            required
            minLength={6}
            onChange={(e) => setPasswordC(e.target.value)}
          />{" "}
          <br />
          <input
            className="p-3 rounded-[5px] border border-black/5 text-blue-600  focus:bg-white"
            type="text"
            placeholder="Your @"
            value={handle}
            minLength={4}
            required
            onChange={(e) => setHandle(e.target.value)}
          />{" "}
          <br />
          <input
            className="p-3 rounded-[5px] border border-black/5 text-blue-600  focus:bg-white"
            type="text"
            placeholder="Username"
            value={username}
            required
            minLength={4}
            onChange={(e) => setUsername(e.target.value)}
          />{" "}
          <br />
          <p className="text-center text-red-500">{error}</p>
          <button
            type="submit"
            className="w-1/2 m-auto text-center transition-all duration-300 ease-out hover:ease-in mt-2 font-bold  
            pt-2 pb-2 bg-blue-600 text-white rounded-[5px] bg-gradient-to-r from-blue-400 to-blue-600 
            hover:from-blue-600 hover:to-blue-400 mx-0"
          >
            Create account
          </button>

          <p className="mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="m-0 text-blue-600 underline"
          >
            Login
          </a>
        </p>
        </form>
      </div>
  );
};

export default Signup;
