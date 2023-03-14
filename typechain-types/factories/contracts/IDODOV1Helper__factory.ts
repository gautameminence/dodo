/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDODOV1Helper,
  IDODOV1HelperInterface,
} from "../../contracts/IDODOV1Helper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "dodoV1Pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "baseAmount",
        type: "uint256",
      },
    ],
    name: "querySellBaseToken",
    outputs: [
      {
        internalType: "uint256",
        name: "receivedQuoteAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dodoV1Pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quoteAmount",
        type: "uint256",
      },
    ],
    name: "querySellQuoteToken",
    outputs: [
      {
        internalType: "uint256",
        name: "receivedBaseAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IDODOV1Helper__factory {
  static readonly abi = _abi;
  static createInterface(): IDODOV1HelperInterface {
    return new utils.Interface(_abi) as IDODOV1HelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDODOV1Helper {
    return new Contract(address, _abi, signerOrProvider) as IDODOV1Helper;
  }
}
