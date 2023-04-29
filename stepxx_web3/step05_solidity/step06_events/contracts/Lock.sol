// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Chat{
    string message;

    event changedBy(address indexed sender,string oldMessage,string message);
    event readBy(address indexed sender);

    function sendMessage(string calldata newMessage) public{
        emit changedBy(msg.sender,message,newMessage);

        message=newMessage;
    }

    function getMessage()public returns(string memory){  //we cannot make it VIEW function because event emitted will cost gas as it writes to blockchain, but we will know who read the data
        emit readBy(msg.sender);

        return message;
    }
}