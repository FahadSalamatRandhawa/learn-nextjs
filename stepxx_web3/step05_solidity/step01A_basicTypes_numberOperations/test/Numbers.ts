import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe('Number Operations',function (){
  async function contractInstance(){
    const factory=await ethers.getContractFactory('Numbers');
    const Numbers=await factory.deploy();

    return {Numbers}
  }
  describe('Binary Operations',function(){
    it('&',async function(){
      const {Numbers}=await loadFixture(contractInstance);
      let res=await Numbers.binaryAND();
      console.log(res);
    })
    it('|',async function(){
      const {Numbers}=await loadFixture(contractInstance);
      let res=await Numbers.binaryOR();
      console.log(res);
    })
    it('^',async function(){
      const {Numbers}=await loadFixture(contractInstance);
      let res=await Numbers.binaryXOR();
      console.log(res);
    })
    it('~',async function(){
      const {Numbers}=await loadFixture(contractInstance);
      let res=await Numbers.binaryNOT();
      console.log(res);
    })
  });

  describe('Shift Operations',function(){
    it('int <<',async function(){
      const {Numbers}=await loadFixture(contractInstance);
      let res=await Numbers.shiftLeftInt();
      console.log(res);
    })
    it('Uint <<',async function(){
      const {Numbers}=await loadFixture(contractInstance);
      let res=await Numbers.shiftLeftUint();
      console.log(res);
    })
    it('int >>',async function(){
      const {Numbers}=await loadFixture(contractInstance);
      let res=await Numbers.shiftRightInt();
      console.log(res);
    })
    it('Uint >>',async function(){
      const {Numbers}=await loadFixture(contractInstance);
      let res=await Numbers.shiftRightUint();
      console.log(res);
    })
  })
})
