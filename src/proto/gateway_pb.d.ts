import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from './google/api/annotations_pb';


export class GenerateReceiptProofRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): GenerateReceiptProofRequest;

  getTransactionHash(): string;
  setTransactionHash(value: string): GenerateReceiptProofRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateReceiptProofRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateReceiptProofRequest): GenerateReceiptProofRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateReceiptProofRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateReceiptProofRequest;
  static deserializeBinaryFromReader(message: GenerateReceiptProofRequest, reader: jspb.BinaryReader): GenerateReceiptProofRequest;
}

export namespace GenerateReceiptProofRequest {
  export type AsObject = {
    chainId: number,
    transactionHash: string,
  }
}

export class GenerateReceiptProofResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): GenerateReceiptProofResponse;
  hasErr(): boolean;
  clearErr(): GenerateReceiptProofResponse;

  getProofId(): string;
  setProofId(value: string): GenerateReceiptProofResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateReceiptProofResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateReceiptProofResponse): GenerateReceiptProofResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateReceiptProofResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateReceiptProofResponse;
  static deserializeBinaryFromReader(message: GenerateReceiptProofResponse, reader: jspb.BinaryReader): GenerateReceiptProofResponse;
}

export namespace GenerateReceiptProofResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    proofId: string,
  }
}

export class GetProofDataRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProofDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProofDataRequest): GetProofDataRequest.AsObject;
  static serializeBinaryToWriter(message: GetProofDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProofDataRequest;
  static deserializeBinaryFromReader(message: GetProofDataRequest, reader: jspb.BinaryReader): GetProofDataRequest;
}

export namespace GetProofDataRequest {
  export type AsObject = {
  }
}

export class GetProofDataResponse extends jspb.Message {
  getGraphDataMap(): jspb.Map<number, GraphData>;
  clearGraphDataMap(): GetProofDataResponse;

  getLatestBlockMap(): jspb.Map<number, BlockData>;
  clearLatestBlockMap(): GetProofDataResponse;

  getLatestProofMap(): jspb.Map<number, Proof>;
  clearLatestProofMap(): GetProofDataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProofDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProofDataResponse): GetProofDataResponse.AsObject;
  static serializeBinaryToWriter(message: GetProofDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProofDataResponse;
  static deserializeBinaryFromReader(message: GetProofDataResponse, reader: jspb.BinaryReader): GetProofDataResponse;
}

export namespace GetProofDataResponse {
  export type AsObject = {
    graphDataMap: Array<[number, GraphData.AsObject]>,
    latestBlockMap: Array<[number, BlockData.AsObject]>,
    latestProofMap: Array<[number, Proof.AsObject]>,
  }
}

export class GraphData extends jspb.Message {
  getProofGenerationTimeMap(): jspb.Map<number, number>;
  clearProofGenerationTimeMap(): GraphData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GraphData.AsObject;
  static toObject(includeInstance: boolean, msg: GraphData): GraphData.AsObject;
  static serializeBinaryToWriter(message: GraphData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GraphData;
  static deserializeBinaryFromReader(message: GraphData, reader: jspb.BinaryReader): GraphData;
}

export namespace GraphData {
  export type AsObject = {
    proofGenerationTimeMap: Array<[number, number]>,
  }
}

export class BlockData extends jspb.Message {
  getBlockNumber(): number;
  setBlockNumber(value: number): BlockData;

  getBlockHash(): string;
  setBlockHash(value: string): BlockData;

  getBlockStateRoot(): string;
  setBlockStateRoot(value: string): BlockData;

  getTimestamp(): number;
  setTimestamp(value: number): BlockData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockData.AsObject;
  static toObject(includeInstance: boolean, msg: BlockData): BlockData.AsObject;
  static serializeBinaryToWriter(message: BlockData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockData;
  static deserializeBinaryFromReader(message: BlockData, reader: jspb.BinaryReader): BlockData;
}

export namespace BlockData {
  export type AsObject = {
    blockNumber: number,
    blockHash: string,
    blockStateRoot: string,
    timestamp: number,
  }
}

export class Proof extends jspb.Message {
  getProof(): string;
  setProof(value: string): Proof;

  getTimestamp(): number;
  setTimestamp(value: number): Proof;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proof.AsObject;
  static toObject(includeInstance: boolean, msg: Proof): Proof.AsObject;
  static serializeBinaryToWriter(message: Proof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proof;
  static deserializeBinaryFromReader(message: Proof, reader: jspb.BinaryReader): Proof;
}

export namespace Proof {
  export type AsObject = {
    proof: string,
    timestamp: number,
  }
}

export class GetTokensRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokensRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokensRequest): GetTokensRequest.AsObject;
  static serializeBinaryToWriter(message: GetTokensRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokensRequest;
  static deserializeBinaryFromReader(message: GetTokensRequest, reader: jspb.BinaryReader): GetTokensRequest;
}

export namespace GetTokensRequest {
  export type AsObject = {
  }
}

export class GetTokensResponse extends jspb.Message {
  getTokensMap(): jspb.Map<number, Tokens>;
  clearTokensMap(): GetTokensResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokensResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokensResponse): GetTokensResponse.AsObject;
  static serializeBinaryToWriter(message: GetTokensResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokensResponse;
  static deserializeBinaryFromReader(message: GetTokensResponse, reader: jspb.BinaryReader): GetTokensResponse;
}

export namespace GetTokensResponse {
  export type AsObject = {
    tokensMap: Array<[number, Tokens.AsObject]>,
  }
}

export class GetHistoryRequest extends jspb.Message {
  getNextPageToken(): string;
  setNextPageToken(value: string): GetHistoryRequest;

