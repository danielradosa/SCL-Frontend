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
        className="bg-blue-600 text-white pr-3 pl-8 pb-2 pt-1"
      >
        Log out
      </button>
    </div>
  );
};

export { LogoutButton };
