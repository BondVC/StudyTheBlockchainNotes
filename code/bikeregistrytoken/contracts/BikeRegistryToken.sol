pragma solidity ^0.4.17;

import 'openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract BikeRegistryToken is StandardToken {
    address public contractAddress;
    address public bikeStoreAddress;
    string public name = "BikeRegistryToken";
    string public symbol = "BRT";
    uint public INITIAL_SUPPLY = 2000;

    struct Bike {
        address renter_address;
        string rental_date;
        uint256 id;
    }

    uint public nextBikeNum;

    uint256[] bikeIds;
    mapping(uint => Bike) bikes;

    // constructor
    function BikeRegistryToken() {
        bikeStoreAddress = msg.sender;
        balances[bikeStoreAddress] = INITIAL_SUPPLY;
        contractAddress = address(this);

				newBikeRental(bikeStoreAddress, "today");
				newBikeRental(bikeStoreAddress, "today");
				newBikeRental(bikeStoreAddress, "today");
    }

    modifier onlyStoreCanRegister(address renter_address) {
        require(renter_address == bikeStoreAddress);
        _;
    }

    modifier onlyOwnerCanTransfer(uint idOfBikeToTransferOwnership) {
        require(msg.sender == bikes[idOfBikeToTransferOwnership].renter_address);
        _;
    }

    function newBikeRental(address renter_address, string date) public returns(uint bikeId) {

        require(renter_address != address(0) && bytes(date).length > 0 && bytes(date).length < 30);

        uint bike_id = nextBikeNum++;

        bikeIds.push(bike_id);

        bikes[bike_id] = Bike(renter_address, date, bike_id);

        transferOwnershipOfBike(bike_id, 1);

				return bike_id;
    }

    // QUESTION: how to return arbitrary lenght tuple of however many bikes owned by an address?
    // currently assuming only a one to one relationship between bikes and addresses
    function viewBikeOwnedByAddress(address addr) view public returns (uint256 id) {

        for (uint i = 0; i < bikeIds.length; i++) {
            if (bikes[i].renter_address == addr) {
                return i;
            }
        }
    }

    function transferOwnershipOfBike(uint idOfBikeToTransferOwnership, uint _amount) onlyOwnerCanTransfer(idOfBikeToTransferOwnership) public {
        require(idOfBikeToTransferOwnership <= bikeIds.length);

        bikes[idOfBikeToTransferOwnership].renter_address = msg.sender;
        balances[contractAddress] -= _amount;
        balances[msg.sender] += _amount;
    }
}
