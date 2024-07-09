import { Fragment, useState } from "react";
import Headroom from "react-headroom";
import HamburgerNavbarLogatama from "../Fragments/HamburgerNavbarLogatama";
import NavigationBarLogatama from "../Fragments/NavigationBarLogatama";
export default function NavbarLogatama() {
  const [isBorder, setBorder] = useState(false);
  const borderChange = () => {
    setBorder(window.scrollY > 90 ? true : false);
  };
  window.addEventListener("scroll", borderChange);
  return (
    <>
      <Headroom className="absolute z-50 inset-0">
        <nav
          className={`${
            isBorder
              ? "shadow-lg bg-gradient-to-t from-indigo-800 via-secondary to-tertiary"
              : ""
          }`}
        >
          <Fragment>
            <div className="md:hidden">
              <HamburgerNavbarLogatama />
            </div>
            <div className="hidden md:block">
              <NavigationBarLogatama />
            </div>
          </Fragment>
        </nav>
      </Headroom>
    </>
  );
}
