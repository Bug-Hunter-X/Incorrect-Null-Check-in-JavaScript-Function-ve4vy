function foo(a, b) {
  if (a == null || b == null) {
    return 0; // Correct: handles both null and undefined
  }
  return a + b; 
}