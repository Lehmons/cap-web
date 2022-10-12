import React, { useState } from "react";
import MobileNavStyled from "./MobileNav.styled";
import Menu from "./menu.svg";
import Chevron from "./chevron.svg";
import Close from "./close.svg";
import Link from "next/link";
import { useAppStore } from "../../stores/AppStore";
import { groq } from "next-sanity";

// query
const query = groq`*[_type == 'menu']{
  menu[]{page->{ title, slug 
  }
}`;

export default function Nav() {
  const [{ isMenuOpen }, { setIsMenuOpen }] = useAppStore();

  const toggle = (e) => {
    e?.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MobileNavStyled>
      <button onClick={toggle} className="menu">
        {isMenuOpen ? (
          <Close className="close-svg" />
        ) : (
          <Menu className="menu-svg" />
        )}
      </button>
      <Link href="/" scroll={false}>
        <a className="logo">Cap Awards</a>
      </Link>
      <a href="mailto:info@capaward.co.uk?subject=Enquiry" className="enquire">
        <span>Enquire</span>
        <Chevron className="chevron-svg" />
      </a>
    </MobileNavStyled>
  );
}
