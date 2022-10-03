import React, { useState } from "react";
import NavStyles from "./Nav.styled";
import Burger from "./burger.svg";
import { useAppStore } from "../../stores/AppStore";

export default function Nav() {
  const [{ isMenuOpen }, { setIsMenuOpen }] = useAppStore();

  const toggle = (e) => {
    e?.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavStyles>
      <button onClick={toggle} className="menu">
        <Burger className="burger-svg" />
      </button>
    </NavStyles>
  );
}
