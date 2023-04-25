// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Functions{
    uint luckyNum=5;

    function update(uint _num)public{
        luckyNum=_num;
    }
    function updateExtra(uint _num)public{ // this will cost more gas
        luckyNum=getLuckyNum()+_num;
    }
    
    function getLuckyNum()public view returns(uint){
        
        //luckyNum=0; //will give error
        return luckyNum;
    }
    function pureFunc(uint a,uint b)public pure returns(uint) {

        //return luckyNum; //will give error
        //return getLuckyNum(); //will give error
        return a+b;

    }
}