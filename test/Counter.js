const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  let counter;
  beforeEach(async () => {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.deployed();
  });

  it("should start with a count of 0", async function () {
    expect(await counter.getCount()).to.equal(0);
  });

  it("should increment count by 1", async function () {
    await counter.increment();
    expect(await counter.getCount()).to.equal(1);
  });

  it("should add two numbers together", async function () {
    await counter.add(5, 7);
    expect(await counter.addedNum()).to.equal(12);
  });

  it("should subtract one number from another", async function () {
    await counter.subtract(10, 4);
    expect(await counter.subtractedNum()).to.equal(6);
  });

  it("should multiply two numbers together", async function () {
    await counter.multiply(3, 8);
    expect(await counter.multipliedNum()).to.equal(24);
  });

  it("should divide one number by another", async function () {
    await counter.divide(20, 5);
    expect(await counter.dividedNum()).to.equal(4);
  });

  it("should not allow numbers less than or equal to 0", async function () {
    await expect(counter.add(0, 7)).to.be.revertedWith(
      "The numbers should be bigger than zero."
    );
    await expect(counter.add(5, 0)).to.be.revertedWith(
      "The numbers should be bigger than zero."
    );
  });
});
