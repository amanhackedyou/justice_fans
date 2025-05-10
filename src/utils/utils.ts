export function formatNumberHumanReadable(num: number): string {
    if (num === null || num === undefined || isNaN(num)) return '0';

    const units = ['', 'K', 'M', 'B', 'T', 'P', 'E'];
    const tier = Math.floor(Math.log10(Math.abs(num)) / 3);

    if (tier === 0) return num.toString();

    const unit = units[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = num / scale;

    // Optional: show 1 decimal place if needed
    const formatted = scaled.toFixed(scaled < 10 ? 1 : 0);

    return `${formatted}${unit}`;
}
