export default function stringToTitleCase(s: string) {
  let res: string = "";

  const words = s.split(" ");
  words.forEach((word) => {
    res = res.concat(word[0].toUpperCase() + word.slice(1)) + " ";
  });

  return res.trim();
}
