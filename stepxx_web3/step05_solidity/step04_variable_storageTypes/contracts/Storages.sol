// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Storages {
    uint tempVariable;
    string tempString;
    
    
    //following will give error, same for storage and calldata
    /**  
    function setVariable(uint memory _value)public{
        tempVariable=_value;
    }
     */

    //using storage with string parameter will also give error
    function setString(string memory _temp)public{
        _temp='updated this';
        tempString=_temp;
    }

    function setString_CallData(string calldata _temp)public{
        // _temp='newer string'; //will give error
        tempString=_temp;
    }
}
