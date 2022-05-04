import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const LogoutPage = ({ setLoginToken }) => {
  // logout
  const navigate = useHistory();
  const loadLoginPage = () => {
    navigate.push(`/`);
  };
  const deleteToken = () => {
    localStorage.removeItem("token");
    setLoginToken(null);
    loadLoginPage();
  };

  useEffect(() => {
    deleteToken();
  }, []);

  return <div>You Have been Logged out</div>;
};
