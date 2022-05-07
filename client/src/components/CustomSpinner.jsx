import React from "react";
import { Spinner } from "react-bootstrap";

export const CustomSpinner = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "15%" }}
    >
      <Spinner
        animation="grow"
        style={{ alignItems: "center", height: "200px", width: "200px" }}
      />
    </div>
  );
};
