export default function secondsToMinutes(seconds: string): string {
    const minutes = Math.floor(Number(seconds) / 60);
    const secondsLeft = Number(seconds) - minutes * 60;
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
}