export const funcfn = (p) => `img/face_${p[0]}${p[1]}_${p[2]}.png`;

const getAge = (age_or_byear, year) => {
  if (!year) {
    year = new Date().getFullYear();
  }
  age_or_byear = parseInt(age_or_byear);
  if (age_or_byear < 1700) {
    return age_or_byear;
  }
  const y = year - age_or_byear;
  for (let i = 10; i <= 80; i += 10) {
    if (y < i + 10) return i;
  }
  return 80;
};

export const getImageName = (gender, age_or_byear, emo, year) => {
  gender = gender.startsWith("男") ? "m" : "f";
  const age = getAge(age_or_byear, year);
  return funcfn([gender, age, emo]);
};
