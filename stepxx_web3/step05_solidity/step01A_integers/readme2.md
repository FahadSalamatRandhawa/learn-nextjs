# Numbers in solidity
Numbers can be represented in Solidity in four different ways
- Decimal: Solidity supports decimal literals like any other programming language. For example: uint256 x = 123;
- Hexadecimal: Solidity supports hexadecimal literals. For example: uint256 x = 0xff;
- Binary: Solidity also supports binary literals. For example: uint256 x = 0b1010; 
- Octal: Solidity does not directly support octal literals, but they can be represented in hexadecimal form by prefixing the number with 0o. For example: uint256 x = 0o10; would represent the decimal number 8.

### Lets convert 2 into these types
- Decimal: uint256 x = 2;
- Hexadecimal: uint256 x = 0x2;
- Binary: uint256 x = 0b10; (the 0b helps compiler understand the number is in binary form)

## Binary
binary is a base-2 numbering system that uses only two digits, 0 and 1, to represent numbers. Each digit in a binary number is called a "bit."
While binary is used for positive numbers(unsigned), there are also negative numbers. For those we use Two's complement notation (a method for representing signed integers in binary form. It is the most common way of representing signed integers in computers. In two's complement notation, the leftmost bit, which is called the "sign bit," represents the sign of the number).

- signbit 0 = positive number
- signbit 1 = negative number

![Two's Complement notation](./assets/Two's%20Complement%20Notation.png)