import { mkdirSync, writeFileSync } from "node:fs";

const part1 = "The last chip in the bag is always the saltiest, ";
const part2 = "as if the bag saved its best sentence for the end.";

const sentence = part1 + part2;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
