function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This line is wrong. It should check for undefined as well
  }
  return a + b; 
}