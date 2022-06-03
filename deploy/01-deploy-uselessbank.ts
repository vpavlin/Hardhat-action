import { network } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  networks,
  VERIFICATION_BLOCK_CONFIRMATIONS,
} from "../utils/utils-hardhat-config";
import verify from "../utils/scripts/verify";

const deployUselessBank: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
}: HardhatRuntimeEnvironment) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const chainId = network.config.chainId as number;

  const isLocalDev = networks[chainId].config.isLocalDev;

  let tokenAddress;
  if (isLocalDev) {
    const mockToken = await deployments.get("TestToken");
    tokenAddress = mockToken.address;
  } else {
    tokenAddress = networks[chainId].contracts.tokens.token;
  }

  const args: any[] = [
    //tokenAddress
  ];

  const bank = await deploy("UselessBank", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: VERIFICATION_BLOCK_CONFIRMATIONS || 1,
  });

  if (!isLocalDev) {
    await verify(bank.address, args);
  }

  log(tokenAddress);
};

export default deployUselessBank;

deployUselessBank.tags = ["all", "uselessbank"];
