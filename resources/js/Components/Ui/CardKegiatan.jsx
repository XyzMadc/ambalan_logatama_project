export default function CardKegiatan(p) {
  return (
    <div className="snap-center rounded-[2rem] min-w-60 w-full overflow-hidden">
      <a href={p.href}>
        <img className="w-60" src={p.src} alt="" />
      </a>
    </div>
  );
}
