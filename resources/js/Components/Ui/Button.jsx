export default function Button(p) {
  return (
    <button className="flex gap-3 items-center bg-primary px-4 py-2 rounded-xl text-white">
      {p.children}
    </button>
  );
}