  getPageSize(): number;
  setPageSize(value: number): GetHistoryRequest;

  getAddr(): string;
  setAddr(value: string): GetHistoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryRequest): GetHistoryRequest.AsObject;
  static serializeBinaryToWriter(message: GetHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryRequest;
  static deserializeBinaryFromReader(message: GetHistoryRequest, reader: jspb.BinaryReader): GetHistoryRequest;
}

export namespace GetHistoryRequest {
  export type AsObject = {
    nextPageToken: string,
    pageSize: number,
    addr: string,
  }
}

export class GetHistoryResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): GetHistoryResponse;
  hasErr(): boolean;
  clearErr(): GetHistoryResponse;

  getHistoryList(): Array<TransferHistory>;
  setHistoryList(value: Array<TransferHistory>): GetHistoryResponse;
  clearHistoryList(): GetHistoryResponse;
  addHistory(value?: TransferHistory, index?: number): TransferHistory;

  getNextPageToken(): string;
  setNextPageToken(value: string): GetHistoryResponse;

  getCurrentSize(): number;
  setCurrentSize(value: number): GetHistoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryResponse): GetHistoryResponse.AsObject;
  static serializeBinaryToWriter(message: GetHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryResponse;
  static deserializeBinaryFromReader(message: GetHistoryResponse, reader: jspb.BinaryReader): GetHistoryResponse;
}

export namespace GetHistoryResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    historyList: Array<TransferHistory.AsObject>,
    nextPageToken: string,
    currentSize: number,
  }
}

export class GetTransferRequest extends jspb.Message {
  getTx(): string;
  setTx(value: string): GetTransferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransferRequest): GetTransferRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransferRequest;
  static deserializeBinaryFromReader(message: GetTransferRequest, reader: jspb.BinaryReader): GetTransferRequest;
}

export namespace GetTransferRequest {
  export type AsObject = {
    tx: string,
  }
}

export class GetTransferResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): GetTransferResponse;
  hasErr(): boolean;
  clearErr(): GetTransferResponse;

  getTransfer(): TransferHistory | undefined;
  setTransfer(value?: TransferHistory): GetTransferResponse;
  hasTransfer(): boolean;
  clearTransfer(): GetTransferResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransferResponse): GetTransferResponse.AsObject;
  static serializeBinaryToWriter(message: GetTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransferResponse;
  static deserializeBinaryFromReader(message: GetTransferResponse, reader: jspb.BinaryReader): GetTransferResponse;
}

export namespace GetTransferResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    transfer?: TransferHistory.AsObject,
  }
}

export class TransferHistory extends jspb.Message {
  getTransferId(): string;
  setTransferId(value: string): TransferHistory;

  getSrcSendAmt(): Amount | undefined;
  setSrcSendAmt(value?: Amount): TransferHistory;
  hasSrcSendAmt(): boolean;
  clearSrcSendAmt(): TransferHistory;

  getDstReceivedAmt(): Amount | undefined;
  setDstReceivedAmt(value?: Amount): TransferHistory;
  hasDstReceivedAmt(): boolean;
  clearDstReceivedAmt(): TransferHistory;

  getCt(): number;
  setCt(value: number): TransferHistory;

  getUt(): number;
  setUt(value: number): TransferHistory;

  getSrcTx(): string;
  setSrcTx(value: string): TransferHistory;

  getDstTx(): string;
  setDstTx(value: string): TransferHistory;

  getStatus(): TransferStatus;
  setStatus(value: TransferStatus): TransferHistory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferHistory.AsObject;
  static toObject(includeInstance: boolean, msg: TransferHistory): TransferHistory.AsObject;
  static serializeBinaryToWriter(message: TransferHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferHistory;
  static deserializeBinaryFromReader(message: TransferHistory, reader: jspb.BinaryReader): TransferHistory;
}

export namespace TransferHistory {
  export type AsObject = {
    transferId: string,
    srcSendAmt?: Amount.AsObject,
    dstReceivedAmt?: Amount.AsObject,
    ct: number,
    ut: number,
    srcTx: string,
    dstTx: string,
    status: TransferStatus,
  }
}

export class Amount extends jspb.Message {
  getToken(): Token | undefined;
  setToken(value?: Token): Amount;
  hasToken(): boolean;
  clearToken(): Amount;

  getAmount(): string;
  setAmount(value: string): Amount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Amount.AsObject;
  static toObject(includeInstance: boolean, msg: Amount): Amount.AsObject;
  static serializeBinaryToWriter(message: Amount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Amount;
  static deserializeBinaryFromReader(message: Amount, reader: jspb.BinaryReader): Amount;
}

export namespace Amount {
  export type AsObject = {
    token?: Token.AsObject,
    amount: string,
  }
}

export class Chain extends jspb.Message {
  getId(): number;
  setId(value: number): Chain;

