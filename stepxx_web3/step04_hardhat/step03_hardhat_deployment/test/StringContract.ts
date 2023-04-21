import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";
import { expect } from "chai";

//To test any contract, you need a combination of DESCRIBE and IT functions, both of which are built in functions


describe("Load Fixture",function(){/* Describe_Function takes 2 arguments (a message/testName, function). if fuction goes ok, test passes */
    
    
        async function ContractInstance() {
            const StringrFactory=await ethers.getContractFactory('StringrContract'); //Name must be same as your Contract Name in .sol file
            /* Get the Contract Copy */
            const StringrContract=await StringrFactory.deploy();
            /* Turn it into Instance */

            return {StringrContract};
        }

        describe('First Interaction',async function(){
            it("Set String",async function (){
                const {StringrContract}=await loadFixture(ContractInstance);
                StringrContract.setString('updated String');

                let temp=await StringrContract.getString();
                expect(temp).to.be.an('string');
                /* we check to see if it is an string */
            })
        });

        
        describe('Second Interaction', function(){
            it('Get string',async function () {
                const {StringrContract}=await loadFixture(ContractInstance);
                let string=await StringrContract.getString();
                console.log(string,'inside test file');

                expect(string).to.be.an('string');
            })
        });
  
});