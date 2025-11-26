"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { colors } = useTheme();

  return (
    <div
      style={{
        background: colors.background,
        color: colors.foreground,
      }}
      className="min-h-screen"
    >
      {children}
    </div>
  );
}