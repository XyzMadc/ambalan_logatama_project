export default function Linimasa({ icon: Icon, title, date }) {
    return (
        <>
            <div className="flex justify-center">
                <Icon size={80} color="white" />
            </div>
            <div className="text-white">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-xs font-light">{date}</p>
            </div>
        </>
    );
}
