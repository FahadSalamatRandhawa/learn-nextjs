// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Mapping {
    mapping(string=>string) public favouriteFoods;

    function addFavouriteFood(string memory _name,string memory _food)public {
        favouriteFoods[_name]=_food;
    }
    function getFavFood(string memory _name) public view returns (string memory) {
        return favouriteFoods[_name];
    }
}
