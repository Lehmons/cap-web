import React, { useState } from "react";
import MobileNavStyled from "./MobileNav.styled";
import MBurger from "./mBurger.svg";

export default function MobileNav() {
  return (
    <MobileNavStyled>
      <MBurger className="mBurger.svg" />
    </MobileNavStyled>
  );
}
