import { useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Headroom from "react-headroom";
import { Turn as Hamburger } from "hamburger-react";
import Logo from "../../../assets/beranda/ambalan-soekma-navbar.png";
import DrawerLayoutAmbalan from "@/Layouts/Drawer/DrawerAmbalan";

export default function HamburgerNavbarAmbalan() {
    const [isOpen, setOpen] = useState(false);
    const btnRef = useRef();
    const {
        isOpen: isDrawerOpen,
        onOpen: onDrawerOpen,
        onClose: onDrawerClose,
    } = useDisclosure();

    const onToggle = () => {
        if (isDrawerOpen) {
            onDrawerClose();
        } else {
            onDrawerOpen();
        }
        setOpen(!isOpen);
    };
    return (
        <>
            <Headroom>
                <nav className="px-5 py-3 w-full flex justify-between shadow-lg bg-transparent z-10">
                    <div className="flex items-center">
                        <img
                            className="object-cover w-[120px]"
                            src={Logo}
                            alt="Logo"
                        />
                    </div>
                    <Hamburger
                        color="#fff"
                        size={20}
                        direction="right"
                        toggled={isOpen}
                        toggle={onToggle}
                    />
                </nav>
            </Headroom>
            <DrawerLayoutAmbalan
                finalFocusRef={btnRef}
                isOpen={isDrawerOpen}
                onClose={onDrawerClose}
                onToggle={onToggle}
            />
        </>
    );
}
