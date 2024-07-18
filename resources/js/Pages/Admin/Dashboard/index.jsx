import { SquaresFour } from "@phosphor-icons/react";

export default function dashboardAdmin() {
    return (
        <section className="min-h-screen overflow-hidden">
            {/* Sidebar */}
            <div className="w-1/5 bg-[#2B1577] h-screen py-10 space-y-10">
                <div className="px-4">
                    <h1 className="text-white font-bold text-3xl">
                        LOGATAMA XVII
                    </h1>
                </div>
                <div className="pl-[60px] text-white">
                    <button className="bg-white p-2 rounded-l-2xl flex gap-4 items-center text-[#2B1577] w-full">
                        <SquaresFour size={30} />
                        <span className="text-lg font-medium">Dashboard</span>
                    </button>
                    <button className="bg-white p-2 rounded-l-2xl flex gap-4 items-center text-[#2B1577] w-full">
                        <SquaresFour size={30} />
                        <span className="text-lg font-medium">Dashboard</span>
                    </button>
                    <button className="bg-white p-2 rounded-l-2xl flex gap-4 items-center text-[#2B1577] w-full">
                        <SquaresFour size={30} />
                        <span className="text-lg font-medium">Dashboard</span>
                    </button>
                    <button className="bg-white p-2 rounded-l-2xl flex gap-4 items-center text-[#2B1577] w-full">
                        <SquaresFour size={30} />
                        <span className="text-lg font-medium">Dashboard</span>
                    </button>
                </div>
            </div>
            {/* Content */}
            <div></div>
        </section>
    );
}
