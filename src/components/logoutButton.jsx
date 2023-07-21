import React from "react";
import { useNavigate } from "react-router-dom";
import { useApolloClient } from "@apollo/client";

const LogoutButton = () => {
  const navigate = useNavigate();
  const client = useApolloClient();

  const logout = async () => {
    const remember = JSON.parse(localStorage.getItem("remember"));
    const storage = remember ? localStorage : sessionStorage;
    storage.clear();

    await client.clearStore().then(() => {
      client.resetStore();
      navigate("/login", { replace: true });
    });
  };

  return (
    <div className="logout">
      <button
        onClick={logout}
        className="bg-white rounded-lg text-slate-400 pl-4 pr-4 mt-6 mr-6 shadow-sm"
      >
        Logout
      </button>
    </div>
  );
};

export { LogoutButton };
