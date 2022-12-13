import { readFileSync } from "fs";

const input = readFileSync("2022/1/input.txt", "utf8");

const elfs = input.split("\n\n").map((elf) => elf.split("\n").map(Number));

const summedElfs = elfs.map((elf) => elf.reduce((a, b) => a + b, 0));

const max = Math.max(...summedElfs);

export default max;
