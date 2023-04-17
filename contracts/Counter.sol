// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Counter {
    uint public count;
    int public addedNum = 0;
    int public dividedNum = 0;
    int public subtractedNum = 0;
    int public multipliedNum = 0;
    function getCount() public view returns(uint){
        return count;
    }
    function increment() public returns(uint){
        count++;
        return count;
    }
    function add(int _addedNum) public returns(int){
        addedNum = int(count) + _addedNum;
        return addedNum;
    }
    function multiply(int _multipliedNum) public returns(int){
        multipliedNum = int(count) * _multipliedNum;
        return multipliedNum;
    }
    function subtract(int _subtractedNum) public returns(int){
        subtractedNum = int(count) - _subtractedNum;
        return subtractedNum;
    }
    function divide(int _dividedNum) public returns(int){
        dividedNum = int(count) / _dividedNum;
        return dividedNum;
    }
    function getAllNums() public view returns(string memory){
       string memory result = string(abi.encodePacked(
        "Added number is ", addedNum.toString(),
        ", Multiplied number is ", multipliedNum.toString(),
        ", Subtracted number is ", subtractedNum.toString(),
        ", Divided number is ", dividedNum.toString()));
    return result;
    }
}