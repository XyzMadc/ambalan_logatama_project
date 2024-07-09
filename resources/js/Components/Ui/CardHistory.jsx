export default function CardHistory(p) {
  return (
    <div className="w-[260px] xl:w-[400px] xl:h-[502.5px] relative">
      <img src={p.src} alt="ambalanSoekma" />
      <div className="absolute inset-0 bg-black bg-opacity-50 xl:bg-opacity-65 px-5 py-10 xl:py-20 text-white after:absolute after:top-0 after:left-0 after:right-0 after:bottom-72 after:bg-gradient-to-b after:from-neutral-200 after:to-transparent after:opacity-60">
        <h1 className="font-bold text-sm xl:text-3xl text-center tracking-wide">
          {p.title} <br />
          <div className="mt-4 border xl:border-2 w-full border-white" />
        </h1>
        <p className="mt-10 text-[13.4px] xl:text-lg text-center font-semibold">{p.children}</p>
      </div>
    </div>
  );
}
