// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Base{
    string public publicString='public String from Base';
    string private privateString='private String from Base';
    string internal internalString='Internal String in Base';
    string defaultInternal='default internal';  //internal visibility by default

    function externalFunction()external view returns(string memory){
        return internalString;
    }
    function internalFunction()internal view returns(string memory){
        return internalString;
    }
    function publicFunction()public view returns(string memory) {
        return privateString;
    }

    //string externalFunctionResult=externalFunction(); //this will give error
}
