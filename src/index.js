module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let str1 = str.split('');
  let f, f1;
  let result = true;
  function findConfig(ch, bracketsConfig) {
    return bracketsConfig.find((elem) => {
      return elem[0] === ch || elem[1] === ch;
    });
  }
  if (str1.length % 2 === 1) {
    return false;
  }
  for (f = 0; f < str1.length; f++) {
    let config = findConfig(str[f], bracketsConfig);
    if (config === undefined) return false;
    if (str1[f] === config[0] && stack.indexOf(config[1]) === -1) {
      stack.push(str1[f]);
    } else if (str1[f] === config[1]) {
      if (stack[stack.length - 1] === config[0]) {
        stack.pop();
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  } else {
    return true;
  }
}