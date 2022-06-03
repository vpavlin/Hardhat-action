import { MockContract } from "ethereum-waffle";
import { Wallet } from "ethers";
import { waffle } from "hardhat";
import { TestToken__factory } from "../../typechain-types";

export async function deployMockToken(deployer: Wallet): Promise<MockContract> {
  const token = await waffle.deployMockContract(
    deployer,
    TestToken__factory.abi
  );

  // Set up function mocks
  await token.mock.transferFrom.returns(true);

  return token;
}
