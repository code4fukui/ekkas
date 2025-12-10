import { genImageNames } from "./genImageNames.js";
import { genImages } from "./genImages.js";

const gender = { m: "男性", f: "女性" };
const age = {};
for (let i = 10; i <= 80; i+= 10) {
  age[i] = i + "代";
}
const face = { happy: "うれしそうな顔", sad: "残念そうな顔", normal: "普通の顔" };
const options = [gender, age, face];
const funcprompt = (p) => `日本人の${p[1]}${p[0]}の${p[2]}を実写、背景透過のPNGで生成して`;
const funcfn = (p) => `img/face_${p[0]}${p[1]}_${p[2]}.png`;

const list = genImageNames(funcprompt, funcfn, options);
console.log(list);

await genImages(list);
