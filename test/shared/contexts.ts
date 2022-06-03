import { waffle } from "hardhat";
import { Signers } from "./types";
import { MockProvider } from "ethereum-waffle";

export function baseContext(description: string, hooks: () => void) {
  describe(description, async function () {
    before("Set up signers", async function () {
      const signers = waffle.provider.getWallets();

      this.signers = {} as Signers;
      this.signers.deployer = signers[0];
      this.signers.signerA = signers[1];
      this.signers.signerB = signers[2];
      this.signers.signerC = signers[3];

      this.loadFixture = waffle.createFixtureLoader(signers);
    });

    hooks();
  });
}
