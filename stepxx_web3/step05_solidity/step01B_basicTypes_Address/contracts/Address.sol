// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Address{
    address owner=address(0xa2dD817c2fDc3a2996f1A5174CF8f1AaED466E82);
    uint public oBalance=owner.balance;
    
    //address payable myPayable1=owner; //error
    address payable myPayable=payable(owner); //ok
    uint public pBalance=myPayable.balance;

    address myAddress=myPayable;  //this will convert the address to non-payable
    uint public mBalance=myAddress.balance;

    //bool t=owner.send(10);  //error
    //bool res=myAddress.transfer(20); //error
    function sendETH(uint ETH)public{
        myPayable.transfer(ETH);
    }
}