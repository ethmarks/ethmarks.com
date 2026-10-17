function formatRelativeTime(ms: number): string {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const seconds = Math.round(ms / 1000);
  const absSec = Math.abs(seconds);

  if (absSec < 60) return rtf.format(seconds, "second");

  const minutes = Math.round(seconds / 60);
  if (Math.abs(minutes) < 60) return rtf.format(minutes, "minute");

  const hours = Math.round(minutes / 60);
  if (Math.abs(hours) < 24) return rtf.format(hours, "hour");

  const days = Math.round(hours / 24);
  return rtf.format(days, "day");
}

export function updateRelativeTimes() {
  const times = document.querySelectorAll("time.relativeTime") as NodeListOf<HTMLTimeElement>;

  const now = Date.now();

  for (const time of times) {
    const commitTime = new Date(time.dateTime).getTime();
    time.textContent = formatRelativeTime(commitTime - now);
  }
}
