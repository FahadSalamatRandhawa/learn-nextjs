# Types

#### Bool
- `bool` true or false values,(undefined or null are NOT supported)
#### Unsigned Integer
- `uint/uint256` also known as unsigned int, holds only positive values.
#### Integer
- `int/int256` holds any positive or negative value
#### String
- `string` normal string
#### Bytes
- `bytes32/bytes` can hold a string of upto 32 characters
#### Address
- `address` holds 20 byte address value

### Variants for Types


### Limitations for Integer Types
- if a value falls outside the range of a variable type the operation will fail and transaction reverts, like in the case of uint
```shell
function f(uint a, uint b) pure public returns (uint) {
         return a - b; 
    }
```
the value will be -1, which is outside the uint range of only positive values(uint max possible value=2^256-1).