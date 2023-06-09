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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface IDODOInterface extends utils.Interface {
  functions: {
    "_BASE_RESERVE_()": FunctionFragment;
    "_BASE_TOKEN_()": FunctionFragment;
    "_QUOTE_RESERVE_()": FunctionFragment;
    "_QUOTE_TOKEN_()": FunctionFragment;
    "flashLoan(uint256,uint256,address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_BASE_RESERVE_"
      | "_BASE_TOKEN_"
      | "_QUOTE_RESERVE_"
      | "_QUOTE_TOKEN_"
      | "flashLoan"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_BASE_RESERVE_",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_BASE_TOKEN_",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_QUOTE_RESERVE_",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_QUOTE_TOKEN_",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "flashLoan",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "_BASE_RESERVE_",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_BASE_TOKEN_",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_QUOTE_RESERVE_",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_QUOTE_TOKEN_",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;

  events: {};
}

export interface IDODO extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDODOInterface;

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
    _BASE_RESERVE_(overrides?: CallOverrides): Promise<[BigNumber]>;

    _BASE_TOKEN_(overrides?: CallOverrides): Promise<[string]>;

    _QUOTE_RESERVE_(overrides?: CallOverrides): Promise<[BigNumber]>;

    _QUOTE_TOKEN_(overrides?: CallOverrides): Promise<[string]>;

    flashLoan(
      baseAmount: PromiseOrValue<BigNumberish>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      assetTo: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _BASE_RESERVE_(overrides?: CallOverrides): Promise<BigNumber>;

  _BASE_TOKEN_(overrides?: CallOverrides): Promise<string>;

  _QUOTE_RESERVE_(overrides?: CallOverrides): Promise<BigNumber>;

  _QUOTE_TOKEN_(overrides?: CallOverrides): Promise<string>;

  flashLoan(
    baseAmount: PromiseOrValue<BigNumberish>,
    quoteAmount: PromiseOrValue<BigNumberish>,
    assetTo: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _BASE_RESERVE_(overrides?: CallOverrides): Promise<BigNumber>;

    _BASE_TOKEN_(overrides?: CallOverrides): Promise<string>;

    _QUOTE_RESERVE_(overrides?: CallOverrides): Promise<BigNumber>;

    _QUOTE_TOKEN_(overrides?: CallOverrides): Promise<string>;

    flashLoan(
      baseAmount: PromiseOrValue<BigNumberish>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      assetTo: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    _BASE_RESERVE_(overrides?: CallOverrides): Promise<BigNumber>;

    _BASE_TOKEN_(overrides?: CallOverrides): Promise<BigNumber>;

    _QUOTE_RESERVE_(overrides?: CallOverrides): Promise<BigNumber>;

    _QUOTE_TOKEN_(overrides?: CallOverrides): Promise<BigNumber>;

    flashLoan(
      baseAmount: PromiseOrValue<BigNumberish>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      assetTo: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _BASE_RESERVE_(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _BASE_TOKEN_(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _QUOTE_RESERVE_(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _QUOTE_TOKEN_(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    flashLoan(
      baseAmount: PromiseOrValue<BigNumberish>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      assetTo: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
