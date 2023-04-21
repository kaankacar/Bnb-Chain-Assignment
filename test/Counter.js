const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function() {
  it("should return the initial count of 0", async function() {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    expect(await counter.getCount()).to.equal(0);
  });

  it("should increment the count", async function() {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    await counter.increment();
    expect(await counter.getCount()).to.equal(1);
  });

  it("should add numbers", async function() {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    expect(await counter.add(5)).to.equal(5);
    expect(await counter.add(-10)).to.equal(-10);
    expect(await counter.add(0)).to.equal(0);
  });

  it("should multiply numbers", async function() {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    expect(await counter.multiply(5)).to.equal(0);
    expect(await counter.multiply(-2)).to.equal(0);
    expect(await counter.increment()).to.equal(1);
    expect(await counter.multiply(3)).to.equal(3);
  });

  it("should subtract numbers", async function() {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    expect(await counter.subtract(5)).to.equal(-5);
    expect(await counter.subtract(-10)).to.equal(5);
    expect(await counter.subtract(0)).to.equal(5);
  });

  it("should divide numbers", async function() {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    expect(await counter.divide(5)).to.equal(0);
    expect(await counter.increment()).to.equal(1);
    expect(await counter.divide(0)).to.equal(0);
    expect(await counter.divide(2)).to.equal(0);
  });

  it("should return all numbers", async function() {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    expect(await counter.getAllNums()).to.eql([0, 0, 0, 0]);

    await counter.add(5);
    await counter.multiply(2);
    await counter.subtract(1);
    await counter.divide(3);

    expect(await counter.getAllNums()).to.eql([5, 10, 4, 1]);
  });
});
