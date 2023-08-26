import React, { useState, useCallback } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { LOGIN_MUTATION } from "../utils/Mutations";
import { GET_CURRENT_USER } from "../utils/Queries";
import { HeaderLanding } from "../components/Landing";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loggedInState, setLoggedInState] = useState(false);

  const [loginMutation] = useMutation(LOGIN_MUTATION, {
    refetchQueries: [GET_CURRENT_USER],
  });

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        setLoggedInState(true);
        const { data } = await loginMutation({
          variables: {
            email,
            password,
          },
        });

        const storage = remember ? localStorage : sessionStorage;
        storage.setItem("remember", JSON.stringify(remember));
        storage.setItem("token", data.login.token);
        storage.setItem("currentUser", JSON.stringify(data.login.allUserInfo));

        navigate("/dashboard", { replace: true });
      } catch (error) {}
    },
    [email, password, remember, loginMutation, navigate]
  );

  return (
    <div className="w-[960px] flex-col">
      <HeaderLanding />
      <div>
        <h3 className="text-2xl">Login</h3>
        <form
          onSubmit={handleLogin}
          className="mt-4 flex-col flex w-[360px] mx-0"
        >
          <div className="mx-0 mb-6">
            {loggedInState === true ? "Logging in..." : ""}
          </div>
          <input
            className="p-3 rounded-[5px] border border-black/5 text-blue-600  focus:bg-white"
            type="email"
            placeholder="E-mail"
            value={email}
            minLength={6}
            maxLength={52}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            className="p-3 rounded-[5px] border border-black/5 text-blue-600 focus:bg-white"
            type="password"
            placeholder="Heslo"
            value={password}
            minLength={6}
            maxLength={52}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="text-black mx-0">
            <input
              className="mt-6"
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />{" "}
            Remember me
          </label>
          <button
            type="submit"
            className="w-1/2 m-auto text-center transition-all duration-300 ease-out hover:ease-in mt-6 font-bold  
            pt-2 pb-2 bg-blue-600 text-white rounded-[5px] bg-gradient-to-r from-blue-400 to-blue-600 
            hover:from-blue-600 hover:to-blue-400 mx-0"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
