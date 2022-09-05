export function normalizeHeader(header: string) {
    header = header.toLowerCase();
    header = header.replace('_', " ");
    let words = header.split(' ').map(value => value[0].toUpperCase() + value.substring(1))
    return words.join(" ");
}