# Learning Solidity Essentials

In this directory we will create baby steps following this Text Book (Chapter 3 and onwards):

[Solidity Programming Essentials: A guide to building smart contracts and tokens using the widely used Solidity language, 2nd Edition](https://www.amazon.com/Solidity-Programming-Essentials-building-contracts/dp/1803231181/ref=sr_1_2_sspa)

Each step will be a hardhat project including tests and deployment scripts.

You can also take help from this [repo](https://github.com/panaverse/defi-dapps-solidity-smart-contracts)

## Solidity Basics
Solidity is a language that is very smiliar to C++ or most backend languages, and like those languguages it has functions, variable Types,enums and such. Followin is the structure of a solidity Smart Contract.
A Solidity Contracts file has the extension *.sol (*being filename)
```
// SPDX-License-Identifier: GPL-3.0 //License for the code

pragma solidity >=0.8.2 <0.9.0; //version of soldity used

contract Storage {

    uint256 number; //State Variable also known as global variable in TypeScript

    //Setter and Getter functions

    function store(uint256 num) public { 
        number = num;
    }

    function retrieve() public view returns (uint256){
        return number;
    }
}
```


- You may have noticed the Solidity Contracts look a lot like Classes in OOP(Object Oriented Programing), and that is very much how they behave.

- `License`, a license in solidity code tells the readers of the code, what can or cannot be done with the CODE, the 
license identifier line is commented out, so it is not treated as code
- `State Variable` a state variable is similar to a data member in a class,it can be called a global variable for a Contract
- `functions` just like any class, contracts have functions of several types, which we will discuss in detail in the steps

>Tip: Always compile your contract after making changes to it, only then will it work properly in the tests/deployments