import Sidebar from "@/Components/Partial/Sidebar";
import { usePage } from "@inertiajs/react";

export default function LayoutAdminLogatama({ title, children }) {
    const { url } = usePage();
    return (
        <section className="min-h-screen overflow-hidden flex">
            <Sidebar url={url} />
            <div className="w-4/5 px-10 py-14">
                <div className="space-y-8">
                    <h1 className="text-xl text-secondary font-semibold">
                        {title}
                    </h1>
                    {children}
                </div>
            </div>
        </section>
    );
}
