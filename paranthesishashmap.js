var isValid = function (s) {
  const parenthesesMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const parStr = [];

  for (let par of s) {
    if (par in parenthesesMap) parStr.push(par);
    else {
      const closePar = parStr.pop();
      if (parenthesesMap[closePar] != par) return false;
    }
  }
  return parStr.length === 0;
};
