import { ethers } from "hardhat";
import { expect } from "chai";
import {z} from 'zod'

//To test any contract, you need a combination of describe and it functions, both of which are built in functions


describe("Random Number Test",async function(){
/* Describe_Function takes 2 arguments (a message/testName, async function). If the function does not fail the test also passes */

    it("Contract returns a number",async function (){
        /* The async fuction must include an it_function that also takes 2 arguments like Describe_Function, and it must also end with an expect_function
    this is similar to an IF statement */
        
        const NumberFactory=await ethers.getContractFactory('Number2'); //Name must be same as your Contract Name in .sol file
         /* We load/copy the contract functionality into our NumberFactory variable */

        
        const NumberContract=await NumberFactory.deploy();
        /* Consider this like we create an object from a class */

        
        NumberContract.setRandomNumber(Math.floor(Math.random()*10));
        /* Setting a random number in contract variable */

        let n=(await NumberContract.getRandomNumber()).toNumber();
        /* We get our value and convert it to number type */
        expect(n).to.be.an('number');
        /* we check to see if it is an number */
    })
});