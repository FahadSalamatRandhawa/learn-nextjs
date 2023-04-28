# Unsigned Integers
- `uint/uint256` only hold positives values. Variations allow us to limit number size they can store. `uintBytes`. Bytes is multiples of 8 upto 256.
==Highest value : (2^Bytes)-1== you can also use `int max=type(int8).max` to find maximum storable value
==Lowest value : 0==, `int min=type(int8).min` to find minimum storable value
### Comparisons
<=, <, ==, !=, >=, > (evaluate to bool)
###  Bit operators
&, |, ^ (bitwise exclusive or), ~ (bitwise negation)
- please read the BinaryNumbers to understand.
---
AND: This operation compares each bit of two operands and generates a new number by combining only those bits that are set (1) in both operands. For example, 6 & 3 = 2 because only the second bit (value 2) is set in both 6 and 3.

OR: This operation compares each bit of two operands and generates a new number by combining all the bits that are set (1) in either of the operands. For example, 6 | 3 = 7 because the first, second, and third bits (values 1, 2, and 4) are set in either 6 or 3 or both.

XOR: This operation compares each bit of two operands and generates a new number by combining only those bits that are set (1) in one operand but not in the other. For example, 6 ^ 3 = 5 because only the first and third bits (values 1 and 4) are set in either 6 or 3 but not both.

NOT: This operation takes a single operand and generates a new number by flipping all the bits in the operand. For example, ~6 = -7 because all the bits in 6 are flipped (0 becomes 1 and 1 becomes 0) and the result is interpreted as a two's complement number.

---
### Shift operators
<< (left shift), >> (right shift)
---
Left shift: This operation shifts the bits of a number to the left by a specified number of positions and fills the empty positions with zeros. For example, 6 << 2 = 24 because the bits of 6 are shifted two positions to the left and two zeros are added to the right.

Right shift: This operation shifts the bits of a number to the right by a specified number of positions and fills the empty positions with zeros or ones depending on whether the number is signed or unsigned. For example, 6 >> 2 = 1 because the bits of 6 are shifted two positions to the right and two zeros are added to the left.
---
### Arithmetic operators
+, -, unary - (only for signed integers), *, /, % (modulo), ** (exponentiation)