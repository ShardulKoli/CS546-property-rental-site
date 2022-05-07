import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
    axios.get("/logout").then();
  };

  useEffect(() => {
    deleteToken();
  }, []);

  return <div>You Have been Logged out</div>;
};
