export default function ImageSection(p) {
  return (
    <>
      <img
        className="size-80 xl:size-[30rem]"
        src={p.src}
        alt="imageSejarahAmbalan"
      />
      <img
        className={`size-80 hidden xl:block absolute ${p.className} border-[12px]`}
        src={p.src}
        alt="imageSejarahAmbalan"
      />
    </>
  );
}
