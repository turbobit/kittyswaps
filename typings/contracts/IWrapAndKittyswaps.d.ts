/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IWrapAndKittyswapsInterface extends ethers.utils.Interface {
  functions: {
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "wrapAndSwap(uint256,address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapAndSwap",
    values: [BigNumberish, string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapAndSwap",
    data: BytesLike
  ): Result;

  events: {};
}

export class IWrapAndKittyswaps extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IWrapAndKittyswapsInterface;

  functions: {
    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    wrapAndSwap(
      _maxAmount: BigNumberish,
      _recipient: string,
      _kittyswapsOrder: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  onERC1155BatchReceived(
    arg0: string,
    _from: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  onERC1155Received(
    _operator: string,
    _from: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  wrapAndSwap(
    _maxAmount: BigNumberish,
    _recipient: string,
    _kittyswapsOrder: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  staticCall: {
    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<string>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<string>;

    wrapAndSwap(
      _maxAmount: BigNumberish,
      _recipient: string,
      _kittyswapsOrder: BytesLike,
      overrides?: Overrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike
    ): Promise<BigNumber>;
    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike
    ): Promise<BigNumber>;
    wrapAndSwap(
      _maxAmount: BigNumberish,
      _recipient: string,
      _kittyswapsOrder: BytesLike
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike
    ): Promise<PopulatedTransaction>;
    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike
    ): Promise<PopulatedTransaction>;
    wrapAndSwap(
      _maxAmount: BigNumberish,
      _recipient: string,
      _kittyswapsOrder: BytesLike
    ): Promise<PopulatedTransaction>;
  };
}
