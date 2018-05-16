pragma solidity ^0.4.18;

contract Voting {

  mapping (bytes32 => uint8) public votesReceived;
  bytes32[] public candidateList;
  address owner;

  function Voting() {
    owner = msg.sender;

    candidateList.push('Nick West');
    candidateList.push('Nick Vincent');
    candidateList.push('Tyler Rosen');
    candidateList.push('Rich Budek');
    candidateList.push('Mike Salim');
    candidateList.push('Mario Bajric');
    candidateList.push('Edward Yu');
    candidateList.push('Francois Julien Alcaraz');
    candidateList.push('Joshua Hudson');
    candidateList.push('Marc Stephen Soto');
    candidateList.push('Patrick Loughrey');
    candidateList.push('Young Joong Kim');
  }

  function addCandidate(bytes32 cand){
    require(msg.sender == owner);
    candidateList.push(cand);
  }

  function getCandidateListLen() public view returns (uint256) {
      return candidateList.length;
  }

  function totalVotesFor(bytes32 candidate) view public returns (uint8) {
    require(validCandidate(candidate));
    return votesReceived[candidate];
  }

  function voteForCandidate(bytes32 candidate) public {
    require(validCandidate(candidate));
    votesReceived[candidate] += 1;
  }

  function validCandidate(bytes32 candidate) view public returns (bool) {
    for(uint i = 0; i < candidateList.length; i++) {
      if (candidateList[i] == candidate) {
        return true;
      }
    }
    return false;
   }
}
