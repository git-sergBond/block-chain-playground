// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.25 <0.9.0;

contract Pool {
    event Voted(
        address _voter,
        uint _value
    );

    uint[] proposals;
    mapping(address => uint) votes;

    string poolSubject;

    constructor(uint proposalCount, string memory subject) {
        proposals = new uint[](proposalCount);
        poolSubject = subject;
    }

    function getPool() public view returns (string memory) {
       return poolSubject;
    }

    function vote(uint selection) public {
        emit Voted(msg.sender, selection);
        
        require (votes[msg.sender] == 0);
        require (selection > 0 && selection <= proposals.length);

        votes[msg.sender] = selection;
        proposals[selection]++;
    }

    function getResult() public view returns (uint winningProposal) {
        uint winningVoteCount = 0;
        for (uint prop = 0; prop < proposals.length; prop++) {
            uint voteCount = proposals[prop];
            if (voteCount > winningVoteCount) {
                winningVoteCount = voteCount;
                winningProposal = prop;
            }
        }
    }
}