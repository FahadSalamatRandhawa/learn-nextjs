import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe('Base Contract',function(){
  async function BaseContract() {
    let Contract=await ethers.getContractFactory('Base');
    let Base=await Contract.deploy();
    return {Base}
  }
  it('Base Public String',async function () {
    let {Base}=await loadFixture(BaseContract);
    let basePublic=await Base.publicString();
    expect(basePublic).to.be.an('string');
  })
  it('Base Public Function',async function () {
    let {Base}=await loadFixture(BaseContract);
    let basePublic=await Base.publicFunction();
    expect(basePublic).to.be.an('string');
  })
  it(`Base External Function`,async function () {
    let {Base}=await loadFixture(BaseContract);
    let baseExternal=await Base.externalFunction();
    expect(baseExternal).to.be.an('string');
  })
});
describe('Child Contract',function(){
  async function childContract() {
    let childContract=await ethers.getContractFactory('Child');
    let Child=await childContract.deploy();
    return {Child}
  }
  it('Child Variable=Result of Base Public Function',async function (){
    let {Child}=await loadFixture(childContract)
    let childPublic=await Child.resultofBasePublicFunction();
    expect(childPublic).to.be.an('string');
  });
  it('Child external function returning Parent Internal string',async function (){
    let {Child}=await loadFixture(childContract)
    let childPublic=await Child.childReturnsParentsInternalString();
    expect(childPublic).to.be.an('string');
  })
})