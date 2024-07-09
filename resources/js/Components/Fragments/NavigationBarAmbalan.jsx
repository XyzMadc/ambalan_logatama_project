import Headroom from "react-headroom";
import Logo from "../../../assets/beranda/ambalan-soekma-navbar.png";
import List from "../Ui/ListLink";

export default function NavigationBarAmbalan() {
  return (
    <>
      <Headroom>
        <nav className="px-5 xl:px-20 py-5 w-full shadow-lg flex justify-between bg-transparent z-[999]">
          <a href="https://www.realmadrid.com/" className="flex items-center">
            <img className="object-cover w-10 md:w-[200px]" src={Logo} alt="Logo" />
          </a>
          <ul className="flex gap-10 items-center font-medium text-white">
            <List path="/" label="Beranda" />
            <List path="/tentang" label="Tentang" />
            <List path="/kegiatan" label="Kegiatan" />
            <List path="/kontak" label="Kontak" />
            <li className="bg-gradient-to-r from-navbar_primary via-navbar_secondary to-navbar_tertiary px-4 py-2 xl:px-5 xl:py-1 rounded-full">
              <a className="font-semibold" href="/logatama">
                LOGATAMA
              </a>
            </li>
          </ul>
        </nav>
      </Headroom>
    </>
  );
}
