export default function getLastWord(str) {
    const words = str.split(' ');
    const lastIndex = words.length - 1;
    return words[lastIndex];
  }