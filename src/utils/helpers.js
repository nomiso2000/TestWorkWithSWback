const vowelsObject = {
  a: 'a',
  e: 'e',
  i: 'i',
  o: 'o',
  u: 'u',
};
const consonantsObject = {
  b: 'b',
  c: 'c',
  d: 'd',
  f: 'f',
  g: 'g',
  h: 'h',
  j: 'j',
  k: 'k',
  l: 'l',
  m: 'm',
  n: 'n',
  p: 'p',
  q: 'q',
  r: 'r',
  s: 's',
  t: 't',
  v: 'v',
  w: 'w',
  x: 'x',
  y: 'y',
  z: 'z',
};

function replacementLatters(value) {
  return value
    .toLowerCase()
    .split('')
    .reduce((acc, el) => {
      if (vowelsObject.hasOwnProperty(el)) return (acc = acc + 'i');
      if (consonantsObject.hasOwnProperty(el)) return (acc = acc + 'b');
      acc += el;
      return acc;
    }, '');
}
function encodingValues(data) {
  for (let key in data) {
    if (Array.isArray(data[key])) {
      data[key] = data[key].map((el) => {
        return replacementLatters(el);
      });
    } else {
      data[key] = replacementLatters(data[key]);
    }
  }
  return data;
}
module.exports = { encodingValues };
