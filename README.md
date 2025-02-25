# simple-storage-homework
A homework template for simple storage. You can remove parts of these to make homeworks for the semester.


# SimpleStorage Smart Contract

This homework contains a Solidity smart contract named `SimpleStorage` that demonstrates fundamental concepts of Ethereum smart contracts, such as state variables, functions, and struct management. Before you do this homework, make sure you understand how storage, memory, and calldata work in Ethereum. A good resource would be lecture slides. You can also read [this article](https://docs.alchemy.com/docs/when-to-use-storage-vs-memory-vs-calldata-in-solidity).

---

## Table of Contents
- [Contract Features](#contract-features)
- [Setup Instructions](#setup-instructions)
- [Running Tests](#running-tests)
- [Functions Overview](#functions-overview)
- [Testing Overview](#testing-overview)

---

## Contract Features

The `SimpleStorage` contract provides the following functionalities:

1. **State Variable Management**
   - `storedData` (string): A string variable initialized with "Initial Data".
   - `item` (struct): A struct containing `name` (string) and `value` (uint).

2. **String Operations**
   - Reverse a given string.
   - Concatenate `storedData` with calldata input.

3. **Struct Management**
   - Update `Item` struct values.
   - Reverse the `name` field of the `Item` struct.
   - Retrieve `Item` struct data.

---

## Setup Instructions

Follow these steps to set up the project:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Boiler-Blockchain/Homework-1-spring2025.git
   cd Homework-1-spring2025
   ```

2. **Install Dependencies**
   Ensure you have Node.js and npm installed. Then install the required packages:
   ```bash
   npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox chai
   ```

3. **Initialize Hardhat**
   If you haven't initialized a Hardhat project yet:
   ```bash
   npx hardhat
   ```
   Choose the default settings or configure as needed.

4. **Compile the Contract**
   ```bash
   npx hardhat compile
   ```

---

## Running Tests

To ensure the contract behaves as expected, a test suite is provided using the Hardhat framework. 

Run the tests with:
```bash
npx hardhat test
```

---

## Functions Overview

The `SimpleStorage` smart contract includes the following functions:

### **State Management**
| Function                | Description                              |
|-------------------------|------------------------------------------|
| `updateStoredData`      | Updates the `storedData` string.         |
| `storedData`            | Returns the current value of `storedData`.|

### **String Operations**
| Function                | Description                              |
|-------------------------|------------------------------------------|
| `reverseString`         | Reverses a given string.                 |
| `concatenateWithStoredData` | Concatenates `storedData` with input.    |

### **Struct Management**
| Function                | Description                              |
|-------------------------|------------------------------------------|
| `updateItem`            | Updates `Item` struct fields.            |
| `reverseName`           | Reverses the `name` in the `Item` struct.|
| `getItem`               | Returns the `Item` struct fields.        |

---

## Testing Overview

The tests are written in JavaScript with the `Hardhat` framework. They verify the following functionalities:

1. **Deployment Checks**
   - Initial values of `storedData` and `Item` struct are correct.

2. **State Updates**
   - `updateStoredData` updates the `storedData` value correctly.

3. **String Operations**
   - `reverseString` reverses input strings.
   - `concatenateWithStoredData` concatenates input with `storedData`.

4. **Struct Management**
   - `updateItem` updates the `Item` struct fields.
   - `reverseName` reverses the `name` in the `Item` struct.
   - `getItem` returns the correct struct data.

Run the tests using:
```bash
npx hardhat test
```

Example test output:
```
  SimpleStorage
    Deployment
      ✓ Should set the initial storedData correctly
      ✓ Should initialize the Item struct correctly
    Updating storedData
      ✓ Should update storedData correctly
    String Reversal
      ✓ Should reverse a given string correctly
    Concatenation with storedData
      ✓ Should concatenate storedData with calldata input correctly
    Struct Management (Item)
      ✓ Should update the Item struct correctly
      ✓ Should reverse the name in the Item struct
      ✓ Should return the correct Item struct data with getItem

  8 passing (2s)
```

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## Acknowledgments

Built with Hardhat, Chai, and Solidity.

---

Enjoy building!!!
