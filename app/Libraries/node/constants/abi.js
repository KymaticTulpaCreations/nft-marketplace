export const abi = [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "tokenName",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "tokenSymbol",
        "internalType": "string"
      },
      {
        "type": "uint256",
        "name": "gotMaxTokenSupply",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "event",
    "name": "Approval",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "internalType": "address",
        "indexed": true
      },
      {
        "type": "address",
        "name": "approved",
        "internalType": "address",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256",
        "indexed": true
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ApprovalForAll",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "internalType": "address",
        "indexed": true
      },
      {
        "type": "address",
        "name": "operator",
        "internalType": "address",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "approved",
        "internalType": "bool",
        "indexed": false
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "MarketItemCreated",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256",
        "indexed": true
      },
      {
        "type": "address",
        "name": "nftContract",
        "internalType": "address",
        "indexed": true
      },
      {
        "type": "string",
        "name": "uri",
        "internalType": "string",
        "indexed": false
      },
      {
        "type": "address",
        "name": "creator",
        "internalType": "address",
        "indexed": false
      },
      {
        "type": "address",
        "name": "owner",
        "internalType": "address",
        "indexed": false
      },
      {
        "type": "uint256",
        "name": "price",
        "internalType": "uint256",
        "indexed": false
      },
      {
        "type": "bool",
        "name": "forSale",
        "internalType": "bool",
        "indexed": false
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      {
        "type": "address",
        "name": "previousOwner",
        "internalType": "address",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newOwner",
        "internalType": "address",
        "indexed": true
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Transfer",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "internalType": "address",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256",
        "indexed": true
      }
    ],
    "anonymous": false
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "uint256",
        "name": "_value",
        "internalType": "uint256"
      }
    ],
    "name": "_bidIds",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "name": "_tokenName",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "name": "_tokenSymbol",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "name": "actualOwnerWallet",
    "inputs": [
      {
        "type": "uint256",
        "name": "altOwnerFund",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "addTokens",
    "inputs": [
      {
        "type": "uint256",
        "name": "gotNewMaxTokenSupply",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "approve",
    "inputs": [
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "name": "balanceOf",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "name": "bidPassCheck",
    "inputs": [
      {
        "type": "address",
        "name": "userWallet",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "currBid",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "tokenID",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "name": "bidWalletIN",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [],
    "name": "bidWalletOUT",
    "inputs": [
      {
        "type": "address",
        "name": "sendTo",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "withdrawAmount",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "name": "bidderWallet",
    "inputs": [
      {
        "type": "address",
        "name": "bidderAddress",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "name": "fetchTokenIDURI",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenID",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "name": "getApproved",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "name": "getNewTokenID",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "name": "isApprovedForAll",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "operator",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "listNFT",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "price",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "marketSetup",
    "inputs": [
      {
        "type": "address",
        "name": "scAddress",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [],
    "name": "mintNFT",
    "inputs": [
      {
        "type": "string",
        "name": "uri",
        "internalType": "string"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "name": "name",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "name": "owner",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "name": "ownerOf",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "renounceOwnership",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "safeTransferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "safeTransferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      },
      {
        "type": "bytes",
        "name": "data",
        "internalType": "bytes"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [],
    "name": "sellNFT",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "marketItemPrice",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "sellerGets",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "marketOwnerGets",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setApprovalForAll",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "internalType": "address"
      },
      {
        "type": "bool",
        "name": "approved",
        "internalType": "bool"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [],
    "name": "soldBidNFT",
    "inputs": [
      {
        "type": "address",
        "name": "winner",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "bidAmount",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "nftOwnerGets",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "ownerGets",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "name": "supportsInterface",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId",
        "internalType": "bytes4"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "name": "symbol",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "name": "tokenURI",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "name": "totalSupply",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "transferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [],
    "name": "transferNFT",
    "inputs": [
      {
        "type": "address",
        "name": "recieverAddress",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "gotTransferFee",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "transferOwnership",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "unlistNFT",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ]
  }
];