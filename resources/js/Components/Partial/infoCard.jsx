export default function infoCard({ title, description, buttonText }) {
  return (
    <div className="space-y-4 p-3 rounded-xl border-primary border-2 bg-[#633FCA] transition-transform duration-500">
      <h1 className="font-bold text-sm">{title}</h1>
      <p className="text-xs">{description}</p>
      <button className="border-2 border-primary py-1 px-2 rounded-xl shadow-lg text-xs">
        {buttonText}
      </button>
    </div>
  );
}
