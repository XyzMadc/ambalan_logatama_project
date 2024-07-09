import List from "@/Components/Ui/ListLink";
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
} from "@chakra-ui/react";

export default function DrawerLayoutAmbalan({
    isOpen,
    onClose,
    finalFocusRef,
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
                <DrawerBody pt="72px">
                    <ul className="space-y-4 text-white bg-indigo-950 px-[135px] py-5">
                        <List path="/" label="Beranda" />
                        <List path="/tentang" label="Tentang" />
                        <List path="/kegiatan" label="Kegiatan" />
                        <List path="/kontak" label="Kontak" />
                        <li className="text-center">
                            <a
                                className="tracking-wide bg-gradient-to-r from-navbar_primary via-navbar_secondary to-navbar_tertiary rounded-full py-1 px-3"
                                href="/logatama"
                            >
                                LOGATAMA
                            </a>
                        </li>
                    </ul>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}
