
export const lightColors = {
  background: "hsl(210 40% 90%)",
  foreground: "hsl(220 15% 20%)",
  card: "hsl(0 0% 100%)",
  cardForeground: "hsl(210 40% 98%)",
  primary: "hsl(210 100% 56%)",
  primary10: "hsl(210 100% 56% / 0.1)",
  primaryForeground: "hsl(0 0% 100%)",
  secondary: "hsl(210 20% 92%)",
  secondary50: "hsl(210 20% 92% / 0.5)",
  secondaryForeground: "hsl(220 15% 20%)",
  accent: "hsl(25 95% 60%)",
  accentForeground: "hsl(0 0% 100%)",
  muted: "hsl(210 30% 96%)",
  mutedForeground: "hsl(215 15% 65%)",
  border: "hsl(210 20% 88%)",
  input: "hsl(210 20% 88%)",
  ring: "hsl(210 100% 56%)",
  destructive: "hsl(0 84% 60%)",
  destructiveForeground: "hsl(0 0% 0%)",
  gradientSky:
    "linear-gradient(135deg, hsl(210 100% 92%) 0%, hsl(210 100% 98%) 100%)",
  shadowSoft: "0 4px 20px -2px hsl(210 40% 70% / 0.15)",
};

export const darkColors = {
  background: "hsl(220 25% 12%)",
  foreground: "hsl(210 40% 98%)",
  card: "hsl(220 20% 16%)",
  cardForeground: "hsl(220 15% 20%)",
  primary: "hsl(220 25% 12% / 0.1)",
  primary10: "hsl(210 90% 60%)",
  primaryForeground: "hsl(220 25% 12%)",
  secondary: "hsl(220 18% 22%)",
  secondary50: "hsl(220 18% 12%)",
  secondaryForeground: "hsl(210 40% 98%)",
  accent: "hsl(25 90% 55%)",
  accentForeground: "hsl(0 0% 100%)",
  muted: "hsl(220 18% 20%)",
  mutedForeground: "hsl(220 10% 45%)",
  border: "hsl(220 18% 24%)",
  input: "hsl(220 18% 24%)",
  ring: "hsl(210 90% 60%)",
  destructive: "hsl(0 70% 50%)",
  destructiveForeground: "hsl(210 40% 98%)",
  gradientSky:
    "linear-gradient(135deg, hsl(220 25% 14%) 0%, hsl(230 30% 18%) 100%)",
  shadowSoft: "0 4px 20px -2px hsl(220 40% 8% / 0.4)",
};

// Theme object to switch easily
export const theme = {
  light: lightColors,
  dark: darkColors,
};

// Type helper
export type ThemeMode = keyof typeof theme;
export type ThemeColors = typeof lightColors;

