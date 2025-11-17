import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function Food(props) {
  return (
    <h2 className="food-title">
      I am {props.type} type Food. People love me.
    </h2>
  );
}

// componente con props
const mycode = <Food type="Continental" />;

// renderización nueva de React 18
const root = createRoot(document.getElementById("root"));
root.render(mycode);
