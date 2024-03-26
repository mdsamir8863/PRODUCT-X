import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ children, user, redirect = "/register" }) => {
  if (!user) {
    return <Navigate to={redirect} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectRoute;
