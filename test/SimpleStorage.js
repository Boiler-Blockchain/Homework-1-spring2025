const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("SimpleStorage", function () {
  // Fixture to deploy the contract and provide a clean state for each test
  async function deploySimpleStorageFixture() {
    // Get signers
    const [owner, otherAccount] = await ethers.getSigners();

    // Get contract factory and deploy
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy();

    return { simpleStorage, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the initial storedData correctly", async function () {
      const { simpleStorage } = await loadFixture(deploySimpleStorageFixture);

      expect(await simpleStorage.storedData()).to.equal("Initial Data");
    });

    it("Should initialize the Item struct correctly", async function () {
      const { simpleStorage } = await loadFixture(deploySimpleStorageFixture);

      const item = await simpleStorage.item();
      expect(item.name).to.equal("Default Item");
      expect(item.value).to.equal(42);
    });
  });

  describe("Updating storedData", function () {
    it("Should update storedData correctly", async function () {
      const { simpleStorage } = await loadFixture(deploySimpleStorageFixture);

      const newData = "Updated Data";
      await simpleStorage.updateStoredData(newData);

      expect(await simpleStorage.storedData()).to.equal(newData);
    });
  });

  describe("String Reversal", function () {
    it("Should reverse a given string correctly", async function () {
      const { simpleStorage } = await loadFixture(deploySimpleStorageFixture);

      const input = "hello";
      const expectedReversed = "olleh";

      expect(await simpleStorage.reverseString(input)).to.equal(expectedReversed);
    });
  });

  describe("Concatenation with storedData", function () {
    it("Should concatenate storedData with calldata input correctly", async function () {
      const { simpleStorage } = await loadFixture(deploySimpleStorageFixture);

      const extra = "Extra Data";
      const expectedResult = "Initial Data Extra Data";

      expect(await simpleStorage.concatenateWithStoredData(extra)).to.equal(
        expectedResult
      );
    });
  });

  describe("Struct Management (Item)", function () {
    it("Should update the Item struct correctly", async function () {
      const { simpleStorage } = await loadFixture(deploySimpleStorageFixture);

      const newName = "New Item Name";
      const newValue = 100;

      await simpleStorage.updateItem(newName, newValue);

      const item = await simpleStorage.item();
      expect(item.name).to.equal(newName);
      expect(item.value).to.equal(newValue);
    });

    it("Should reverse the name in the Item struct", async function () {
      const { simpleStorage } = await loadFixture(deploySimpleStorageFixture);

      const initialName = (await simpleStorage.item()).name;
      const expectedReversedName = initialName.split("").reverse().join("");

      await simpleStorage.reverseName();

      const item = await simpleStorage.item();
      expect(item.name).to.equal(expectedReversedName);
    });

    it("Should return the correct Item struct data with getItem", async function () {
      const { simpleStorage } = await loadFixture(deploySimpleStorageFixture);

      const itemData = await simpleStorage.getItem();
      expect(itemData[0]).to.equal("Default Item");
      expect(itemData[1]).to.equal(42);
    });
  });
});
