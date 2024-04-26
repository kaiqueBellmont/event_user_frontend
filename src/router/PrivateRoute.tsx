import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: any) => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  console.log(isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
