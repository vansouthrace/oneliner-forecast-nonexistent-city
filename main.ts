// Charm the Commuter: Forecast a City That Isn't — one weather line (max 140 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Good morning, Blorpville: confetti drizzle, a 90% chance your umbrella files for divorce, and winds gossiping at 40 km/h.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);
