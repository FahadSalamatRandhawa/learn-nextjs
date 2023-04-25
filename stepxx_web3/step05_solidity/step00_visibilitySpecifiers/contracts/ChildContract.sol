// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import './Base.sol';

contract Child is Base{
    string public resultofBasePublicFunction=publicFunction();
    string resultofParentInternalFunction=defaultInternal;  //from Parent to Child
    //string copyBasePrivateString=privateString; // this will give error


    function childReturnsParentsInternalString()external view returns(string memory){
        return internalString;  //from parent
    }
    //string externalFunctionResult=externalFunction(); //this will give error
}