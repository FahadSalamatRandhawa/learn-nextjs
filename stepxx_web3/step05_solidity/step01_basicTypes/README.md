# Types

#### Bool
- `bool` true or false values,(undefined or null are NOT supported)
- default value for uninitialized is false
#### Unsigned Integer
- `uint/uint256` also known as unsigned int, holds only positive values. unit ranges from `uint8` to `unit256`, by an increment of 8. The number with uint represents bytes.Each uint variant can hold different range values. The formula to calculate max value for uintBytes is (2^Bytes-1). The uint values start from 0.
- `uint8`, maxValue=2^8-1 which gives us 255. Giving us value range of 0-255. A total of 256 values
- `uint16`, maxValue=2^16-1 which gives us 65,535. Giving us range from 0-65,535. A total of 65,536 values
- Same for next values
- default value for uninitilized is 0
#### Integer
- `int/int256` holds any positive or negative value. These also range from `int8` to `int256`, by increment of 8. The lower limit of an int type is not fixed and the formulas are. lowerValue=(-2^(Bytes-1)) , upperValue=(2^(Bytes-1)-1), where Bytes represents the number written with the int
- `int8`, lowerValue=(-2^7), upperLimit=(2^7-1), giving us range -128 to 127
- `int16`, lowerValue=(-2^15), upperLimit=(2^15-1), giving us range -32,768 to 32,767
- Same for next values
- default value for uninitilized is 0
#### String
- `string` strings that are assigned on creation are immutable, once created they cannot be changes, however you can create a newString using the old values and add some new value too
```shell
string memory myString = "Hello";
myString = string(abi.encodePacked(myString, " world"));
```
#### Bytes
- `bytes32/bytes` can hold a string of upto 32 characters, it ranges from `bytes1` to `bytes32`, the number with bytes specifying how much values can it hold, `bytes5` can only hold 5 digit string '12345', becuase 1 digit in string equals 1 byte
#### Address
- `address` holds 20 byte address value
- `address payable` has 2 member functions `transfer`, `send`
#### fixed and unfixed
these are not yet supported by Solidity, they can be decalred but cannot be used. M is nunber of bytes from 8-256 in increments of 8 and N represents how many decimal points are available ranging from 0-80
- `fixedMxN` alias for `fixed128x18`
- `ufixedMxN` alias for `ufixed128x18`


### Limitations for Integer Types
- if a value falls outside the range of a variable type the operation will fail and transaction reverts, like in the case of uint
```shell
function f(uint a, uint b) pure public returns (uint) {
         return a - b; 
    }
```
the value will be -1, which is outside the uint range of only positive values(uint max possible value=2^256-1).