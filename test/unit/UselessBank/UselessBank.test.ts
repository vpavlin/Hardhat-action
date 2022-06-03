import { unitUselessBankFixture } from "../../shared/fixtures";
import { Mocks } from "../../shared/types";
import { shouldDeposit } from "./shouldDeposit.spec";

export function unitTestUselessBank() {
  describe("Burner", async () => {
    beforeEach("", async function () {
      const { bank, mockToken } = await this.loadFixture(
        unitUselessBankFixture
      );

      this.contracts = {
        ...this.contracts,
        bank: bank,
      };

      this.mocks = {
        token: mockToken,
      };
    });

    // #######################################################
    // INCOMPLETE TESTS FOR THE SAKE OF THIS BEING A TEMPLATE
    // #######################################################
    context("when the contract is deployed", async function () {
      //   shouldDeploy();
    });

    context("when the contract is deployed", async function () {
      shouldDeposit();
    });
  });
}
