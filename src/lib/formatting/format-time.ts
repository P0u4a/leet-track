export function formatTime(milliseconds: number) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    const remainingMinutes = (minutes % 60).toString().padStart(2, '0');
    const remainingHours = hours.toString().padStart(2, '0');

    return `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
}
