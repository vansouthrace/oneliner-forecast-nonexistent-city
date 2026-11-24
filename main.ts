import { mkdirSync, writeFileSync } from "node:fs";

const entry = "In Blorpington today: light drizzle of confetti, winds of mild regret, and a 90% chance your umbrella will betray you by noon.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
