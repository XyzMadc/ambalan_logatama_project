import { useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Headroom from "react-headroom";
import { Turn as Hamburger } from "hamburger-react";
import Logo from "../../../assets/logatama/logatama.png";
import DrawerLayoutLogatama from "@/Layouts/Drawer/DrawerLogatama";

export default function HamburgerNavbarLogatama() {
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
                    <figure className="flex items-center">
                        <img
                            className="object-cover w-[120px]"
                            src={Logo}
                            alt="Logo"
                        />
                    </figure>
                    <Hamburger
                        color="#fff"
                        size={20}
                        direction="right"
                        toggled={isOpen}
                        toggle={onToggle}
                    />
                </nav>
            </Headroom>
            <DrawerLayoutLogatama
                finalFocusRef={btnRef}
                isOpen={isDrawerOpen}
                onClose={onDrawerClose}
            />
        </>
    );
}
