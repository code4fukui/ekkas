export const genImageNames = (funcprompt, funcfn, options) => {
  const nv = options.map(i => Object.entries(i));
  let len = nv[0].length;
  const beam = [1];
  for (let i = 1; i < nv.length; i++) {
    beam.push(len);
    len *= nv[i].length;
  }
  const res = [];
  for (let i = 0; i < len; i++) {
    const p = [];
    const fns = [];
    for (let j = 0; j < nv.length; j++) {
      const n = Math.floor(i / beam[j]) % nv[j].length;
      p.push(nv[j][n][1]);
      fns.push(nv[j][n][0]);
    }
    const prompt = funcprompt(p);
    const fn = funcfn(fns);
    res.push({ fn, prompt });
  }
  return res;
};
