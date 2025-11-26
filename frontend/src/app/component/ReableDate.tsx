
export function ReadableTime({
  dataString,
  mode = "hour",
}: {
  dataString: string | Date | undefined;
  mode?: "hour" | "day"|"current";
}) {
  if (!dataString) return "N/A";

  const date = new Date(dataString);

  let options: Intl.DateTimeFormatOptions;

  if (mode === "hour") {
    options = { hour: "numeric", hour12: true };
    return date.toLocaleTimeString("en-US", options);
  }

  if (mode === "day") {
    options = { weekday: "short" }; // e.g. "Sun", "Mon", etc.
    return date.toLocaleDateString("en-US", options);
  }
  else{
     const options = date.toLocaleDateString('en-US',{
        weekday: 'long',
        month: 'long',
        day: 'numeric',

    })
    return options;
  }
    return "Invalid mode";
}