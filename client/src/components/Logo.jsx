import React from "react";

export default function Logo({ className, ...props }) {
  const defaultClassName =
    "px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white";
  return <span className={className ?? defaultClassName}>Motivir</span>;
}
