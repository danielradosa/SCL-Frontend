import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
  const remember = JSON.parse(localStorage.getItem("remember"));
  const user = sessionStorage.getItem("token");

  if (user || remember) {
    return true;
  } else {
    return false;
  }
};

const IsAuthenticated = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default IsAuthenticated;
