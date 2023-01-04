// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.4.0;

/**
 * @title Ballot
 * @dev Implements voting process along with vote delegation
 */
contract HelloWorld {
    string message;

    constructor () {
        message = "Hello World";
    }

    function Hello() constant returns (string) {
        return message;
    }
}
