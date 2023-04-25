// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract BasicTypes {
    bool isSet; //can be true or false

    uint positiveOnly;//units hold only positive values
    uint256 sameAsUint;//only name is different, same as uint

    int anyNumber;//can hold positive or negative values
    int256 sameAsInt;//same as int, only name is different
    bytes bb="21";

}
