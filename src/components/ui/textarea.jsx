export function Textarea(props) {
  return (
    <textarea
      className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      {...props}
    />
  );
}
