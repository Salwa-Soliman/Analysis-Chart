export default function generateRandomColors() {
  let backgroundColor = "#";
  for (let i = 0; i < 3; i++) {
    backgroundColor += Math.floor(Math.random() * 9);
  }

  const borderColor = backgroundColor + 6;

  return { borderColor, backgroundColor };
}
