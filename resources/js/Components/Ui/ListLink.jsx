import { Link, usePage } from "@inertiajs/react";

export default function List({ path, label }) {
    const { url } = usePage();

    return (
        <li
            className={`relative text-center text-xl md:text-base font-semibold py-1 ${
                url === path
                    ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-primary py-2 md:py-1"
                    : "before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
            }`}
        >
            <Link href={path}>{label}</Link>
        </li>
    );
}
