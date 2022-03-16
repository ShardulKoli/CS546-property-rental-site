import React, { useEffect, useState } from "react";
import axios from "axios";

export const TestComponent = () => {
  const [state, setState] = useState("");

  console.log("check");

  const callRoute = () => {
    axios
      .get("/test")
      .then((res) => {
        console.log(res.data);
        setState(res.data.key);
      })
      .catch((e) => {
        console.log(e);
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
