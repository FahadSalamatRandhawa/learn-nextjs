// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Voters{

    struct Voter{
        string name;
        uint Vote;
    }

    //Dynamic Array
    Voter[] public VoterList;
    constructor(){
        VoterList.push(Voter('Default',0));
    }
    function addPeople(string memory _name,uint _vote)public{
        VoterList.push(Voter(_name,_vote));
    }
    function getVoters()public view returns(Voter[] memory){
        return VoterList;
    }
}