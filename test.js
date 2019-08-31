function getMiddle(s)
{
  const len = s.length;
  const mid = len / 2;
  if (len % 2 == 0)
  {
    return s.slice(mid - 1, mid + 1);
  }
  else
  {
    return s[parseInt(mid)];
  }
}
const getMiddleChar = (str) => {
  const length = str.length;
  return length % 2 == 0 ? str.slice((length / 2 ) - 1, (length / 2) + 1) : str[parseInt(length / 2)]
}

console.log(getMiddleChar("string"))
console.log(getMiddleChar("strings"))