export default function Runtime({ title, text, icon: Icon }) {
    return (
        <div className="size-72 md:size-[22rem] relative flex flex-col items-center">
            <div className="w-full h-60 bg-violet-950 rounded-3xl shadow-2xl shadow-slate-800 absolute bottom-0 text-white space-y-4 p-10 text-center">
                <h3 className="font-bold text-xl md:text-2xl">{title}</h3>
                <p className="text-sm md:text-base">{text}</p>
                <button className="px-10 py-2 bg-white text-secondary rounded-full text-xs md:text-sm font-semibold hover:scale-110 transition-all duration-200">
                    Selengkapnya
                </button>
            </div>
            <div className="bg-violet-950 rounded-full absolute md:top-16 p-5 text-white">
                <Icon size={50} />
            </div>
        </div>
    );
}
