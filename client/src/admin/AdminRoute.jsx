import { Navigate } from "react-router-dom";
import { isAdminAuthenticated } from "./auth";

const AdminRoute = ({ children }) => {
  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default AdminRoute;
