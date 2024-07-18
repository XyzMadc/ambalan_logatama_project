import List from "@/Components/Ui/ListLink";
import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
} from "@chakra-ui/react";
import { Link } from "@inertiajs/react";

export default function DrawerLayoutAmbalan({
    isOpen,
    onClose,
    finalFocusRef,
    onToggle,
}) {
    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={finalFocusRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton color={"white"} size={"lg"} onClick={onToggle} />
                <DrawerBody pt="72px" bg={"#1e1b4b"}>
                    <ul className="space-y-10 h-full text-white bg-indigo-950 px-5 py-5">
                        <List path="/" label="Beranda" />
                        <List path="/tentang" label="Tentang" />
                        <List path="/kegiatan" label="Kegiatan" />
                        <List path="/kontak" label="Kontak" />
                        <li className="text-center">
                            <Link
                                className="text-xl tracking-wide bg-gradient-to-r from-navbar_primary via-navbar_secondary to-navbar_tertiary rounded-full py-1 px-5"
                                href="/logatama"
                            >
                                LOGATAMA
                            </Link>
                        </li>
                    </ul>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}
