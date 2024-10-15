import { usePage } from "@inertiajs/react";

export default function TechnicalMeeting() {
    const { props } = usePage();
    const { announcements } = props;

    return (
        <section className="xl:h-[90vh] px-5 py-14 xl:p-20">
            <div className="space-y-3 xl:space-y-8 bg-gradient-to-t from-[#32108E] via-[#532FB6] to-[#633FCA] rounded-3xl px-8 py-8 xl:p-20 text-white text-center">
                <h1 className="font-bold text-base xl:text-4xl">
                    TECHNICAL MEETING - LOGATAMA XVIII
                </h1>
                <div className="border-2 border-white" />
                <p className="text-xs xl:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>
            </div>
        </section>
    );
}
