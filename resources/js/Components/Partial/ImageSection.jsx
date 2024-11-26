export default function ImageSection({ className, src }) {
    return (
        <div className="relative">
            <img
                className="size-80 md:size-[23rem] xl:size-[30rem]"
                src={src}
                alt="imageSejarahAmbalan"
            />
            <figure
                className={`border-[12px] ${className} hidden md:block absolute`}
            >
                <img
                    className="w-full h-full"
                    src={src}
                    alt="imageSejarahAmbalan"
                />
            </figure>
        </div>
    );
}
