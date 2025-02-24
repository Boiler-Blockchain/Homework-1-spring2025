// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleStorage {
    // This is stored in storage. It costs gas to read and write to storage. Public variables in a smart contract are also called state variables since they define the state of a smart contract on the blockchain.
    string public storedData;

    // Struct for simple data grouping. Understand that this is a type definition and does not create a new instance of the struct.
    struct Item {
        string name;
        uint256 value;
    }

    Item public item; // Stored in storage

    // Constructor to initialize the struct and storedData. Think of this as a Java constructor. It runs only once when the contract is deployed. It is optional to have a constructor.
    constructor() {
        storedData = "Initial Data";
        item = Item("Default Item", 42);
    }

    // Update storedData (Storage example)
    function updateStoredData(string memory newData) public {
        storedData = newData;
    }

    // Return a reversed string (Memory example)
    function reverseString(string memory input) public pure returns (string memory) {
        bytes memory strBytes = bytes(input);
        bytes memory reversed = new bytes(strBytes.length);

        for (uint256 i = 0; i < strBytes.length; i++) {
            reversed[i] = strBytes[strBytes.length - 1 - i];
        }

        return string(reversed);
    }

    // Concatenate with storedData (Calldata example)
    function concatenateWithStoredData(string calldata extra) external view returns (string memory) {
        return string(abi.encodePacked(storedData, " ", extra));
    }

    // Setter for the struct
    function updateItem(string memory newName, uint256 newValue) public {
        item.name = newName;
        item.value = newValue;
    }

    // Getter for the struct
    function getItem() public view returns (string memory, uint256) {
        return (item.name, item.value);
    }

    function reverseName() public {
        item.name = reverseString(item.name);
    }
}
