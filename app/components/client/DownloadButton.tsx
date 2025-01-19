'use client';

import { trackAction } from '@/lib/analytics';

export function DownloadButton() {
  return (
    <button
      className="btn-primary text-xl px-10 py-3 relative overflow-hidden group"
      onClick={() => trackAction("dldBCk")}
    >
      <span className="relative z-10">Download the Mobile App</span>
      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
    </button>
  );
} 