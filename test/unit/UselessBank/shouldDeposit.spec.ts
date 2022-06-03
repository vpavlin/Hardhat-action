import { expect } from "chai";
import { Wallet } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { ethers } from "hardhat";

// #######################################################
// INCOMPLETE TESTS FOR THE SAKE OF THIS BEING A TEMPLATE
// #######################################################
export const shouldDeposit = (): void => {
  context("#deposit", async function () {
    let caller: Wallet;
    let receiver: Wallet;

    before("", async function () {
      caller = this.signers.signerA;
      receiver = this.signers.signerB;
    });

    it("should successfully deposit authorized tokens", async function () {
      const toDeposit = parseEther("1");

      await this.contracts.bank
        .connect(caller)
        .deposit(this.mocks.token.address, toDeposit);

      expect(
        await this.contracts.bank.getBalanceOf(
          this.mocks.token.address,
          caller.address
        )
      ).to.equal(toDeposit);
    });
  });
};
