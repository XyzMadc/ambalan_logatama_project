import { Play } from "@phosphor-icons/react";
import { useState } from "react";

export default function Jigle() {
    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlayPause = () => {
        const audio = document.getElementById("audio");
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <section className="bg-secondary p-10 md:px-80">
            <div className="bg-gradient-to-t from-secondary from-10% to-[#633FCA] p-5 rounded-xl border border-primary text-white text-center space-y-3">
                <h2 className="font-bold xl:text-2xl">JIGLE OF LOGATAMA</h2>
                <div className="border border-white w-full" />
                <p className="text-xs xl:text-sm">
                    m ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.{" "}
                </p>
                <button
                    onClick={handlePlayPause}
                    className="mx-auto flex items-center justify-center gap-2 px-2 py-2 border border-primary rounded-full hover:bg-[#633FCA] transition-colors duration-300 text-xs xl:text-sm"
                >
                    <div className="bg-black rounded-full flex items-center justify-center size-7">
                        <Play size={20} />
                    </div>
                    {isPlaying ? "Pause" : "Dengarkan Jingle LOGATAMA"}
                </button>
                <audio
                    id="audio"
                    // src="/path/to/your/audio/file.mp3"
                    className="hidden"
                />
            </div>
        </section>
    );
}
