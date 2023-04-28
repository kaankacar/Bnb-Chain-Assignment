// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Counter {
    uint public count;
    uint public addedNum;
    uint public dividedNum;
    uint public subtractedNum;
    uint public multipliedNum;

    function getCount() public view returns (uint) {
        return count;
    }

    function increment() public returns (uint) {
        count++;
        return count;
    }

    function add(uint num1, uint num2) public numbersGreaterThanZero(num1, num2) returns (uint) {
        addedNum = num1 + num2;
        return addedNum;
    }

    function multiply(uint num1, uint num2) public numbersGreaterThanZero(num1, num2) returns (uint) {
        multipliedNum = num1 * num2;
        return multipliedNum;
    }

    function subtract(uint num1, uint num2) public numbersGreaterThanZero(num1, num2) returns (uint) {
        subtractedNum = num1 - num2;
        return subtractedNum;
    }

    function divide(uint num1, uint num2) public numbersGreaterThanZero(num1, num2) returns (uint) {
        require(
            num2 != 0,
            "num2 is zero therefore num1 can't be divided by it"
        );
        dividedNum = num1 / num2;
        return dividedNum;
    }

    function getAllNums() public view returns (uint[] memory) {
        uint[] memory nums = new uint[](4);
        nums[0] = addedNum;
        nums[1] = multipliedNum;
        nums[2] = subtractedNum;
        nums[3] = dividedNum;
        return nums;
    }

    modifier numbersGreaterThanZero(uint num1, uint num2) {
        require(
            num1 > 0 && num2 > 0,
            "The numbers should be bigger than zero."
        );
        _;
    }
}
