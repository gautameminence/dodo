/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface DODOFlashloanInterface extends utils.Interface {
  functions: {
    "DPPFlashLoanCall(address,uint256,uint256,bytes)": FunctionFragment;
    "DSPFlashLoanCall(address,uint256,uint256,bytes)": FunctionFragment;
    "DVMFlashLoanCall(address,uint256,uint256,bytes)": FunctionFragment;
    "dodoFlashLoan(address,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DPPFlashLoanCall"
      | "DSPFlashLoanCall"
      | "DVMFlashLoanCall"
      | "dodoFlashLoan"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DPPFlashLoanCall",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "DSPFlashLoanCall",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "DVMFlashLoanCall",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "dodoFlashLoan",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "DPPFlashLoanCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DSPFlashLoanCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DVMFlashLoanCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dodoFlashLoan",
    data: BytesLike
  ): Result;

  events: {
    "checkBorrowedAmount(address,uint256)": EventFragment;
    "payBackLoan(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "checkBorrowedAmount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "payBackLoan"): EventFragment;
}

export interface checkBorrowedAmountEventObject {
  token: string;
  amount: BigNumber;
}
export type checkBorrowedAmountEvent = TypedEvent<
  [string, BigNumber],
  checkBorrowedAmountEventObject
>;

export type checkBorrowedAmountEventFilter =
  TypedEventFilter<checkBorrowedAmountEvent>;

export interface payBackLoanEventObject {
  token: string;
  amount: BigNumber;
}
export type payBackLoanEvent = TypedEvent<
  [string, BigNumber],
  payBackLoanEventObject
>;

export type payBackLoanEventFilter = TypedEventFilter<payBackLoanEvent>;

export interface DODOFlashloan extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DODOFlashloanInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DPPFlashLoanCall(
      sender: PromiseOrValue<string>,
      baseAmount: PromiseOrValue<BigNumberish>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    DSPFlashLoanCall(
      sender: PromiseOrValue<string>,
      baseAmount: PromiseOrValue<BigNumberish>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    DVMFlashLoanCall(
      sender: PromiseOrValue<string>,
      baseAmount: PromiseOrValue<BigNumberish>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dodoFlashLoan(
      flashLoanPool: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      loanToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  DPPFlashLoanCall(
    sender: PromiseOrValue<string>,
    baseAmount: PromiseOrValue<BigNumberish>,
    quoteAmount: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  DSPFlashLoanCall(
    sender: PromiseOrValue<string>,
    baseAmount: PromiseOrValue<BigNumberish>,
    quoteAmount: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  DVMFlashLoanCall(
    sender: PromiseOrValue<string>,
    baseAmount: PromiseOrValue<BigNumberish>,
    quoteAmount: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dodoFlashLoan(
    flashLoanPool: PromiseOrValue<string>,
    loanAmount: PromiseOrValue<BigNumberish>,
    loanToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DPPFlashLoanCall(
      sender: PromiseOrValue<string>,
      baseAmount: PromiseOrValue<BigNumberish>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    DSPFlashLoanCall(
      sender: PromiseOrValue<string>,
      baseAmount: PromiseOrValue<BigNumberish>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    DVMFlashLoanCall(
      sender: PromiseOrValue<string>,
      baseAmount: PromiseOrValue<BigNumberish>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    dodoFlashLoan(
      flashLoanPool: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      loanToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "checkBorrowedAmount(address,uint256)"(
      token?: null,
      amount?: null
    ): checkBorrowedAmountEventFilter;
    checkBorrowedAmount(
      token?: null,
      amount?: null
    ): checkBorrowedAmountEventFilter;

    "payBackLoan(address,uint256)"(
      token?: null,
      amount?: null
    ): payBackLoanEventFilter;
    payBackLoan(token?: null, amount?: null): payBackLoanEventFilter;
  };

  estimateGas: {
    DPPFlashLoanCall(
      sender: PromiseOrValue<string>,
      baseAmount: PromiseOrValue<BigNumberish>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    DSPFlashLoanCall(
      sender: PromiseOrValue<string>,
      baseAmount: PromiseOrValue<BigNumberish>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    DVMFlashLoanCall(
      sender: PromiseOrValue<string>,
      baseAmount: PromiseOrValue<BigNumberish>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dodoFlashLoan(
      flashLoanPool: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      loanToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DPPFlashLoanCall(
      sender: PromiseOrValue<string>,
      baseAmount: PromiseOrValue<BigNumberish>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    DSPFlashLoanCall(
      sender: PromiseOrValue<string>,
      baseAmount: PromiseOrValue<BigNumberish>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    DVMFlashLoanCall(
      sender: PromiseOrValue<string>,
      baseAmount: PromiseOrValue<BigNumberish>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dodoFlashLoan(
      flashLoanPool: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      loanToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
