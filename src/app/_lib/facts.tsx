const facts = [
  "Owls can rotate their necks 270 degrees.",
  "A group of owls is called a parliament.",
  "Hoot hoot!",
  "There are over 200 species of owl.",
  "Temple's live mascot, Stella, is a great horned owl.",
  "OwlHacks is primarily student run, with a team of over 30 people!",
];

export function generateRandomFact() {
  return facts[Math.floor(Math.random() * facts.length)];
}
