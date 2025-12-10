import * as t from "https://deno.land/std/testing/asserts.ts";
import { getImageName } from "./getImageName.js";

Deno.test("simple", () => {
  const fn = getImageName("男", 2001, "normal"); // "happy", "sad", "normal"
  t.assertEquals(fn, "img/face_m20_normal.png");
});
