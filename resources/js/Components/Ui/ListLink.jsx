import { Link, usePage } from "@inertiajs/react";

export default function List({ path, label }) {
    const { url } = usePage();

    return (
        <li
            className={`relative text-center py-1 ${
                url === path
                    ? "border-b-2 border-primary py-[2px]"
                    : "before:absolute before:-bottom-[2px] before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
            }`}
        >
            <Link href={path}>{label}</Link>
        </li>
    );
}
