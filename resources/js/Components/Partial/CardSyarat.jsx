export default function CardSyarat({ children }) {
    return (
        <div className="py-4 px-5 xl:px-10 shadow-top-right-bottom rounded-3xl">
            <h4 className="text-xs xl:text-base font-semibold">{children}</h4>
        </div>
    );
}
