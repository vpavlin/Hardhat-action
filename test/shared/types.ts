import { Fixture, MockContract } from "ethereum-waffle";
import { Wallet } from "@ethersproject/wallet";
import { UselessBank } from "../../typechain-types";

declare module "mocha" {
  export interface Context {
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
    contracts: Contracts;
    mocks: Mocks;
  }
}

export interface Signers {
  deployer: Wallet;
  signerA: Wallet;
  signerB: Wallet;
  signerC: Wallet;
}

export interface Contracts {
  bank: UselessBank;
}

export interface Mocks {
  token: MockContract;
}