  getName(): string;
  setName(value: string): Chain;

  getIcon(): string;
  setIcon(value: string): Chain;

  getBlockDelay(): number;
  setBlockDelay(value: number): Chain;

  getGasTokenSymbol(): string;
  setGasTokenSymbol(value: string): Chain;

  getExploreUrl(): string;
  setExploreUrl(value: string): Chain;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chain.AsObject;
  static toObject(includeInstance: boolean, msg: Chain): Chain.AsObject;
  static serializeBinaryToWriter(message: Chain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chain;
  static deserializeBinaryFromReader(message: Chain, reader: jspb.BinaryReader): Chain;
}

export namespace Chain {
  export type AsObject = {
    id: number,
    name: string,
    icon: string,
    blockDelay: number,
    gasTokenSymbol: string,
    exploreUrl: string,
  }
}

export class Token extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): Token;

  getSymbol(): string;
  setSymbol(value: string): Token;

  getAddr(): string;
  setAddr(value: string): Token;

  getDecimal(): number;
  setDecimal(value: number): Token;

  getName(): string;
  setName(value: string): Token;

  getIcon(): string;
  setIcon(value: string): Token;

  getType(): TokenType;
  setType(value: TokenType): Token;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    chainId: number,
    symbol: string,
    addr: string,
    decimal: number,
    name: string,
    icon: string,
    type: TokenType,
  }
}

export class Tokens extends jspb.Message {
  getTokensList(): Array<Token>;
  setTokensList(value: Array<Token>): Tokens;
  clearTokensList(): Tokens;
  addTokens(value?: Token, index?: number): Token;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tokens.AsObject;
  static toObject(includeInstance: boolean, msg: Tokens): Tokens.AsObject;
  static serializeBinaryToWriter(message: Tokens, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tokens;
  static deserializeBinaryFromReader(message: Tokens, reader: jspb.BinaryReader): Tokens;
}

export namespace Tokens {
  export type AsObject = {
    tokensList: Array<Token.AsObject>,
  }
}

export class GetProofRequest extends jspb.Message {
  getProofId(): string;
  setProofId(value: string): GetProofRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProofRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProofRequest): GetProofRequest.AsObject;
  static serializeBinaryToWriter(message: GetProofRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProofRequest;
  static deserializeBinaryFromReader(message: GetProofRequest, reader: jspb.BinaryReader): GetProofRequest;
}

export namespace GetProofRequest {
  export type AsObject = {
    proofId: string,
  }
}

export class GetProofResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): GetProofResponse;
  hasErr(): boolean;
  clearErr(): GetProofResponse;

  getProofWithPublicInputs(): Uint8Array | string;
  getProofWithPublicInputs_asU8(): Uint8Array;
  getProofWithPublicInputs_asB64(): string;
  setProofWithPublicInputs(value: Uint8Array | string): GetProofResponse;

  getAuxiBlkVerifyInfo(): Uint8Array | string;
  getAuxiBlkVerifyInfo_asU8(): Uint8Array;
  getAuxiBlkVerifyInfo_asB64(): string;
  setAuxiBlkVerifyInfo(value: Uint8Array | string): GetProofResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProofResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProofResponse): GetProofResponse.AsObject;
  static serializeBinaryToWriter(message: GetProofResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProofResponse;
  static deserializeBinaryFromReader(message: GetProofResponse, reader: jspb.BinaryReader): GetProofResponse;
}

export namespace GetProofResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    proofWithPublicInputs: Uint8Array | string,
    auxiBlkVerifyInfo: Uint8Array | string,
  }
}

export class GenerateSlotValueProofRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): GenerateSlotValueProofRequest;

  getContractAddress(): string;
  setContractAddress(value: string): GenerateSlotValueProofRequest;

  getSlotKey(): string;
  setSlotKey(value: string): GenerateSlotValueProofRequest;

  getSlotValue(): string;
  setSlotValue(value: string): GenerateSlotValueProofRequest;

  getBlockNum(): number;
  setBlockNum(value: number): GenerateSlotValueProofRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateSlotValueProofRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateSlotValueProofRequest): GenerateSlotValueProofRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateSlotValueProofRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateSlotValueProofRequest;
  static deserializeBinaryFromReader(message: GenerateSlotValueProofRequest, reader: jspb.BinaryReader): GenerateSlotValueProofRequest;
}

export namespace GenerateSlotValueProofRequest {
  export type AsObject = {
    chainId: number,
    contractAddress: string,
    slotKey: string,
    slotValue: string,
    blockNum: number,
  }
}

export class GenerateSlotValueProofResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): GenerateSlotValueProofResponse;
  hasErr(): boolean;
  clearErr(): GenerateSlotValueProofResponse;

  getProofId(): string;
  setProofId(value: string): GenerateSlotValueProofResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateSlotValueProofResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateSlotValueProofResponse): GenerateSlotValueProofResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateSlotValueProofResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateSlotValueProofResponse;
  static deserializeBinaryFromReader(message: GenerateSlotValueProofResponse, reader: jspb.BinaryReader): GenerateSlotValueProofResponse;
}

export namespace GenerateSlotValueProofResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    proofId: string,
  }
}

export class GetRecentAttestedSlotRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecentAttestedSlotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecentAttestedSlotRequest): GetRecentAttestedSlotRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecentAttestedSlotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecentAttestedSlotRequest;
  static deserializeBinaryFromReader(message: GetRecentAttestedSlotRequest, reader: jspb.BinaryReader): GetRecentAttestedSlotRequest;
}

export namespace GetRecentAttestedSlotRequest {
  export type AsObject = {
  }
}

export class GetRecentAttestedSlotResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): GetRecentAttestedSlotResponse;
  hasErr(): boolean;
  clearErr(): GetRecentAttestedSlotResponse;

  getRecentAttestedSlotsList(): Array<AttestedSlot>;
  setRecentAttestedSlotsList(value: Array<AttestedSlot>): GetRecentAttestedSlotResponse;
  clearRecentAttestedSlotsList(): GetRecentAttestedSlotResponse;
  addRecentAttestedSlots(value?: AttestedSlot, index?: number): AttestedSlot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecentAttestedSlotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecentAttestedSlotResponse): GetRecentAttestedSlotResponse.AsObject;
  static serializeBinaryToWriter(message: GetRecentAttestedSlotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecentAttestedSlotResponse;
  static deserializeBinaryFromReader(message: GetRecentAttestedSlotResponse, reader: jspb.BinaryReader): GetRecentAttestedSlotResponse;
}

export namespace GetRecentAttestedSlotResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    recentAttestedSlotsList: Array<AttestedSlot.AsObject>,
  }
}

export class AttestedSlot extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): AttestedSlot;

  getAddress(): string;
  setAddress(value: string): AttestedSlot;

  getBlockNum(): number;
  setBlockNum(value: number): AttestedSlot;

  getAttestedChainId(): number;
  setAttestedChainId(value: number): AttestedSlot;

  getAttestedLink(): string;
  setAttestedLink(value: string): AttestedSlot;

  getSlotKey(): string;
  setSlotKey(value: string): AttestedSlot;

  getSlotValue(): string;
  setSlotValue(value: string): AttestedSlot;

  getTimestamp(): number;
  setTimestamp(value: number): AttestedSlot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttestedSlot.AsObject;
  static toObject(includeInstance: boolean, msg: AttestedSlot): AttestedSlot.AsObject;
  static serializeBinaryToWriter(message: AttestedSlot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttestedSlot;
  static deserializeBinaryFromReader(message: AttestedSlot, reader: jspb.BinaryReader): AttestedSlot;
}

export namespace AttestedSlot {
  export type AsObject = {
    chainId: number,
    address: string,
    blockNum: number,
    attestedChainId: number,
    attestedLink: string,
    slotKey: string,
    slotValue: string,
    timestamp: number,
  }
}

export class GenerateTransactionProofRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): GenerateTransactionProofRequest;

  getTransactionHash(): string;
  setTransactionHash(value: string): GenerateTransactionProofRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTransactionProofRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateTransactionProofRequest): GenerateTransactionProofRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateTransactionProofRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTransactionProofRequest;
  static deserializeBinaryFromReader(message: GenerateTransactionProofRequest, reader: jspb.BinaryReader): GenerateTransactionProofRequest;
}

export namespace GenerateTransactionProofRequest {
  export type AsObject = {
    chainId: number,
    transactionHash: string,
  }
}

export class GenerateTransactionProofResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): GenerateTransactionProofResponse;
  hasErr(): boolean;
  clearErr(): GenerateTransactionProofResponse;

  getProofId(): string;
  setProofId(value: string): GenerateTransactionProofResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTransactionProofResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateTransactionProofResponse): GenerateTransactionProofResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateTransactionProofResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTransactionProofResponse;
  static deserializeBinaryFromReader(message: GenerateTransactionProofResponse, reader: jspb.BinaryReader): GenerateTransactionProofResponse;
}

export namespace GenerateTransactionProofResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    proofId: string,
  }
}

export class AttestedTransactionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttestedTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AttestedTransactionsRequest): AttestedTransactionsRequest.AsObject;
  static serializeBinaryToWriter(message: AttestedTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttestedTransactionsRequest;
  static deserializeBinaryFromReader(message: AttestedTransactionsRequest, reader: jspb.BinaryReader): AttestedTransactionsRequest;
}

export namespace AttestedTransactionsRequest {
  export type AsObject = {
  }
}

export class AttestedTransactionsResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): AttestedTransactionsResponse;
  hasErr(): boolean;
  clearErr(): AttestedTransactionsResponse;

  getAttestedTransactionsList(): Array<AttestedTransaction>;
  setAttestedTransactionsList(value: Array<AttestedTransaction>): AttestedTransactionsResponse;
  clearAttestedTransactionsList(): AttestedTransactionsResponse;
  addAttestedTransactions(value?: AttestedTransaction, index?: number): AttestedTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttestedTransactionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttestedTransactionsResponse): AttestedTransactionsResponse.AsObject;
  static serializeBinaryToWriter(message: AttestedTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttestedTransactionsResponse;
  static deserializeBinaryFromReader(message: AttestedTransactionsResponse, reader: jspb.BinaryReader): AttestedTransactionsResponse;
}

