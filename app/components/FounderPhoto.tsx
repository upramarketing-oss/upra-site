"use client";

import { useState } from "react";

export function FounderPhoto({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: string;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-blue/10 border border-rule">
      {!errored && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setErrored(true)}
        />
      )}
      {errored && (
        <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-blue text-9xl select-none">
          {fallback}
        </div>
      )}
    </div>
  );
}
