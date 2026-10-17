const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export function scrambleFrame(text: string, progress: number, random: () => number = Math.random): string {
  const characters = Array.from(text);
  const resolved = Math.floor(Math.max(0, Math.min(1, progress)) * characters.length);
  return characters.map((character, index) => {
    if (index < resolved || !/[\p{L}\p{N}]/u.test(character)) return character;
    return alphabet[Math.min(alphabet.length - 1, Math.floor(random() * alphabet.length))];
  }).join('');
}
