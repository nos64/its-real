function braces(braces: string){
  let stack = [];
  const open = ['(', '[', '{'];
  let rightCount = 0;
  let wrongCount = 0
  for(let i=0; i < braces.length; i++){
    if (open.includes(braces[i])) {
      stack.push(braces[i]);
    } else{
      if(stack.length === 0) return false
      if( (braces[i] === ']' && stack[stack.length-1] === '[')
      || (braces[i] === '}' && stack[stack.length-1] === '{')
      || (braces[i] === ')' && stack[stack.length-1] === '(')) {
        stack.pop();
        rightCount += 2
      }
    }
  }
  wrongCount = braces.length - rightCount
  return {
    'rightBraces': rightCount,
    'wrongBraces': wrongCount,
    }
}

console.log(braces('([]{})[]'));
console.log(braces('([]]'));