export namespace AttestedTransactionsResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    attestedTransactionsList: Array<AttestedTransaction.AsObject>,
  }
}

export class AttestedTransaction extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): AttestedTransaction;

  getAttestedChainId(): number;
  setAttestedChainId(value: number): AttestedTransaction;

  getAttestedLink(): string;
  setAttestedLink(value: string): AttestedTransaction;

  getTransactionHash(): string;
  setTransactionHash(value: string): AttestedTransaction;

  getTimestamp(): number;
  setTimestamp(value: number): AttestedTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttestedTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: AttestedTransaction): AttestedTransaction.AsObject;
  static serializeBinaryToWriter(message: AttestedTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttestedTransaction;
  static deserializeBinaryFromReader(message: AttestedTransaction, reader: jspb.BinaryReader): AttestedTransaction;
}

export namespace AttestedTransaction {
  export type AsObject = {
    chainId: number,
    attestedChainId: number,
    attestedLink: string,
    transactionHash: string,
    timestamp: number,
  }
}

export class CheckUniNFTEligibilityRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): CheckUniNFTEligibilityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckUniNFTEligibilityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckUniNFTEligibilityRequest): CheckUniNFTEligibilityRequest.AsObject;
  static serializeBinaryToWriter(message: CheckUniNFTEligibilityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckUniNFTEligibilityRequest;
  static deserializeBinaryFromReader(message: CheckUniNFTEligibilityRequest, reader: jspb.BinaryReader): CheckUniNFTEligibilityRequest;
}

export namespace CheckUniNFTEligibilityRequest {
  export type AsObject = {
    address: string,
  }
}

export class CheckUniNFTEligibilityResponse extends jspb.Message {
  getErrmsg(): ErrMsg | undefined;
  setErrmsg(value?: ErrMsg): CheckUniNFTEligibilityResponse;
  hasErrmsg(): boolean;
  clearErrmsg(): CheckUniNFTEligibilityResponse;

  getCheckStatus(): CheckStatus;
  setCheckStatus(value: CheckStatus): CheckUniNFTEligibilityResponse;

  getResp(): UniNFTEligibilityResponse | undefined;
  setResp(value?: UniNFTEligibilityResponse): CheckUniNFTEligibilityResponse;
  hasResp(): boolean;
  clearResp(): CheckUniNFTEligibilityResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckUniNFTEligibilityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckUniNFTEligibilityResponse): CheckUniNFTEligibilityResponse.AsObject;
  static serializeBinaryToWriter(message: CheckUniNFTEligibilityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckUniNFTEligibilityResponse;
  static deserializeBinaryFromReader(message: CheckUniNFTEligibilityResponse, reader: jspb.BinaryReader): CheckUniNFTEligibilityResponse;
}

export namespace CheckUniNFTEligibilityResponse {
  export type AsObject = {
    errmsg?: ErrMsg.AsObject,
    checkStatus: CheckStatus,
    resp?: UniNFTEligibilityResponse.AsObject,
  }
}

export class UniNFTEligibilityResponse extends jspb.Message {
  getSwapsizedollars(): number;
  setSwapsizedollars(value: number): UniNFTEligibilityResponse;

  getTier(): Tier;
  setTier(value: Tier): UniNFTEligibilityResponse;

  getNft(): TierNFT | undefined;
  setNft(value?: TierNFT): UniNFTEligibilityResponse;
  hasNft(): boolean;
  clearNft(): UniNFTEligibilityResponse;

  getTransactionHash(): string;
  setTransactionHash(value: string): UniNFTEligibilityResponse;

  getChainId(): number;
  setChainId(value: number): UniNFTEligibilityResponse;

  getTxProofId(): string;
  setTxProofId(value: string): UniNFTEligibilityResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UniNFTEligibilityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UniNFTEligibilityResponse): UniNFTEligibilityResponse.AsObject;
  static serializeBinaryToWriter(message: UniNFTEligibilityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UniNFTEligibilityResponse;
  static deserializeBinaryFromReader(message: UniNFTEligibilityResponse, reader: jspb.BinaryReader): UniNFTEligibilityResponse;
}

export namespace UniNFTEligibilityResponse {
  export type AsObject = {
    swapsizedollars: number,
    tier: Tier,
    nft?: TierNFT.AsObject,
    transactionHash: string,
    chainId: number,
    txProofId: string,
  }
}

export class TierNFT extends jspb.Message {
  getNftId(): number;
  setNftId(value: number): TierNFT;

  getNftName(): string;
  setNftName(value: string): TierNFT;

  getNftAddress(): string;
  setNftAddress(value: string): TierNFT;

  getImage(): string;
  setImage(value: string): TierNFT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TierNFT.AsObject;
  static toObject(includeInstance: boolean, msg: TierNFT): TierNFT.AsObject;
  static serializeBinaryToWriter(message: TierNFT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TierNFT;
  static deserializeBinaryFromReader(message: TierNFT, reader: jspb.BinaryReader): TierNFT;
}

export namespace TierNFT {
  export type AsObject = {
    nftId: number,
    nftName: string,
    nftAddress: string,
    image: string,
  }
}

export class GetSocialGraphDataRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSocialGraphDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSocialGraphDataRequest): GetSocialGraphDataRequest.AsObject;
  static serializeBinaryToWriter(message: GetSocialGraphDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSocialGraphDataRequest;
  static deserializeBinaryFromReader(message: GetSocialGraphDataRequest, reader: jspb.BinaryReader): GetSocialGraphDataRequest;
}

