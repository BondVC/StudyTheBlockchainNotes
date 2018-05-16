//https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/ownership/Ownable.sol
import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';

pragma solidity ^0.4.18;

contract Donate is Ownable{
    //The payable modifier represents the ability of this deposit() function to accept the ether that the message’s sender attached to a transaction message.
    //The function requires no explicit action to accept the attached ether—attached ether is implicitly transferred to the smart contract.
    function deposit(uint256 amount) payable public {
        //msg.value represents the ether that the message’s sender attached to a transaction message.
        require(msg.value == amount);
    }

    function getBalance() public view returns (uint256) {
        //this return's the contract's address
        // doing address.balance would return any address's balance
        return address(this).balance;
    }

    //One important property of smart contracts is that there is absolutely no way to withdraw ether from a contract other than through execution of some function that the contract exposes. There are no “backdoors” that can allow the contract author or deployer to withdraw ether without going through the contract’s exposed functions. This is one fundamental reason why a well-written contract can be trusted to handle ether on behalf of users—the users can see the code and, therefore, the means by which owned ether will be used by the contract.
    function withdraw() external onlyOwner{
        //always use transfer, don't use send when transferring ether out of a smart contract; because transfer will abort, send won't
        msg.sender.transfer(address(this).balance);
    }
}