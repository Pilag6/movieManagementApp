import fs from "fs/promises";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "..", "movieDB.json");

async function readMoviesFromFile() {
    try {
        //Unicode Transformation Forma: translates the binary string back to a Unicode character.
        const data = await fs.readFile(filePath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading from file", error);
        return [];
    }
}

async function writeMoviesToFile(movies) {
    try {
        //Unicode Transformation Forma: translates any Unicode character to a matching unique binary string
        const data = JSON.stringify(movies, null, 2);
        await fs.writeFile(filePath, data, "utf8");
    } catch (error) {
        console.error("Error writing to file", error);
    }
}

export { readMoviesFromFile, writeMoviesToFile };
