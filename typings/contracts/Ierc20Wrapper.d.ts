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
  Overrides,
  PayableOverrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface Ierc20WrapperInterface extends ethers.utils.Interface {
  functions: {
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfBatch(address[],uint256[])": FunctionFragment;
    "deposit(address,address,uint256)": FunctionFragment;
    "getIdAddress(uint256)": FunctionFragment;
    "getNTokens()": FunctionFragment;
    "getTokenID(address)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "withdraw(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getIdAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getNTokens", values?: void): string;
  encodeFunctionData(functionFragment: "getTokenID", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getIdAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTokenID", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "ApprovalForAll(address,address,bool)": EventFragment;
    "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
    "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
    "URI(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}

export class Ierc20Wrapper extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Ierc20WrapperInterface;

  functions: {
    balanceOf(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    balanceOfBatch(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    deposit(
      _token: string,
      _recipient: string,
      _value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    getIdAddress(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      token: string;
      0: string;
    }>;

    getNTokens(
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    getTokenID(
      _token: string,
      overrides?: CallOverrides
    ): Promise<{
      tokenID: BigNumber;
      0: BigNumber;
    }>;

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<{
      isOperator: boolean;
      0: boolean;
    }>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdraw(
      _token: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  balanceOf(
    _owner: string,
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfBatch(
    _owners: string[],
    _ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  deposit(
    _token: string,
    _recipient: string,
    _value: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  getIdAddress(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  getNTokens(overrides?: CallOverrides): Promise<void>;

  getTokenID(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

  isApprovedForAll(
    _owner: string,
    _operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  onERC1155BatchReceived(
    _operator: string,
    _from: string,
    _ids: BigNumberish[],
    _values: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  onERC1155Received(
    _operator: string,
    _from: string,
    _id: BigNumberish,
    _value: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  safeBatchTransferFrom(
    _from: string,
    _to: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  safeTransferFrom(
    _from: string,
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    _operator: string,
    _approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(
    _token: string,
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  staticCall: {
    balanceOf(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    deposit(
      _token: string,
      _recipient: string,
      _value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<void>;

    getIdAddress(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    getNTokens(overrides?: CallOverrides): Promise<void>;

    getTokenID(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<string>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<string>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<void>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<void>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<void>;

    withdraw(
      _token: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;
  };

  filters: {
    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null
    ): EventFilter;

    TransferBatch(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _ids: null,
      _amounts: null
    ): EventFilter;

    TransferSingle(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _id: null,
      _amount: null
    ): EventFilter;

    URI(_amount: null, _id: BigNumberish | null): EventFilter;
  };

  estimateGas: {
    balanceOf(_owner: string, _id: BigNumberish): Promise<BigNumber>;
    balanceOfBatch(_owners: string[], _ids: BigNumberish[]): Promise<BigNumber>;
    deposit(
      _token: string,
      _recipient: string,
      _value: BigNumberish
    ): Promise<BigNumber>;
    getIdAddress(_id: BigNumberish): Promise<BigNumber>;
    getNTokens(): Promise<BigNumber>;
    getTokenID(_token: string): Promise<BigNumber>;
    isApprovedForAll(_owner: string, _operator: string): Promise<BigNumber>;
    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: BytesLike
    ): Promise<BigNumber>;
    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: BytesLike
    ): Promise<BigNumber>;
    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike
    ): Promise<BigNumber>;
    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike
    ): Promise<BigNumber>;
    setApprovalForAll(
      _operator: string,
      _approved: boolean
    ): Promise<BigNumber>;
    withdraw(
      _token: string,
      _to: string,
      _value: BigNumberish
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(_owner: string, _id: BigNumberish): Promise<PopulatedTransaction>;
    balanceOfBatch(
      _owners: string[],
      _ids: BigNumberish[]
    ): Promise<PopulatedTransaction>;
    deposit(
      _token: string,
      _recipient: string,
      _value: BigNumberish
    ): Promise<PopulatedTransaction>;
    getIdAddress(_id: BigNumberish): Promise<PopulatedTransaction>;
    getNTokens(): Promise<PopulatedTransaction>;
    getTokenID(_token: string): Promise<PopulatedTransaction>;
    isApprovedForAll(
      _owner: string,
      _operator: string
    ): Promise<PopulatedTransaction>;
    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: BytesLike
    ): Promise<PopulatedTransaction>;
    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: BytesLike
    ): Promise<PopulatedTransaction>;
    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike
    ): Promise<PopulatedTransaction>;
    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike
    ): Promise<PopulatedTransaction>;
    setApprovalForAll(
      _operator: string,
      _approved: boolean
    ): Promise<PopulatedTransaction>;
    withdraw(
      _token: string,
      _to: string,
      _value: BigNumberish
    ): Promise<PopulatedTransaction>;
  };
}
