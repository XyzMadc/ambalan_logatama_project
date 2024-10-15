import { CaretUp } from "@phosphor-icons/react";
import { useState } from "react";

export default function AccordionPertanyaan({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="space-y-1 w-full">
            <button
                className={`flex justify-between p-4 rounded-3xl border-[3px] w-full ${
                    isOpen ? "rounded-b-none" : "rounded-b-3xl"
                } border-primary bg-[#33118F] transition-all duration-300`}
                onClick={handleClick}
            >
                <p className="text-xs xl:text-sm line-clamp-20 text-left">
                    {question}
                </p>
                <div
                    className={`flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                >
                    <CaretUp size={24} />
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="flex p-4 rounded-3xl rounded-t-none border-[3px] border-primary bg-[#33118F]">
                    <p className="text-xs line-clamp-20">{answer}</p>
                </div>
            </div>
        </div>
    );
}
