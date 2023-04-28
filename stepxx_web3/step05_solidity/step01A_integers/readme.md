# Unsigned Integers
- `uint/uint256` only hold positives values. Variations allow us to limit number size they can store. `uintBytes`. Bytes is multiples of 8 upto 256.
==Highest value : (2^Bytes)-1== you can also use `int max=type(int8).max` to find maximum storable value
==Lowest value : 0==, `int min=type(int8).min` to find minimum storable value
### Comparisons
<=, <, ==, !=, >=, > (evaluate to bool)
###  Bit operators
&, |, ^ (bitwise exclusive or), ~ (bitwise negation)
### Shift operators
<< (left shift), >> (right shift)
### Arithmetic operators
+, -, unary - (only for signed integers), *, /, % (modulo), ** (exponentiation)