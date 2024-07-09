import { Fragment, useState } from "react";
import Headroom from "react-headroom";
import HamburgerNavbarAmbalan from "../Fragments/HamburgerNavbarAmbalan";
import NavigationBarAmbalan from "../Fragments/NavigationBarAmbalan";
export default function NavbarAmbalan() {
    const [isBorder, setBorder] = useState(false);
    const borderChange = () => {
        setBorder(window.scrollY > 90 ? true : false);
    };
    window.addEventListener("scroll", borderChange);
    return (
        <>
            <Headroom className="absolute z-50 inset-0">
                {/* <div className={`z-50 ${isBorder ? "shadow-lg bg-secondary" : ""}`}> */}
                <div
                    className={`z-50 ${
                        isBorder
                            ? "shadow-lg bg-gradient-to-t from-indigo-800 via-secondary to-tertiary"
                            : ""
                    }`}
                >
                    <Fragment>
                        <div className="md:hidden">
                            <HamburgerNavbarAmbalan />
                        </div>
                        <div className="hidden md:block">
                            <NavigationBarAmbalan />
                        </div>
                    </Fragment>
                </div>
            </Headroom>
        </>
    );
}
