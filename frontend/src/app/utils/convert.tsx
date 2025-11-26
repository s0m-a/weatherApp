
export function toFahrenheit(celsius: number ): number {
  return Number(((celsius * 9) / 5 + 32).toFixed(2));
}
