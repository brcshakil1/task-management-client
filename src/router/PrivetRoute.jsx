import { PropTypes } from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const PrivetRout = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>loading...</div>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivetRout.propTypes = {
  children: PropTypes.node,
};

export default PrivetRout;
