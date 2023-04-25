// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract BasicTypes {
    bool isSet; //can be true or false

    uint positiveOnly;//units holds any only positive value
    uint256 sameAsUint;//only name is different, same as uint
    uint8 numBytes8=255;
    //uint8 numBytes8Again=256;// will give error


    int anyNumber;//can hold positive or negative values
    int256 sameAsInt;//same as int, only name is different
    int8 intBytes8=-128;
    //int8 intBytes8Again=-5556;//will give error

    bytes5 stringBytes="21123";

    address myAddress=0x7E7CcFB39B9D31D62cd9e2e066e0AaEA02543Cb4;
    address payableAddress=payable(0x7E7CcFB39B9D31D62cd9e2e066e0AaEA02543Cb4);
}
