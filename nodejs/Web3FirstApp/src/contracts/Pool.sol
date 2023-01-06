// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.25 <0.9.0;

contract Pool {
    event Voted(
        address _voter,
        uint _value
    );

    mapping(address => uint) public votes;

    string poolSubject = "Coffee??? 1- YES / 2 - NO";

    function getPool() public view returns (string memory) {
       return poolSubject;
    }

    function vote(uint selection) public {
        emit Voted(msg.sender, selection);
        
        require (votes[msg.sender] == 0);
        require (selection > 0 && selection <=2);

        votes[msg.sender] = selection;
    }
}