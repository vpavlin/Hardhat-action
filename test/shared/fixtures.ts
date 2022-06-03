import { Fixture, MockContract } from "ethereum-waffle";
import { Wallet } from "ethers";
import { ethers } from "hardhat";
import { UselessBank, UselessBank__factory } from "../../typechain-types";
import { deployMockToken } from "./mocks";

type unitUselessBankFixtureType = {
  bank: UselessBank;
  mockToken: MockContract;
};

export const unitUselessBankFixture: Fixture<
  unitUselessBankFixtureType
> = async (signers: Wallet[]) => {
  const deployer: Wallet = signers[0];

  const Bank = await ethers.getContractFactory("UselessBank");

  const bank = (await Bank.connect(deployer).deploy()) as UselessBank;
  await bank.deployed();

  const mockToken = await deployMockToken(deployer);

  await bank.connect(deployer).authorizeToken(mockToken.address, true);

  return { bank, mockToken };
};
