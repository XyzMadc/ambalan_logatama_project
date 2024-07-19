import List from "@/Components/Ui/ListLink";
import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
} from "@chakra-ui/react";

export default function DrawerLayoutLogatama({
    isOpen,
    onClose,
    finalFocusRef,
    onToggle,
}) {
    const handleOverlayClick = (e) => {
        e.stopPropagation();
    };
    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={finalFocusRef}
        >
            <DrawerOverlay onClick={handleOverlayClick} />
            <DrawerContent>
                <DrawerCloseButton
                    color={"white"}
                    size={"lg"}
                    onClick={onToggle}
                />
                <DrawerBody pt="72px" bg={"#1e1b4b"}>
                    <ul className="space-y-10 text-white bg-indigo-950 p-5">
                        <List path="/logatama" label="Logatama" />
                        <List path="/tentang" label="Tentang" />
                        <List path="/panduan" label="Panduan" />
                        <List path="/pengumuman" label="Pengumuman" />
                        <li className="text-center">
                            <a
                                className="text-xl tracking-wide bg-gradient-to-r from-navbar_primary via-navbar_secondary to-navbar_tertiary rounded-full py-1 px-16"
                                href="#"
                            >
                                DAFTAR
                            </a>
                        </li>
                    </ul>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}
