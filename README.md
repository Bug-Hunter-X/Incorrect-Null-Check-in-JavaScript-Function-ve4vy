# Incorrect Null Check in JavaScript Function

This repository demonstrates a common bug in JavaScript: an incomplete null check.  The `foo` function incorrectly handles undefined arguments, resulting in potential errors. The solution demonstrates the correct way to handle both `null` and `undefined` values.

## Bug
The original `foo` function only explicitly checks for `null` values. If either `a` or `b` is `undefined`, the function will throw a TypeError because `undefined` + number will throw an error. 

## Solution
The corrected `foo` function uses a more robust check, utilizing the loose equality operator (`==`) to handle both `null` and `undefined` values. It returns 0 if either `a` or `b` is `null` or `undefined`, and otherwise performs the addition.
