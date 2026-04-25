"use client";

export function CookiesButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        window.dispatchEvent(new CustomEvent("upra:reopen-cookies"));
      }}
      className={className}
    >
      Cookies
    </button>
  );
}
