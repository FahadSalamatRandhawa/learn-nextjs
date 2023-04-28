// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Numbers{
    int8 intA=-5;
    int  intB=8;

    uint shiftAUint=6;
    int shiftAInt=-6;

    uint8 public uintA=60;// 0011 1100
    uint public uintB=13;// 0000 1101

    //Binary Operations
    function binaryAND() public view returns(uint){ 
        return (uintA & uintB);
    }
    function binaryOR() public view returns(uint){ 
        return (uintA | uintB);
    }
    function binaryXOR() public view returns(uint){ 
        return (uintA ^ uintB);
    }
    function binaryNOT() public view returns(uint){ 
        return (~uintA);
    }

    function shiftLeftInt()public view returns(int) {
        return shiftAInt<<2;
    }
    function shiftLeftUint()public view returns(uint) {
        return shiftAUint<<2;
    }

    //Shift Operations
    function shiftRightInt()public view returns(int){
        return shiftAInt>>2;
    }
    function shiftRightUint()public view returns(uint){
        return shiftAUint>>2;
    }
}