export namespace GetSocialGraphDataRequest {
  export type AsObject = {
  }
}

export class GetSocialGraphDataResponse extends jspb.Message {
  getNodesList(): Array<UserNode>;
  setNodesList(value: Array<UserNode>): GetSocialGraphDataResponse;
  clearNodesList(): GetSocialGraphDataResponse;
  addNodes(value?: UserNode, index?: number): UserNode;

  getConnectionsList(): Array<SocialConnection>;
  setConnectionsList(value: Array<SocialConnection>): GetSocialGraphDataResponse;
  clearConnectionsList(): GetSocialGraphDataResponse;
  addConnections(value?: SocialConnection, index?: number): SocialConnection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSocialGraphDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSocialGraphDataResponse): GetSocialGraphDataResponse.AsObject;
  static serializeBinaryToWriter(message: GetSocialGraphDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSocialGraphDataResponse;
  static deserializeBinaryFromReader(message: GetSocialGraphDataResponse, reader: jspb.BinaryReader): GetSocialGraphDataResponse;
}

export namespace GetSocialGraphDataResponse {
  export type AsObject = {
    nodesList: Array<UserNode.AsObject>,
    connectionsList: Array<SocialConnection.AsObject>,
  }
}

export class UserNode extends jspb.Message {
  getName(): string;
  setName(value: string): UserNode;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): UserNode;

  getAddress(): string;
  setAddress(value: string): UserNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserNode.AsObject;
  static toObject(includeInstance: boolean, msg: UserNode): UserNode.AsObject;
  static serializeBinaryToWriter(message: UserNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserNode;
  static deserializeBinaryFromReader(message: UserNode, reader: jspb.BinaryReader): UserNode;
}

export namespace UserNode {
  export type AsObject = {
    name: string,
    avatarUrl: string,
    address: string,
  }
}

export class SocialConnection extends jspb.Message {
  getAddress1(): string;
  setAddress1(value: string): SocialConnection;

  getAddress2(): string;
  setAddress2(value: string): SocialConnection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SocialConnection.AsObject;
  static toObject(includeInstance: boolean, msg: SocialConnection): SocialConnection.AsObject;
  static serializeBinaryToWriter(message: SocialConnection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SocialConnection;
  static deserializeBinaryFromReader(message: SocialConnection, reader: jspb.BinaryReader): SocialConnection;
}

export namespace SocialConnection {
  export type AsObject = {
    address1: string,
    address2: string,
  }
}

export class GetAttestedFriendShipRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAttestedFriendShipRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAttestedFriendShipRequest): GetAttestedFriendShipRequest.AsObject;
  static serializeBinaryToWriter(message: GetAttestedFriendShipRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAttestedFriendShipRequest;
  static deserializeBinaryFromReader(message: GetAttestedFriendShipRequest, reader: jspb.BinaryReader): GetAttestedFriendShipRequest;
}

export namespace GetAttestedFriendShipRequest {
  export type AsObject = {
  }
}

export class GetAttestedFriendShipResponse extends jspb.Message {
  getRecentFriendshipsList(): Array<FriendShipHistory>;
  setRecentFriendshipsList(value: Array<FriendShipHistory>): GetAttestedFriendShipResponse;
  clearRecentFriendshipsList(): GetAttestedFriendShipResponse;
  addRecentFriendships(value?: FriendShipHistory, index?: number): FriendShipHistory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAttestedFriendShipResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAttestedFriendShipResponse): GetAttestedFriendShipResponse.AsObject;
  static serializeBinaryToWriter(message: GetAttestedFriendShipResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAttestedFriendShipResponse;
  static deserializeBinaryFromReader(message: GetAttestedFriendShipResponse, reader: jspb.BinaryReader): GetAttestedFriendShipResponse;
}

export namespace GetAttestedFriendShipResponse {
  export type AsObject = {
    recentFriendshipsList: Array<FriendShipHistory.AsObject>,
  }
}

export class FriendShipHistory extends jspb.Message {
  getAddress1(): string;
  setAddress1(value: string): FriendShipHistory;

  getAddress2(): string;
  setAddress2(value: string): FriendShipHistory;

  getVerificationLink(): string;
  setVerificationLink(value: string): FriendShipHistory;

  getTime(): number;
  setTime(value: number): FriendShipHistory;

  getAttestedChainId(): number;
  setAttestedChainId(value: number): FriendShipHistory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendShipHistory.AsObject;
  static toObject(includeInstance: boolean, msg: FriendShipHistory): FriendShipHistory.AsObject;
  static serializeBinaryToWriter(message: FriendShipHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendShipHistory;
  static deserializeBinaryFromReader(message: FriendShipHistory, reader: jspb.BinaryReader): FriendShipHistory;
}

export namespace FriendShipHistory {
  export type AsObject = {
    address1: string,
    address2: string,
    verificationLink: string,
    time: number,
    attestedChainId: number,
  }
}

export class CheckFriendShipRequest extends jspb.Message {
  getAddress1(): string;
  setAddress1(value: string): CheckFriendShipRequest;

