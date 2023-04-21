import { ethers } from "hardhat";
import { expect } from "chai";
import {z} from 'zod'

//To test any contract, you need a combination of DESCRIBE and IT functions, both of which are built in functions


describe("RANDOM NUMBER TEST",function(){/* Describe_Function takes 2 arguments (a message/testName, function). if fuction goes ok, test passes */
    
    it("Deploy",async function(){
        const NumberFactory=await ethers.getContractFactory('Number2'); //Name must be same as your Contract Name in .sol file
        /* We load/copy the contract functionality into our NumberFactory variable */
        const NumberContract=await NumberFactory.deploy();
        /* Consider this like we create an object from a class */

        describe('Interacting with Contract',async function(){
            it("Set and Returned",async function (){/* Describe must include an it_function that also takes 2 arguments ('testName',async function), and it should end with an expect_function this is similar to an IF statement */

                NumberContract.setRandomNumber(Math.floor(Math.random()*10));
                /* Setting a random number in contract variable */
        
                let n=(await NumberContract.getRandomNumber()).toNumber();
                /* We get our value and convert it to number type (original return is BigNumber) */

                expect(n).to.be.an('number');
                /* we check to see if it is an number */
            })
        });

        
        describe('Number Range', function(){
            it('Number is between 0-5',async function () {
                let n=(await NumberContract.getRandomNumber()).toNumber();
                expect(n).to.be.below(6).and.to.be.above(-1);
            });
            it('Number is between 6-10',async function () {
                let n=(await NumberContract.getRandomNumber()).toNumber();
                expect(n).to.be.below(11).and.to.be.above(5);
            });
        });
    })
});