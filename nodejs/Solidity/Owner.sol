// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

/**
 * @title Ballot
 * @dev Implements voting process along with vote delegation
 */
contract Owner {

    //статические переменные
    uint256 data;
    address owner;

    //обьявление собыбтия
    event logData(uint256 dataToLog);


    modifier onlyOwner() {
        if (msg.sender == owner) _;
    }

}
