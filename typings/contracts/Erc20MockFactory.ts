/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Erc20Mock } from "./Erc20Mock";

export class Erc20MockFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Erc20Mock> {
    return super.deploy(overrides || {}) as Promise<Erc20Mock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Erc20Mock {
    return super.attach(address) as Erc20Mock;
  }
  connect(signer: Signer): Erc20MockFactory {
    return super.connect(signer) as Erc20MockFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Erc20Mock {
    return new Contract(address, _abi, signerOrProvider) as Erc20Mock;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "mockMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610662806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80633950935111610066578063395093511461015657806370a0823114610182578063a457c2d7146101a8578063a9059cbb146101d4578063dd62ed3e1461020057610093565b8063095ea7b31461009857806318160ddd146100d857806323b872dd146100f2578063378934b414610128575b600080fd5b6100c4600480360360408110156100ae57600080fd5b506001600160a01b03813516906020013561022e565b604080519115158252519081900360200190f35b6100e0610244565b60408051918252519081900360200190f35b6100c46004803603606081101561010857600080fd5b506001600160a01b0381358116916020810135909116906040013561024a565b6101546004803603604081101561013e57600080fd5b506001600160a01b0381351690602001356102a1565b005b6100c46004803603604081101561016c57600080fd5b506001600160a01b0381351690602001356102af565b6100e06004803603602081101561019857600080fd5b50356001600160a01b03166102eb565b6100c4600480360360408110156101be57600080fd5b506001600160a01b038135169060200135610306565b6100c4600480360360408110156101ea57600080fd5b506001600160a01b038135169060200135610342565b6100e06004803603604081101561021657600080fd5b506001600160a01b038135811691602001351661034f565b600061023b33848461037a565b50600192915050565b60025490565b6000610257848484610402565b6001600160a01b038416600090815260016020908152604080832033808552925290912054610297918691610292908663ffffffff6104cd16565b61037a565b5060019392505050565b6102ab828261052a565b5050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161023b918590610292908663ffffffff6105d216565b6001600160a01b031660009081526020819052604090205490565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161023b918590610292908663ffffffff6104cd16565b600061023b338484610402565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b03821661038d57600080fd5b6001600160a01b0383166103a057600080fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b03821661041557600080fd5b6001600160a01b03831660009081526020819052604090205461043e908263ffffffff6104cd16565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610473908263ffffffff6105d216565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600082821115610524576040805162461bcd60e51b815260206004820152601760248201527f536166654d617468237375623a20554e444552464c4f57000000000000000000604482015290519081900360640190fd5b50900390565b6001600160a01b03821661053d57600080fd5b600254610550908263ffffffff6105d216565b6002556001600160a01b03821660009081526020819052604090205461057c908263ffffffff6105d216565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600082820183811015610625576040805162461bcd60e51b8152602060048201526016602482015275536166654d617468236164643a204f564552464c4f5760501b604482015290519081900360640190fd5b939250505056fea26469706673582212201f95a9f9851b89e5b4e3040914d15e22e7d44cee49a7c17587936c246a9e239f64736f6c63430006080033";