  getAddress2(): string;
  setAddress2(value: string): CheckFriendShipRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckFriendShipRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckFriendShipRequest): CheckFriendShipRequest.AsObject;
  static serializeBinaryToWriter(message: CheckFriendShipRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckFriendShipRequest;
  static deserializeBinaryFromReader(message: CheckFriendShipRequest, reader: jspb.BinaryReader): CheckFriendShipRequest;
}

export namespace CheckFriendShipRequest {
  export type AsObject = {
    address1: string,
    address2: string,
  }
}

export class CheckFriendShipResponse extends jspb.Message {
  getErrmsg(): ErrMsg | undefined;
  setErrmsg(value?: ErrMsg): CheckFriendShipResponse;
  hasErrmsg(): boolean;
  clearErrmsg(): CheckFriendShipResponse;

  getCheckStatus(): CheckStatus;
  setCheckStatus(value: CheckStatus): CheckFriendShipResponse;

  getResp(): FriendShipResponse | undefined;
  setResp(value?: FriendShipResponse): CheckFriendShipResponse;
  hasResp(): boolean;
  clearResp(): CheckFriendShipResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckFriendShipResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckFriendShipResponse): CheckFriendShipResponse.AsObject;
  static serializeBinaryToWriter(message: CheckFriendShipResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckFriendShipResponse;
  static deserializeBinaryFromReader(message: CheckFriendShipResponse, reader: jspb.BinaryReader): CheckFriendShipResponse;
}

export namespace CheckFriendShipResponse {
  export type AsObject = {
    errmsg?: ErrMsg.AsObject,
    checkStatus: CheckStatus,
    resp?: FriendShipResponse.AsObject,
  }
}

export class FriendShipResponse extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): FriendShipResponse;

  getTransactionHash(): string;
  setTransactionHash(value: string): FriendShipResponse;

  getTxProofId(): string;
  setTxProofId(value: string): FriendShipResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendShipResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FriendShipResponse): FriendShipResponse.AsObject;
  static serializeBinaryToWriter(message: FriendShipResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendShipResponse;
  static deserializeBinaryFromReader(message: FriendShipResponse, reader: jspb.BinaryReader): FriendShipResponse;
}

export namespace FriendShipResponse {
  export type AsObject = {
    chainId: number,
    transactionHash: string,
    txProofId: string,
  }
}

export class ErrMsg extends jspb.Message {
  getCode(): ErrCode;
  setCode(value: ErrCode): ErrMsg;

  getMsg(): string;
  setMsg(value: string): ErrMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ErrMsg): ErrMsg.AsObject;
  static serializeBinaryToWriter(message: ErrMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrMsg;
  static deserializeBinaryFromReader(message: ErrMsg, reader: jspb.BinaryReader): ErrMsg;
}

export namespace ErrMsg {
  export type AsObject = {
    code: ErrCode,
    msg: string,
  }
}

export class GetUniswapLeaderboardRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUniswapLeaderboardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUniswapLeaderboardRequest): GetUniswapLeaderboardRequest.AsObject;
  static serializeBinaryToWriter(message: GetUniswapLeaderboardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUniswapLeaderboardRequest;
  static deserializeBinaryFromReader(message: GetUniswapLeaderboardRequest, reader: jspb.BinaryReader): GetUniswapLeaderboardRequest;
}

export namespace GetUniswapLeaderboardRequest {
  export type AsObject = {
  }
}

export class GetUniswapLeaderboardResponse extends jspb.Message {
  getItemsList(): Array<LeaderboardItem>;
  setItemsList(value: Array<LeaderboardItem>): GetUniswapLeaderboardResponse;
  clearItemsList(): GetUniswapLeaderboardResponse;
  addItems(value?: LeaderboardItem, index?: number): LeaderboardItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUniswapLeaderboardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUniswapLeaderboardResponse): GetUniswapLeaderboardResponse.AsObject;
  static serializeBinaryToWriter(message: GetUniswapLeaderboardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUniswapLeaderboardResponse;
  static deserializeBinaryFromReader(message: GetUniswapLeaderboardResponse, reader: jspb.BinaryReader): GetUniswapLeaderboardResponse;
}

export namespace GetUniswapLeaderboardResponse {
  export type AsObject = {
    itemsList: Array<LeaderboardItem.AsObject>,
  }
}

export class LeaderboardItem extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): LeaderboardItem;

  getVolume(): string;
  setVolume(value: string): LeaderboardItem;

  getAttestedLink(): string;
  setAttestedLink(value: string): LeaderboardItem;

  getAttestedChainId(): number;
  setAttestedChainId(value: number): LeaderboardItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaderboardItem.AsObject;
  static toObject(includeInstance: boolean, msg: LeaderboardItem): LeaderboardItem.AsObject;
  static serializeBinaryToWriter(message: LeaderboardItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaderboardItem;
  static deserializeBinaryFromReader(message: LeaderboardItem, reader: jspb.BinaryReader): LeaderboardItem;
}

export namespace LeaderboardItem {
  export type AsObject = {
    address: string,
    volume: string,
    attestedLink: string,
    attestedChainId: number,
  }
}

export class CheckUniswapSumVolumeRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): CheckUniswapSumVolumeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckUniswapSumVolumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckUniswapSumVolumeRequest): CheckUniswapSumVolumeRequest.AsObject;
  static serializeBinaryToWriter(message: CheckUniswapSumVolumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckUniswapSumVolumeRequest;
  static deserializeBinaryFromReader(message: CheckUniswapSumVolumeRequest, reader: jspb.BinaryReader): CheckUniswapSumVolumeRequest;
}

export namespace CheckUniswapSumVolumeRequest {
  export type AsObject = {
    address: string,
  }
}

export class CheckUniswapSumVolumeResponse extends jspb.Message {
  getErrmsg(): ErrMsg | undefined;
  setErrmsg(value?: ErrMsg): CheckUniswapSumVolumeResponse;
  hasErrmsg(): boolean;
  clearErrmsg(): CheckUniswapSumVolumeResponse;

  getCheckStatus(): CheckStatus;
  setCheckStatus(value: CheckStatus): CheckUniswapSumVolumeResponse;

  getResp(): UniswapSumVolumeResponse | undefined;
  setResp(value?: UniswapSumVolumeResponse): CheckUniswapSumVolumeResponse;
  hasResp(): boolean;
  clearResp(): CheckUniswapSumVolumeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckUniswapSumVolumeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckUniswapSumVolumeResponse): CheckUniswapSumVolumeResponse.AsObject;
  static serializeBinaryToWriter(message: CheckUniswapSumVolumeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckUniswapSumVolumeResponse;
  static deserializeBinaryFromReader(message: CheckUniswapSumVolumeResponse, reader: jspb.BinaryReader): CheckUniswapSumVolumeResponse;
}

export namespace CheckUniswapSumVolumeResponse {
  export type AsObject = {
    errmsg?: ErrMsg.AsObject,
    checkStatus: CheckStatus,
    resp?: UniswapSumVolumeResponse.AsObject,
  }
}

export class UniswapSumVolumeResponse extends jspb.Message {
  getSumVolume(): string;
  setSumVolume(value: string): UniswapSumVolumeResponse;

  getTxHashesList(): Array<string>;
  setTxHashesList(value: Array<string>): UniswapSumVolumeResponse;
  clearTxHashesList(): UniswapSumVolumeResponse;
  addTxHashes(value: string, index?: number): UniswapSumVolumeResponse;

  getChainId(): number;
  setChainId(value: number): UniswapSumVolumeResponse;

  getProofId(): string;
  setProofId(value: string): UniswapSumVolumeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UniswapSumVolumeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UniswapSumVolumeResponse): UniswapSumVolumeResponse.AsObject;
  static serializeBinaryToWriter(message: UniswapSumVolumeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UniswapSumVolumeResponse;
  static deserializeBinaryFromReader(message: UniswapSumVolumeResponse, reader: jspb.BinaryReader): UniswapSumVolumeResponse;
}

export namespace UniswapSumVolumeResponse {
  export type AsObject = {
    sumVolume: string,
    txHashesList: Array<string>,
    chainId: number,
    proofId: string,
  }
}

export class GenerateUniswapSumProofRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): GenerateUniswapSumProofRequest;

  getAddress(): string;
  setAddress(value: string): GenerateUniswapSumProofRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateUniswapSumProofRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateUniswapSumProofRequest): GenerateUniswapSumProofRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateUniswapSumProofRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateUniswapSumProofRequest;
  static deserializeBinaryFromReader(message: GenerateUniswapSumProofRequest, reader: jspb.BinaryReader): GenerateUniswapSumProofRequest;
}

export namespace GenerateUniswapSumProofRequest {
  export type AsObject = {
    chainId: number,
    address: string,
  }
}

export class GenerateUniswapSumProofResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): GenerateUniswapSumProofResponse;
  hasErr(): boolean;
  clearErr(): GenerateUniswapSumProofResponse;

  getProofId(): string;
  setProofId(value: string): GenerateUniswapSumProofResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateUniswapSumProofResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateUniswapSumProofResponse): GenerateUniswapSumProofResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateUniswapSumProofResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateUniswapSumProofResponse;
  static deserializeBinaryFromReader(message: GenerateUniswapSumProofResponse, reader: jspb.BinaryReader): GenerateUniswapSumProofResponse;
}

export namespace GenerateUniswapSumProofResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    proofId: string,
  }
}

export enum TransferStatus { 
  TS_UNKNOWN = 0,
  TS_GENERATING_PROOF = 1,
  TS_RELEASING_FUND = 2,
  TS_COMPLETED = 3,
}
export enum TokenType { 
  TP_UNKNOWN = 0,
  TP_VAULT = 1,
  TP_PEG = 2,
}
export enum Tier { 
  STONE = 0,
  BRONZE = 1,
  SILVER = 2,
  GOLD = 3,
  PLATINUM = 4,
  DIAMOND = 5,
}
export enum ErrCode { 
  ERROR_CODE_UNDEFINED = 0,
  ERROR_CODE_SLOT_VALUE_PROOF_GENERATION_FAILED = 1,
  ERROR_CODE_TRANSACTION_PROOF_GENERATION_FAILED = 2,
}
export enum CheckStatus { 
  IN_PROGRESS = 0,
  COMPLETE = 1,
}
