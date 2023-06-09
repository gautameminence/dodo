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

export interface DODOProxyIntegrateInterface extends utils.Interface {
  functions: {
    "useDodoSwapV1()": FunctionFragment;
    "useDodoSwapV2(address,address,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "useDodoSwapV1" | "useDodoSwapV2"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "useDodoSwapV1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "useDodoSwapV2",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "useDodoSwapV1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "useDodoSwapV2",
    data: BytesLike
  ): Result;

  events: {};
}

export interface DODOProxyIntegrate extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DODOProxyIntegrateInterface;

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
    useDodoSwapV1(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    useDodoSwapV2(
      fromToken: PromiseOrValue<string>,
      toToken: PromiseOrValue<string>,
      fromTokenAmount: PromiseOrValue<BigNumberish>,
      dodoV2Pool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  useDodoSwapV1(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  useDodoSwapV2(
    fromToken: PromiseOrValue<string>,
    toToken: PromiseOrValue<string>,
    fromTokenAmount: PromiseOrValue<BigNumberish>,
    dodoV2Pool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    useDodoSwapV1(overrides?: CallOverrides): Promise<void>;

    useDodoSwapV2(
      fromToken: PromiseOrValue<string>,
      toToken: PromiseOrValue<string>,
      fromTokenAmount: PromiseOrValue<BigNumberish>,
      dodoV2Pool: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    useDodoSwapV1(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    useDodoSwapV2(
      fromToken: PromiseOrValue<string>,
      toToken: PromiseOrValue<string>,
      fromTokenAmount: PromiseOrValue<BigNumberish>,
      dodoV2Pool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    useDodoSwapV1(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    useDodoSwapV2(
      fromToken: PromiseOrValue<string>,
      toToken: PromiseOrValue<string>,
      fromTokenAmount: PromiseOrValue<BigNumberish>,
      dodoV2Pool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
