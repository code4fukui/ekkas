//import { fetchImage, SIZE_M } from "https://code4fukui.github.io/txt2img/fetchImage.js";
import { fetchImage, SIZE_SQUARE } from "../../tool/txt2img/fetchImage.js";

// need OPENAI_API_KEY on .env

const defopt = { size: SIZE_SQUARE }; // 1024x1024

export const genImages = async (list, opt = defopt) => {
  for (const item of list) {
    const prompt = item.prompt;
    const fn = item.fn;
    console.log(fn, prompt);
    const bin = await fetchImage(prompt, opt);
    await Deno.writeFile(fn, bin);
  }
}
