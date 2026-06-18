type AdPlaceholderProps = {
  label?: string;
  className?: string;
  placement?: "responsive" | "mobile" | "desktop";
};

export function AdPlaceholder({
  label = "Reklam alanı",
  className = "",
  placement = "responsive"
}: AdPlaceholderProps) {
  const visibilityClass =
    placement === "mobile" ? "md:hidden" : placement === "desktop" ? "hidden md:block" : "";

  return (
    <aside
      aria-label={label}
      className={`my-10 rounded-lg border border-dashed border-slate-300 bg-white px-5 py-6 text-center text-sm text-slate-500 ${visibilityClass} ${className}`}
    >
      <p className="font-semibold text-slate-700">{label}</p>
      <p className="mt-2">
        Bu alan reklam yerleşimi için ayrılmıştır. Gerçek AdSense kodu eklenmemiştir.
      </p>
    </aside>
  );
}
