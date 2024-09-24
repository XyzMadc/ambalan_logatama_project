import { Link } from "@inertiajs/react";

export default function SidebarButton({ link, text, icon: Icon, active }) {
    return (
        <Link
            href={link}
            className={`p-2 rounded-l-2xl flex gap-4 items-center w-full ${
                active ? "bg-white text-[#2B1577]" : ""
            }`}
        >
            <Icon size={30} />
            <span className="text-lg font-medium">{text}</span>
        </Link>
    );
}
