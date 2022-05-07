import React, { useEffect, useState } from "react";
import axios from "axios";

export const TestComponent = () => {
  const [state, setState] = useState("");

  const callRoute = () => {
    axios
      .get("/test")
      .then((res) => {
        setState(res.data.key);
      })
      .catch((e) => {
        setState("Encountered some error");
      });
  };

  useEffect(() => {
    callRoute();
  }, []);

  return (
    <div>
      <p>Test Component</p>
      {state}
    </div>
  );
};
