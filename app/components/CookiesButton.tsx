"use client";

export function CookiesButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        window.dispatchEvent(new CustomEvent("upra:reopen-cookies"));
      }}
      style={{ font: "inherit", color: "inherit" }}
      className={`bg-transparent border-0 p-0 cursor-pointer ${className}`}
    >
      Cookies
    </button>
  );
}
