# Unsigned Integers
- `uint/uint256` only hold positives values. Variations allow us to limit number size they can store. `uintBytes`. Bytes is multiples of 8 upto 256.
==Highest value : (2^Bytes)-1== you can also use `int max=type(int8).max` to find maximum storable value
==Lowest value : 0==, `int min=type(int8).min` to find minimum storable value
---
### Comparisons
<=, <, ==, !=, >=, > (evaluate to bool)
---
###  Bit operators
&, |, ^ (bitwise exclusive or), ~ (bitwise negation)
- please read the BinaryNumbers to understand.

- AND: This operation compares each bit of two operands and generates a new number by combining only those bits that are set (1) in both operands. Results in 12
```shell
uint8 a = 60; // 0011 1100
uint8 b = 13; // 0000 1101
uint8 c = a & b; // 0000 1100
```

- OR: This operation compares each bit of two operands and generates a new number by combining all the bits that are set (1) in either of the operands. Results in 61
```shell
uint8 a = 60; // 0011 1100
uint8 b = 13; // 0000 1101
uint8 c = a | b; // 0011 1101
```

- XOR: This operation compares each bit of two operands and generates a new number by combining only those bits that are set (1) in one operand but not in the other. Results in 49 
```shell
uint8 a = 60; // 0011 1100
uint8 b = 13; // 0000 1101
uint8 c = a ^ b; // 0011 0001
```

- NOT: When performing the NOT operation on a which is 60 in binary (0011 1100), all the bits are flipped to get 1100 0011.
```shell
uint8 a = 60; // 0011 1100
uint8 b = ~a; // 1100 0011   b=195
```

---
### Shift operators
<< (left shift), >> (right shift)

- Left shift: This operation shifts the bits of a number to the left by a specified number of positions and fills the empty positions with zeros. For example, 6 << 2 = 24 because the bits of 6 are shifted two positions to the left and two zeros are added to the right.
```shell
uint8 a = 6; // 0000 0110
uint8 b = a << 2; // 0011 0000 (24 in decimal)

int8 a = -6; // -0000 0110
int8 b = a << 2; // 0001 1000 (-24 in decimal)

```

- Right shift: This operation shifts the bits of a number to the right by a specified number of positions and fills the empty positions with zeros or ones depending on whether the number is signed or unsigned. For example, 6 >> 2 = 1 because the bits of 6 are shifted two positions to the right and two zeros are added to the left.
```shell
6 (decimal) = 0000 0110 (binary)
6 >> 2 = 0000 0001 (binary) = 1 (decimal)

int8 a = -6; // 1111 1010
int8 b = a >> 2; // 1111 1110 (-2 in decimal)

```
---
### Arithmetic operators
+, -, unary - (only for signed integers), *, /, % (modulo), ** (exponentiation)