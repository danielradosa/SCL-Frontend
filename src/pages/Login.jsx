import React, { useState, useCallback } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { LOGIN_MUTATION } from "../utils/Mutations";
import { GET_CURRENT_USER } from "../utils/Queries";
import { Spinner } from "../components/Spinner";
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
      } catch (error) {
      }
    },
    [email, password, remember, loginMutation, navigate]
  );

  return (
    <div className="mx-auto w-full backdrop-blur-xl bg-white rounded-xl transition-all duration-300">
      <HeaderLanding />
      <div className="mt-12 2xl:mt-20">
      <h3 className="text-center text-3xl pb-4">
          Prihlás sa <i className="border-b-2 border-black/30">teraz</i>
        </h3>
        <form onSubmit={handleLogin} className="grid w-64 2xl:w-96 mt-6">
          <div className="l">{loggedInState === true ? <Spinner /> : ""}</div>
          <input
            className="pl-6 pt-3 pb-3 pr-6 rounded-3xl border-2 border-black text-orange-400 
            font-bold focus:bg-white"
            type="email"
            placeholder="E-mail"
            value={email}
            minLength={6}
            maxLength={52}
            onChange={(e) => setEmail(e.target.value)}
            required
          />{" "}
          <br />
          <input
            className="pl-6 pt-3 pb-3 pr-6 rounded-3xl border-2 border-black text-orange-400 
            font-bold focus:bg-white"
            type="password"
            placeholder="Heslo"
            value={password}
            minLength={6}
            maxLength={52}
            onChange={(e) => setPassword(e.target.value)}
            required
          />{" "}
          <label className="text-black">
            <input
              className="mt-5"
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />{" "}
            Zapamätať si účet
          </label>
          <button
            type="submit"
            className="w-1/2 m-auto text-center transition-all duration-300 ease-out hover:ease-in mt-6 font-bold  pt-2 pb-2 bg-orange-400 text-white rounded-3xl text-lg bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-400"
          >
            Prihlásiť sa
          </button>
        </form>
      </div>
    </div>
  );
}
