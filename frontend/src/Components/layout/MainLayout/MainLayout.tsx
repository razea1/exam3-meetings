import React from "react";
import "./MainLayout.css";
import { NavLink } from "react-router-dom";
import Menu from "../menu";
import Routing from "../routing/routing";

function MainLayout(): JSX.Element {
  return (
    <div className="Layout">
      <Routing />
    </div>
  );
}

export default MainLayout;
