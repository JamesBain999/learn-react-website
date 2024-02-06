import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../library/UserContext";

function ProtectedRoute({ redirectPath = "/signup", children }) {
  const { currentUser } = useUserContext();
  if (!currentUser.name) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
}
export default ProtectedRoute;
