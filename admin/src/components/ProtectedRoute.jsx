import { Navigate } from "react-router-dom";
import { tokenStore } from "../api/client";

const ProtectedRoute = ({ children }) => {
  if (!tokenStore.get()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
