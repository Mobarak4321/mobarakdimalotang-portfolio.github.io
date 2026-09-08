import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CRTOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50 pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_60%,rgba(0,0,0,0.4)_100%)] z-50 pointer-events-none" />
    </div>
  );
}

export function BlinkingCursor({ className }: { className?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
      className={`inline-block w-3 h-5 bg-primary align-middle ml-1 ${className || ""}`}
    />
  );
}

export function CRTText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative inline-block text-shadow-[0_0_8px_hsl(var(--primary))] ${className}`}>
      {children}
    </span>
  );
}
