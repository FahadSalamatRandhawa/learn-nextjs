// SPDX-License-Identifier: MIT
 /* the license tells other what can and cannot be done with your code, the SPDX-License-Identifier, is machine readable and the MIT is the license name, MIT license allows anyone without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software */

 pragma solidity ^0.8.9;  /*tells the compiler code is written in version of solidity equal to or greather than 0.8.9 */
 import 'hardhat/console.sol';

 contract StringrContract {
    /* variables declared outside functions are State Variables */
    uint private randomNumber;  /* uint can only hold positive values inclding 0, its type is bigNumber */
    string private tempString='Default String';

    /* Tip : consle.log(tempNumber) will give error */

    constructor(){
        randomNumber=0;
    }
    function setRandomNumber(uint random_Number)external{
        randomNumber=random_Number;
        
        console.log(randomNumber, 'assigned to contract INSIDE CONTRACT');
    }
    function setString(string memory temp_String) public{
        tempString=temp_String;
        console.log('new string : ',tempString);
    }
    
    function getRandomNumber() external view returns (uint){  /* view functions can only read and return values of state variables */
        //console.log('Returning Number');
        uint temp=5;
        temp=0;
        return randomNumber;
    }
    function getString() public view returns(string memory){
        return tempString;
    }

    /* the above 2 functions are very simpler setter and getter functions, external is a reserved keywords that 
    ensures this function can only be called from outside the contract*/
 }