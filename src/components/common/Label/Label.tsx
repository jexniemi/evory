export default function Label({ text }: { text: string }) {
  return (
    <div className="block">
      <label className="text-xs text-gray-500 font-semibold">{text}</label>
    </div>
  );
}
