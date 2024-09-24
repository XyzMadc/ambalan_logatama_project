export default function ImageSection({ className, src }) {
    return (
        <>
            <img
                className="size-80 md:size-[23rem] xl:size-[30rem]"
                src={src}
                alt="imageSejarahAmbalan"
            />
            <img
                className={`hidden md:block absolute ${className} md:border-8 xl:border-[12px]`}
                src={src}
                alt="imageSejarahAmbalan"
            />
        </>
    );
}
