export function Button({ children, className = "", ...props }: any) {
  return (
    <button
      className={`bg-[#12d2b2] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
