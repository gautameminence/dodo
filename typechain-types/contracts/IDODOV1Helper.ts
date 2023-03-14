/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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

export interface IDODOV1HelperInterface extends utils.Interface {
  functions: {
    "querySellBaseToken(address,uint256)": FunctionFragment;
    "querySellQuoteToken(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "querySellBaseToken" | "querySellQuoteToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "querySellBaseToken",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "querySellQuoteToken",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "querySellBaseToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "querySellQuoteToken",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IDODOV1Helper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDODOV1HelperInterface;

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
    querySellBaseToken(
      dodoV1Pool: PromiseOrValue<string>,
      baseAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { receivedQuoteAmount: BigNumber }>;

    querySellQuoteToken(
      dodoV1Pool: PromiseOrValue<string>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { receivedBaseAmount: BigNumber }>;
  };

  querySellBaseToken(
    dodoV1Pool: PromiseOrValue<string>,
    baseAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  querySellQuoteToken(
    dodoV1Pool: PromiseOrValue<string>,
    quoteAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    querySellBaseToken(
      dodoV1Pool: PromiseOrValue<string>,
      baseAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    querySellQuoteToken(
      dodoV1Pool: PromiseOrValue<string>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    querySellBaseToken(
      dodoV1Pool: PromiseOrValue<string>,
      baseAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    querySellQuoteToken(
      dodoV1Pool: PromiseOrValue<string>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    querySellBaseToken(
      dodoV1Pool: PromiseOrValue<string>,
      baseAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    querySellQuoteToken(
      dodoV1Pool: PromiseOrValue<string>,
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
