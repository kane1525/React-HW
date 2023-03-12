export function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const remainingMilliseconds = milliseconds % 1000;
  const remainingSeconds = seconds % 60;
  const remainingMinutes = minutes % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(remainingMinutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  const formattedMilliseconds = String(remainingMilliseconds).padStart(3, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}
