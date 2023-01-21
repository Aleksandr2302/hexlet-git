const getUniqChars = (string) => {
  let resultFinish = 0;
  let result = '';
  if (string.length === 0) {
    return resultFinish;
  }
  for (let i = 0; i < string.length; i += 1) {
    if (result.includes(string[i])) {
    } else {
      result += string[i];
    }
    resultFinish = result.length;
  }
  return resultFinish;
};
export default getUniqChars;
