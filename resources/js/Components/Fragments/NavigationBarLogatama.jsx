import Headroom from "react-headroom";
import Logo from "../../../assets/logatama.png";
import List from "../Ui/ListLink";

export default function NavigationBarLogatama() {
    return (
        <>
            <Headroom>
                <nav className="px-5 xl:px-20 py-5 w-full shadow-lg flex justify-between bg-transparent z-[999]">
                    <a
                        href="https://www.realmadrid.com/"
                        className="flex items-center"
                    >
                        <img
                            className="object-cover w-10 md:w-[200px]"
                            src={Logo}
                            alt="Logo"
                        />
                    </a>
                    <ul className="flex gap-10 items-center font-medium text-white">
                        <List path="/logatama" label="Beranda" />
                        <List path="/tentang" label="Tentang" />
                        <List path="/panduan" label="Panduan" />
                        <List path="/announcement" label="Pengumuman" />
                        <li className="bg-gradient-to-r from-navbar_primary via-navbar_secondary to-navbar_tertiary px-4 py-2 xl:px-5 xl:py-1 rounded-full">
                            <a className="font-semibold" href="#">
                                DAFTAR
                            </a>
                        </li>
                    </ul>
                </nav>
            </Headroom>
        </>
    );
}
