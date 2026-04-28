"use client";

export function CookiesButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        window.dispatchEvent(new CustomEvent("upra:reopen-cookies"));
      }}
      style={{
        font: "inherit",
        color: "inherit",
        cursor: "pointer",
        background: "transparent",
        border: 0,
        padding: 0,
        appearance: "none",
        WebkitAppearance: "none",
      }}
      className={className}
    >
      Cookies
    </button>
  );
}
