/**
 * @fileoverview gRPC-Web generated client stub for zk.gateway
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as gateway_pb from './gateway_pb';


export class WebClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetTokens = new grpcWeb.MethodDescriptor(
    '/zk.gateway.Web/GetTokens',
    grpcWeb.MethodType.UNARY,
    gateway_pb.GetTokensRequest,
    gateway_pb.GetTokensResponse,
    (request: gateway_pb.GetTokensRequest) => {
      return request.serializeBinary();
    },
    gateway_pb.GetTokensResponse.deserializeBinary
  );

  getTokens(
    request: gateway_pb.GetTokensRequest,
    metadata: grpcWeb.Metadata | null): Promise<gateway_pb.GetTokensResponse>;

  getTokens(
    request: gateway_pb.GetTokensRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gateway_pb.GetTokensResponse) => void): grpcWeb.ClientReadableStream<gateway_pb.GetTokensResponse>;

  getTokens(
    request: gateway_pb.GetTokensRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gateway_pb.GetTokensResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.gateway.Web/GetTokens',
        request,
        metadata || {},
        this.methodInfoGetTokens,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.gateway.Web/GetTokens',
    request,
    metadata || {},
    this.methodInfoGetTokens);
  }

  methodInfoGetHistory = new grpcWeb.MethodDescriptor(
    '/zk.gateway.Web/GetHistory',
    grpcWeb.MethodType.UNARY,
    gateway_pb.GetHistoryRequest,
    gateway_pb.GetHistoryResponse,
    (request: gateway_pb.GetHistoryRequest) => {
      return request.serializeBinary();
    },
    gateway_pb.GetHistoryResponse.deserializeBinary
  );

  getHistory(
    request: gateway_pb.GetHistoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<gateway_pb.GetHistoryResponse>;

  getHistory(
    request: gateway_pb.GetHistoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gateway_pb.GetHistoryResponse) => void): grpcWeb.ClientReadableStream<gateway_pb.GetHistoryResponse>;

  getHistory(
    request: gateway_pb.GetHistoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gateway_pb.GetHistoryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.gateway.Web/GetHistory',
        request,
        metadata || {},
        this.methodInfoGetHistory,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.gateway.Web/GetHistory',
    request,
    metadata || {},
    this.methodInfoGetHistory);
  }

  methodInfoGetTransfer = new grpcWeb.MethodDescriptor(
    '/zk.gateway.Web/GetTransfer',
    grpcWeb.MethodType.UNARY,
    gateway_pb.GetTransferRequest,
    gateway_pb.GetTransferResponse,
    (request: gateway_pb.GetTransferRequest) => {
      return request.serializeBinary();
    },
    gateway_pb.GetTransferResponse.deserializeBinary
  );

  getTransfer(
    request: gateway_pb.GetTransferRequest,
    metadata: grpcWeb.Metadata | null): Promise<gateway_pb.GetTransferResponse>;

  getTransfer(
    request: gateway_pb.GetTransferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gateway_pb.GetTransferResponse) => void): grpcWeb.ClientReadableStream<gateway_pb.GetTransferResponse>;

  getTransfer(
    request: gateway_pb.GetTransferRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gateway_pb.GetTransferResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.gateway.Web/GetTransfer',
        request,
        metadata || {},
        this.methodInfoGetTransfer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.gateway.Web/GetTransfer',
    request,
    metadata || {},
    this.methodInfoGetTransfer);
  }

  methodInfoGetProofData = new grpcWeb.MethodDescriptor(
    '/zk.gateway.Web/GetProofData',
    grpcWeb.MethodType.UNARY,
    gateway_pb.GetProofDataRequest,
    gateway_pb.GetProofDataResponse,
    (request: gateway_pb.GetProofDataRequest) => {
      return request.serializeBinary();
    },
    gateway_pb.GetProofDataResponse.deserializeBinary
  );

  getProofData(
    request: gateway_pb.GetProofDataRequest,
    metadata: grpcWeb.Metadata | null): Promise<gateway_pb.GetProofDataResponse>;

  getProofData(
    request: gateway_pb.GetProofDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gateway_pb.GetProofDataResponse) => void): grpcWeb.ClientReadableStream<gateway_pb.GetProofDataResponse>;

  getProofData(
    request: gateway_pb.GetProofDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gateway_pb.GetProofDataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.gateway.Web/GetProofData',
        request,
        metadata || {},
        this.methodInfoGetProofData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.gateway.Web/GetProofData',
    request,
    metadata || {},
    this.methodInfoGetProofData);
  }

  methodInfoGetRecentAttestedSlots = new grpcWeb.MethodDescriptor(
    '/zk.gateway.Web/GetRecentAttestedSlots',
    grpcWeb.MethodType.UNARY,
    gateway_pb.GetRecentAttestedSlotRequest,
    gateway_pb.GetRecentAttestedSlotResponse,
    (request: gateway_pb.GetRecentAttestedSlotRequest) => {
      return request.serializeBinary();
    },
    gateway_pb.GetRecentAttestedSlotResponse.deserializeBinary
  );

  getRecentAttestedSlots(
    request: gateway_pb.GetRecentAttestedSlotRequest,
    metadata: grpcWeb.Metadata | null): Promise<gateway_pb.GetRecentAttestedSlotResponse>;

  getRecentAttestedSlots(
    request: gateway_pb.GetRecentAttestedSlotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gateway_pb.GetRecentAttestedSlotResponse) => void): grpcWeb.ClientReadableStream<gateway_pb.GetRecentAttestedSlotResponse>;

  getRecentAttestedSlots(
    request: gateway_pb.GetRecentAttestedSlotRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gateway_pb.GetRecentAttestedSlotResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.gateway.Web/GetRecentAttestedSlots',
        request,
        metadata || {},
        this.methodInfoGetRecentAttestedSlots,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.gateway.Web/GetRecentAttestedSlots',
    request,
    metadata || {},
    this.methodInfoGetRecentAttestedSlots);
  }

  methodInfoGenerateSlotValueProof = new grpcWeb.MethodDescriptor(
    '/zk.gateway.Web/GenerateSlotValueProof',
    grpcWeb.MethodType.UNARY,
    gateway_pb.GenerateSlotValueProofRequest,
    gateway_pb.GenerateSlotValueProofResponse,
    (request: gateway_pb.GenerateSlotValueProofRequest) => {
      return request.serializeBinary();
    },
    gateway_pb.GenerateSlotValueProofResponse.deserializeBinary
  );

  generateSlotValueProof(
    request: gateway_pb.GenerateSlotValueProofRequest,
    metadata: grpcWeb.Metadata | null): Promise<gateway_pb.GenerateSlotValueProofResponse>;

  generateSlotValueProof(
    request: gateway_pb.GenerateSlotValueProofRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gateway_pb.GenerateSlotValueProofResponse) => void): grpcWeb.ClientReadableStream<gateway_pb.GenerateSlotValueProofResponse>;

  generateSlotValueProof(
    request: gateway_pb.GenerateSlotValueProofRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gateway_pb.GenerateSlotValueProofResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.gateway.Web/GenerateSlotValueProof',
        request,
        metadata || {},
        this.methodInfoGenerateSlotValueProof,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.gateway.Web/GenerateSlotValueProof',
    request,
    metadata || {},
    this.methodInfoGenerateSlotValueProof);
  }

  methodInfoGetProof = new grpcWeb.MethodDescriptor(
    '/zk.gateway.Web/GetProof',
    grpcWeb.MethodType.UNARY,
    gateway_pb.GetProofRequest,
    gateway_pb.GetProofResponse,
    (request: gateway_pb.GetProofRequest) => {
      return request.serializeBinary();
    },
    gateway_pb.GetProofResponse.deserializeBinary
  );

  getProof(
    request: gateway_pb.GetProofRequest,
    metadata: grpcWeb.Metadata | null): Promise<gateway_pb.GetProofResponse>;

  getProof(
    request: gateway_pb.GetProofRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gateway_pb.GetProofResponse) => void): grpcWeb.ClientReadableStream<gateway_pb.GetProofResponse>;

  getProof(
    request: gateway_pb.GetProofRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gateway_pb.GetProofResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.gateway.Web/GetProof',
        request,
        metadata || {},
        this.methodInfoGetProof,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.gateway.Web/GetProof',
    request,
    metadata || {},
    this.methodInfoGetProof);
  }

  methodInfoGenerateTransactionProof = new grpcWeb.MethodDescriptor(
    '/zk.gateway.Web/GenerateTransactionProof',
    grpcWeb.MethodType.UNARY,
    gateway_pb.GenerateTransactionProofRequest,
    gateway_pb.GenerateTransactionProofResponse,
    (request: gateway_pb.GenerateTransactionProofRequest) => {
      return request.serializeBinary();
    },
    gateway_pb.GenerateTransactionProofResponse.deserializeBinary
  );

  generateTransactionProof(
    request: gateway_pb.GenerateTransactionProofRequest,
    metadata: grpcWeb.Metadata | null): Promise<gateway_pb.GenerateTransactionProofResponse>;

  generateTransactionProof(
    request: gateway_pb.GenerateTransactionProofRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gateway_pb.GenerateTransactionProofResponse) => void): grpcWeb.ClientReadableStream<gateway_pb.GenerateTransactionProofResponse>;

  generateTransactionProof(
    request: gateway_pb.GenerateTransactionProofRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gateway_pb.GenerateTransactionProofResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.gateway.Web/GenerateTransactionProof',
        request,
        metadata || {},
        this.methodInfoGenerateTransactionProof,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.gateway.Web/GenerateTransactionProof',
    request,
    metadata || {},
    this.methodInfoGenerateTransactionProof);
  }

  methodInfoGenerateReceiptProof = new grpcWeb.MethodDescriptor(
    '/zk.gateway.Web/GenerateReceiptProof',
    grpcWeb.MethodType.UNARY,
    gateway_pb.GenerateReceiptProofRequest,
    gateway_pb.GenerateReceiptProofResponse,
    (request: gateway_pb.GenerateReceiptProofRequest) => {
      return request.serializeBinary();
    },
    gateway_pb.GenerateReceiptProofResponse.deserializeBinary
  );

  generateReceiptProof(
    request: gateway_pb.GenerateReceiptProofRequest,
    metadata: grpcWeb.Metadata | null): Promise<gateway_pb.GenerateReceiptProofResponse>;

  generateReceiptProof(
    request: gateway_pb.GenerateReceiptProofRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gateway_pb.GenerateReceiptProofResponse) => void): grpcWeb.ClientReadableStream<gateway_pb.GenerateReceiptProofResponse>;

  generateReceiptProof(
    request: gateway_pb.GenerateReceiptProofRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gateway_pb.GenerateReceiptProofResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.gateway.Web/GenerateReceiptProof',
        request,
        metadata || {},
        this.methodInfoGenerateReceiptProof,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.gateway.Web/GenerateReceiptProof',
    request,
    metadata || {},
    this.methodInfoGenerateReceiptProof);
  }

  methodInfoGetRecentAttestedTransactions = new grpcWeb.MethodDescriptor(
    '/zk.gateway.Web/GetRecentAttestedTransactions',
    grpcWeb.MethodType.UNARY,
    gateway_pb.AttestedTransactionsRequest,
    gateway_pb.AttestedTransactionsResponse,
    (request: gateway_pb.AttestedTransactionsRequest) => {
      return request.serializeBinary();
    },
    gateway_pb.AttestedTransactionsResponse.deserializeBinary
  );

  getRecentAttestedTransactions(
    request: gateway_pb.AttestedTransactionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<gateway_pb.AttestedTransactionsResponse>;

  getRecentAttestedTransactions(
    request: gateway_pb.AttestedTransactionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gateway_pb.AttestedTransactionsResponse) => void): grpcWeb.ClientReadableStream<gateway_pb.AttestedTransactionsResponse>;

  getRecentAttestedTransactions(
    request: gateway_pb.AttestedTransactionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gateway_pb.AttestedTransactionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.gateway.Web/GetRecentAttestedTransactions',
        request,
        metadata || {},
        this.methodInfoGetRecentAttestedTransactions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.gateway.Web/GetRecentAttestedTransactions',
    request,
    metadata || {},
    this.methodInfoGetRecentAttestedTransactions);
  }

  methodInfoCheckUniNFTEligibility = new grpcWeb.MethodDescriptor(
    '/zk.gateway.Web/CheckUniNFTEligibility',
    grpcWeb.MethodType.UNARY,
    gateway_pb.CheckUniNFTEligibilityRequest,
    gateway_pb.CheckUniNFTEligibilityResponse,
    (request: gateway_pb.CheckUniNFTEligibilityRequest) => {
      return request.serializeBinary();
    },
    gateway_pb.CheckUniNFTEligibilityResponse.deserializeBinary
  );

  checkUniNFTEligibility(
    request: gateway_pb.CheckUniNFTEligibilityRequest,
    metadata: grpcWeb.Metadata | null): Promise<gateway_pb.CheckUniNFTEligibilityResponse>;

  checkUniNFTEligibility(
    request: gateway_pb.CheckUniNFTEligibilityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gateway_pb.CheckUniNFTEligibilityResponse) => void): grpcWeb.ClientReadableStream<gateway_pb.CheckUniNFTEligibilityResponse>;

  checkUniNFTEligibility(
    request: gateway_pb.CheckUniNFTEligibilityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gateway_pb.CheckUniNFTEligibilityResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.gateway.Web/CheckUniNFTEligibility',
        request,
        metadata || {},
        this.methodInfoCheckUniNFTEligibility,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.gateway.Web/CheckUniNFTEligibility',
    request,
    metadata || {},
    this.methodInfoCheckUniNFTEligibility);
  }

  methodInfoGetSocialGraphData = new grpcWeb.MethodDescriptor(
    '/zk.gateway.Web/GetSocialGraphData',
    grpcWeb.MethodType.UNARY,
    gateway_pb.GetSocialGraphDataRequest,
    gateway_pb.GetSocialGraphDataResponse,
    (request: gateway_pb.GetSocialGraphDataRequest) => {
      return request.serializeBinary();
    },
    gateway_pb.GetSocialGraphDataResponse.deserializeBinary
  );

  getSocialGraphData(
    request: gateway_pb.GetSocialGraphDataRequest,
    metadata: grpcWeb.Metadata | null): Promise<gateway_pb.GetSocialGraphDataResponse>;

  getSocialGraphData(
    request: gateway_pb.GetSocialGraphDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gateway_pb.GetSocialGraphDataResponse) => void): grpcWeb.ClientReadableStream<gateway_pb.GetSocialGraphDataResponse>;

  getSocialGraphData(
    request: gateway_pb.GetSocialGraphDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gateway_pb.GetSocialGraphDataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.gateway.Web/GetSocialGraphData',
        request,
        metadata || {},
        this.methodInfoGetSocialGraphData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.gateway.Web/GetSocialGraphData',
    request,
    metadata || {},
    this.methodInfoGetSocialGraphData);
  }

  methodInfoGetRecentAttestedFriendShip = new grpcWeb.MethodDescriptor(
    '/zk.gateway.Web/GetRecentAttestedFriendShip',
    grpcWeb.MethodType.UNARY,
    gateway_pb.GetAttestedFriendShipRequest,
    gateway_pb.GetAttestedFriendShipResponse,
    (request: gateway_pb.GetAttestedFriendShipRequest) => {
      return request.serializeBinary();
    },
    gateway_pb.GetAttestedFriendShipResponse.deserializeBinary
  );

  getRecentAttestedFriendShip(
    request: gateway_pb.GetAttestedFriendShipRequest,
    metadata: grpcWeb.Metadata | null): Promise<gateway_pb.GetAttestedFriendShipResponse>;

  getRecentAttestedFriendShip(
    request: gateway_pb.GetAttestedFriendShipRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gateway_pb.GetAttestedFriendShipResponse) => void): grpcWeb.ClientReadableStream<gateway_pb.GetAttestedFriendShipResponse>;

  getRecentAttestedFriendShip(
    request: gateway_pb.GetAttestedFriendShipRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gateway_pb.GetAttestedFriendShipResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.gateway.Web/GetRecentAttestedFriendShip',
        request,
        metadata || {},
        this.methodInfoGetRecentAttestedFriendShip,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.gateway.Web/GetRecentAttestedFriendShip',
    request,
    metadata || {},
    this.methodInfoGetRecentAttestedFriendShip);
  }

  methodInfoCheckFriendShip = new grpcWeb.MethodDescriptor(
    '/zk.gateway.Web/CheckFriendShip',
    grpcWeb.MethodType.UNARY,
    gateway_pb.CheckFriendShipRequest,
    gateway_pb.CheckFriendShipResponse,
    (request: gateway_pb.CheckFriendShipRequest) => {
      return request.serializeBinary();
    },
    gateway_pb.CheckFriendShipResponse.deserializeBinary
  );

  checkFriendShip(
    request: gateway_pb.CheckFriendShipRequest,
    metadata: grpcWeb.Metadata | null): Promise<gateway_pb.CheckFriendShipResponse>;

  checkFriendShip(
    request: gateway_pb.CheckFriendShipRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gateway_pb.CheckFriendShipResponse) => void): grpcWeb.ClientReadableStream<gateway_pb.CheckFriendShipResponse>;

  checkFriendShip(
    request: gateway_pb.CheckFriendShipRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gateway_pb.CheckFriendShipResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.gateway.Web/CheckFriendShip',
        request,
        metadata || {},
        this.methodInfoCheckFriendShip,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.gateway.Web/CheckFriendShip',
    request,
    metadata || {},
    this.methodInfoCheckFriendShip);
  }

  methodInfoGetUniswapLeaderboard = new grpcWeb.MethodDescriptor(
    '/zk.gateway.Web/GetUniswapLeaderboard',
    grpcWeb.MethodType.UNARY,
    gateway_pb.GetUniswapLeaderboardRequest,
    gateway_pb.GetUniswapLeaderboardResponse,
    (request: gateway_pb.GetUniswapLeaderboardRequest) => {
      return request.serializeBinary();
    },
    gateway_pb.GetUniswapLeaderboardResponse.deserializeBinary
  );

  getUniswapLeaderboard(
    request: gateway_pb.GetUniswapLeaderboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<gateway_pb.GetUniswapLeaderboardResponse>;

  getUniswapLeaderboard(
    request: gateway_pb.GetUniswapLeaderboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gateway_pb.GetUniswapLeaderboardResponse) => void): grpcWeb.ClientReadableStream<gateway_pb.GetUniswapLeaderboardResponse>;

  getUniswapLeaderboard(
    request: gateway_pb.GetUniswapLeaderboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gateway_pb.GetUniswapLeaderboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.gateway.Web/GetUniswapLeaderboard',
        request,
        metadata || {},
        this.methodInfoGetUniswapLeaderboard,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.gateway.Web/GetUniswapLeaderboard',
    request,
    metadata || {},
    this.methodInfoGetUniswapLeaderboard);
  }

  methodInfoCheckUniswapSumVolume = new grpcWeb.MethodDescriptor(
    '/zk.gateway.Web/CheckUniswapSumVolume',
    grpcWeb.MethodType.UNARY,
    gateway_pb.CheckUniswapSumVolumeRequest,
    gateway_pb.CheckUniswapSumVolumeResponse,
    (request: gateway_pb.CheckUniswapSumVolumeRequest) => {
      return request.serializeBinary();
    },
    gateway_pb.CheckUniswapSumVolumeResponse.deserializeBinary
  );

  checkUniswapSumVolume(
    request: gateway_pb.CheckUniswapSumVolumeRequest,
    metadata: grpcWeb.Metadata | null): Promise<gateway_pb.CheckUniswapSumVolumeResponse>;

  checkUniswapSumVolume(
    request: gateway_pb.CheckUniswapSumVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gateway_pb.CheckUniswapSumVolumeResponse) => void): grpcWeb.ClientReadableStream<gateway_pb.CheckUniswapSumVolumeResponse>;

  checkUniswapSumVolume(
    request: gateway_pb.CheckUniswapSumVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gateway_pb.CheckUniswapSumVolumeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.gateway.Web/CheckUniswapSumVolume',
        request,
        metadata || {},
        this.methodInfoCheckUniswapSumVolume,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.gateway.Web/CheckUniswapSumVolume',
    request,
    metadata || {},
    this.methodInfoCheckUniswapSumVolume);
  }

  methodInfoGenerateUniswapSumProof = new grpcWeb.MethodDescriptor(
    '/zk.gateway.Web/GenerateUniswapSumProof',
    grpcWeb.MethodType.UNARY,
    gateway_pb.GenerateUniswapSumProofRequest,
    gateway_pb.GenerateUniswapSumProofResponse,
    (request: gateway_pb.GenerateUniswapSumProofRequest) => {
      return request.serializeBinary();
    },
    gateway_pb.GenerateUniswapSumProofResponse.deserializeBinary
  );

  generateUniswapSumProof(
    request: gateway_pb.GenerateUniswapSumProofRequest,
    metadata: grpcWeb.Metadata | null): Promise<gateway_pb.GenerateUniswapSumProofResponse>;

  generateUniswapSumProof(
    request: gateway_pb.GenerateUniswapSumProofRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gateway_pb.GenerateUniswapSumProofResponse) => void): grpcWeb.ClientReadableStream<gateway_pb.GenerateUniswapSumProofResponse>;

  generateUniswapSumProof(
    request: gateway_pb.GenerateUniswapSumProofRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gateway_pb.GenerateUniswapSumProofResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zk.gateway.Web/GenerateUniswapSumProof',
        request,
        metadata || {},
        this.methodInfoGenerateUniswapSumProof,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zk.gateway.Web/GenerateUniswapSumProof',
    request,
    metadata || {},
    this.methodInfoGenerateUniswapSumProof);
  }

}

