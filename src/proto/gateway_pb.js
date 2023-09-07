// source: gateway.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_api_annotations_pb = require('./google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.zk.gateway.Amount', null, global);
goog.exportSymbol('proto.zk.gateway.AttestedSlot', null, global);
goog.exportSymbol('proto.zk.gateway.AttestedTransaction', null, global);
goog.exportSymbol('proto.zk.gateway.AttestedTransactionsRequest', null, global);
goog.exportSymbol('proto.zk.gateway.AttestedTransactionsResponse', null, global);
goog.exportSymbol('proto.zk.gateway.BlockData', null, global);
goog.exportSymbol('proto.zk.gateway.Chain', null, global);
goog.exportSymbol('proto.zk.gateway.CheckFriendShipRequest', null, global);
goog.exportSymbol('proto.zk.gateway.CheckFriendShipResponse', null, global);
goog.exportSymbol('proto.zk.gateway.CheckStatus', null, global);
goog.exportSymbol('proto.zk.gateway.CheckUniNFTEligibilityRequest', null, global);
goog.exportSymbol('proto.zk.gateway.CheckUniNFTEligibilityResponse', null, global);
goog.exportSymbol('proto.zk.gateway.CheckUniswapSumVolumeRequest', null, global);
goog.exportSymbol('proto.zk.gateway.CheckUniswapSumVolumeResponse', null, global);
goog.exportSymbol('proto.zk.gateway.ErrCode', null, global);
goog.exportSymbol('proto.zk.gateway.ErrMsg', null, global);
goog.exportSymbol('proto.zk.gateway.FriendShipHistory', null, global);
goog.exportSymbol('proto.zk.gateway.FriendShipResponse', null, global);
goog.exportSymbol('proto.zk.gateway.GenerateReceiptProofRequest', null, global);
goog.exportSymbol('proto.zk.gateway.GenerateReceiptProofResponse', null, global);
goog.exportSymbol('proto.zk.gateway.GenerateSlotValueProofRequest', null, global);
goog.exportSymbol('proto.zk.gateway.GenerateSlotValueProofResponse', null, global);
goog.exportSymbol('proto.zk.gateway.GenerateTransactionProofRequest', null, global);
goog.exportSymbol('proto.zk.gateway.GenerateTransactionProofResponse', null, global);
goog.exportSymbol('proto.zk.gateway.GenerateUniswapSumProofRequest', null, global);
goog.exportSymbol('proto.zk.gateway.GenerateUniswapSumProofResponse', null, global);
goog.exportSymbol('proto.zk.gateway.GetAttestedFriendShipRequest', null, global);
goog.exportSymbol('proto.zk.gateway.GetAttestedFriendShipResponse', null, global);
goog.exportSymbol('proto.zk.gateway.GetHistoryRequest', null, global);
goog.exportSymbol('proto.zk.gateway.GetHistoryResponse', null, global);
goog.exportSymbol('proto.zk.gateway.GetProofDataRequest', null, global);
goog.exportSymbol('proto.zk.gateway.GetProofDataResponse', null, global);
goog.exportSymbol('proto.zk.gateway.GetProofRequest', null, global);
goog.exportSymbol('proto.zk.gateway.GetProofResponse', null, global);
goog.exportSymbol('proto.zk.gateway.GetRecentAttestedSlotRequest', null, global);
goog.exportSymbol('proto.zk.gateway.GetRecentAttestedSlotResponse', null, global);
goog.exportSymbol('proto.zk.gateway.GetSocialGraphDataRequest', null, global);
goog.exportSymbol('proto.zk.gateway.GetSocialGraphDataResponse', null, global);
goog.exportSymbol('proto.zk.gateway.GetTokensRequest', null, global);
goog.exportSymbol('proto.zk.gateway.GetTokensResponse', null, global);
goog.exportSymbol('proto.zk.gateway.GetTransferRequest', null, global);
goog.exportSymbol('proto.zk.gateway.GetTransferResponse', null, global);
goog.exportSymbol('proto.zk.gateway.GetUniswapLeaderboardRequest', null, global);
goog.exportSymbol('proto.zk.gateway.GetUniswapLeaderboardResponse', null, global);
goog.exportSymbol('proto.zk.gateway.GraphData', null, global);
goog.exportSymbol('proto.zk.gateway.LeaderboardItem', null, global);
goog.exportSymbol('proto.zk.gateway.Proof', null, global);
goog.exportSymbol('proto.zk.gateway.SocialConnection', null, global);
goog.exportSymbol('proto.zk.gateway.Tier', null, global);
goog.exportSymbol('proto.zk.gateway.TierNFT', null, global);
goog.exportSymbol('proto.zk.gateway.Token', null, global);
goog.exportSymbol('proto.zk.gateway.TokenType', null, global);
goog.exportSymbol('proto.zk.gateway.Tokens', null, global);
goog.exportSymbol('proto.zk.gateway.TransferHistory', null, global);
goog.exportSymbol('proto.zk.gateway.TransferStatus', null, global);
goog.exportSymbol('proto.zk.gateway.UniNFTEligibilityResponse', null, global);
goog.exportSymbol('proto.zk.gateway.UniswapSumVolumeResponse', null, global);
goog.exportSymbol('proto.zk.gateway.UserNode', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GenerateReceiptProofRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GenerateReceiptProofRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GenerateReceiptProofRequest.displayName = 'proto.zk.gateway.GenerateReceiptProofRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GenerateReceiptProofResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GenerateReceiptProofResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GenerateReceiptProofResponse.displayName = 'proto.zk.gateway.GenerateReceiptProofResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetProofDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GetProofDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetProofDataRequest.displayName = 'proto.zk.gateway.GetProofDataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetProofDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GetProofDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetProofDataResponse.displayName = 'proto.zk.gateway.GetProofDataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GraphData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GraphData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GraphData.displayName = 'proto.zk.gateway.GraphData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.BlockData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.BlockData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.BlockData.displayName = 'proto.zk.gateway.BlockData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.Proof = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.Proof, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.Proof.displayName = 'proto.zk.gateway.Proof';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetTokensRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GetTokensRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetTokensRequest.displayName = 'proto.zk.gateway.GetTokensRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetTokensResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GetTokensResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetTokensResponse.displayName = 'proto.zk.gateway.GetTokensResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GetHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetHistoryRequest.displayName = 'proto.zk.gateway.GetHistoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zk.gateway.GetHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.zk.gateway.GetHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetHistoryResponse.displayName = 'proto.zk.gateway.GetHistoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetTransferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GetTransferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetTransferRequest.displayName = 'proto.zk.gateway.GetTransferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetTransferResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GetTransferResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetTransferResponse.displayName = 'proto.zk.gateway.GetTransferResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.TransferHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.TransferHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.TransferHistory.displayName = 'proto.zk.gateway.TransferHistory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.Amount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.Amount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.Amount.displayName = 'proto.zk.gateway.Amount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.Chain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.Chain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.Chain.displayName = 'proto.zk.gateway.Chain';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.Token = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.Token, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.Token.displayName = 'proto.zk.gateway.Token';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.Tokens = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zk.gateway.Tokens.repeatedFields_, null);
};
goog.inherits(proto.zk.gateway.Tokens, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.Tokens.displayName = 'proto.zk.gateway.Tokens';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetProofRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GetProofRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetProofRequest.displayName = 'proto.zk.gateway.GetProofRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetProofResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GetProofResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetProofResponse.displayName = 'proto.zk.gateway.GetProofResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GenerateSlotValueProofRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GenerateSlotValueProofRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GenerateSlotValueProofRequest.displayName = 'proto.zk.gateway.GenerateSlotValueProofRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GenerateSlotValueProofResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GenerateSlotValueProofResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GenerateSlotValueProofResponse.displayName = 'proto.zk.gateway.GenerateSlotValueProofResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetRecentAttestedSlotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GetRecentAttestedSlotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetRecentAttestedSlotRequest.displayName = 'proto.zk.gateway.GetRecentAttestedSlotRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetRecentAttestedSlotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zk.gateway.GetRecentAttestedSlotResponse.repeatedFields_, null);
};
goog.inherits(proto.zk.gateway.GetRecentAttestedSlotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetRecentAttestedSlotResponse.displayName = 'proto.zk.gateway.GetRecentAttestedSlotResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.AttestedSlot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.AttestedSlot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.AttestedSlot.displayName = 'proto.zk.gateway.AttestedSlot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GenerateTransactionProofRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GenerateTransactionProofRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GenerateTransactionProofRequest.displayName = 'proto.zk.gateway.GenerateTransactionProofRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GenerateTransactionProofResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GenerateTransactionProofResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GenerateTransactionProofResponse.displayName = 'proto.zk.gateway.GenerateTransactionProofResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.AttestedTransactionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.AttestedTransactionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.AttestedTransactionsRequest.displayName = 'proto.zk.gateway.AttestedTransactionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.AttestedTransactionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zk.gateway.AttestedTransactionsResponse.repeatedFields_, null);
};
goog.inherits(proto.zk.gateway.AttestedTransactionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.AttestedTransactionsResponse.displayName = 'proto.zk.gateway.AttestedTransactionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.AttestedTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.AttestedTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.AttestedTransaction.displayName = 'proto.zk.gateway.AttestedTransaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.CheckUniNFTEligibilityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.CheckUniNFTEligibilityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.CheckUniNFTEligibilityRequest.displayName = 'proto.zk.gateway.CheckUniNFTEligibilityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.CheckUniNFTEligibilityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.CheckUniNFTEligibilityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.CheckUniNFTEligibilityResponse.displayName = 'proto.zk.gateway.CheckUniNFTEligibilityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.UniNFTEligibilityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.UniNFTEligibilityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.UniNFTEligibilityResponse.displayName = 'proto.zk.gateway.UniNFTEligibilityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.TierNFT = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.TierNFT, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.TierNFT.displayName = 'proto.zk.gateway.TierNFT';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetSocialGraphDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GetSocialGraphDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetSocialGraphDataRequest.displayName = 'proto.zk.gateway.GetSocialGraphDataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetSocialGraphDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zk.gateway.GetSocialGraphDataResponse.repeatedFields_, null);
};
goog.inherits(proto.zk.gateway.GetSocialGraphDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetSocialGraphDataResponse.displayName = 'proto.zk.gateway.GetSocialGraphDataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.UserNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.UserNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.UserNode.displayName = 'proto.zk.gateway.UserNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.SocialConnection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.SocialConnection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.SocialConnection.displayName = 'proto.zk.gateway.SocialConnection';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetAttestedFriendShipRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GetAttestedFriendShipRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetAttestedFriendShipRequest.displayName = 'proto.zk.gateway.GetAttestedFriendShipRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetAttestedFriendShipResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zk.gateway.GetAttestedFriendShipResponse.repeatedFields_, null);
};
goog.inherits(proto.zk.gateway.GetAttestedFriendShipResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetAttestedFriendShipResponse.displayName = 'proto.zk.gateway.GetAttestedFriendShipResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.FriendShipHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.FriendShipHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.FriendShipHistory.displayName = 'proto.zk.gateway.FriendShipHistory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.CheckFriendShipRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.CheckFriendShipRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.CheckFriendShipRequest.displayName = 'proto.zk.gateway.CheckFriendShipRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.CheckFriendShipResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.CheckFriendShipResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.CheckFriendShipResponse.displayName = 'proto.zk.gateway.CheckFriendShipResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.FriendShipResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.FriendShipResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.FriendShipResponse.displayName = 'proto.zk.gateway.FriendShipResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.ErrMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.ErrMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.ErrMsg.displayName = 'proto.zk.gateway.ErrMsg';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetUniswapLeaderboardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GetUniswapLeaderboardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetUniswapLeaderboardRequest.displayName = 'proto.zk.gateway.GetUniswapLeaderboardRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GetUniswapLeaderboardResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zk.gateway.GetUniswapLeaderboardResponse.repeatedFields_, null);
};
goog.inherits(proto.zk.gateway.GetUniswapLeaderboardResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GetUniswapLeaderboardResponse.displayName = 'proto.zk.gateway.GetUniswapLeaderboardResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.LeaderboardItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.LeaderboardItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.LeaderboardItem.displayName = 'proto.zk.gateway.LeaderboardItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.CheckUniswapSumVolumeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.CheckUniswapSumVolumeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.CheckUniswapSumVolumeRequest.displayName = 'proto.zk.gateway.CheckUniswapSumVolumeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.CheckUniswapSumVolumeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.CheckUniswapSumVolumeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.CheckUniswapSumVolumeResponse.displayName = 'proto.zk.gateway.CheckUniswapSumVolumeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.UniswapSumVolumeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zk.gateway.UniswapSumVolumeResponse.repeatedFields_, null);
};
goog.inherits(proto.zk.gateway.UniswapSumVolumeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.UniswapSumVolumeResponse.displayName = 'proto.zk.gateway.UniswapSumVolumeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GenerateUniswapSumProofRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GenerateUniswapSumProofRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GenerateUniswapSumProofRequest.displayName = 'proto.zk.gateway.GenerateUniswapSumProofRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zk.gateway.GenerateUniswapSumProofResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zk.gateway.GenerateUniswapSumProofResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zk.gateway.GenerateUniswapSumProofResponse.displayName = 'proto.zk.gateway.GenerateUniswapSumProofResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GenerateReceiptProofRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GenerateReceiptProofRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GenerateReceiptProofRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GenerateReceiptProofRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    transactionHash: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GenerateReceiptProofRequest}
 */
proto.zk.gateway.GenerateReceiptProofRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GenerateReceiptProofRequest;
  return proto.zk.gateway.GenerateReceiptProofRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GenerateReceiptProofRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GenerateReceiptProofRequest}
 */
proto.zk.gateway.GenerateReceiptProofRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GenerateReceiptProofRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GenerateReceiptProofRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GenerateReceiptProofRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GenerateReceiptProofRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTransactionHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 chain_id = 1;
 * @return {number}
 */
proto.zk.gateway.GenerateReceiptProofRequest.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.GenerateReceiptProofRequest} returns this
 */
proto.zk.gateway.GenerateReceiptProofRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string transaction_hash = 2;
 * @return {string}
 */
proto.zk.gateway.GenerateReceiptProofRequest.prototype.getTransactionHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.GenerateReceiptProofRequest} returns this
 */
proto.zk.gateway.GenerateReceiptProofRequest.prototype.setTransactionHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GenerateReceiptProofResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GenerateReceiptProofResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GenerateReceiptProofResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GenerateReceiptProofResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.zk.gateway.ErrMsg.toObject(includeInstance, f),
    proofId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GenerateReceiptProofResponse}
 */
proto.zk.gateway.GenerateReceiptProofResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GenerateReceiptProofResponse;
  return proto.zk.gateway.GenerateReceiptProofResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GenerateReceiptProofResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GenerateReceiptProofResponse}
 */
proto.zk.gateway.GenerateReceiptProofResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zk.gateway.ErrMsg;
      reader.readMessage(value,proto.zk.gateway.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProofId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GenerateReceiptProofResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GenerateReceiptProofResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GenerateReceiptProofResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GenerateReceiptProofResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zk.gateway.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getProofId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.zk.gateway.ErrMsg}
 */
proto.zk.gateway.GenerateReceiptProofResponse.prototype.getErr = function() {
  return /** @type{?proto.zk.gateway.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.ErrMsg, 1));
};


/**
 * @param {?proto.zk.gateway.ErrMsg|undefined} value
 * @return {!proto.zk.gateway.GenerateReceiptProofResponse} returns this
*/
proto.zk.gateway.GenerateReceiptProofResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.GenerateReceiptProofResponse} returns this
 */
proto.zk.gateway.GenerateReceiptProofResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.GenerateReceiptProofResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string proof_id = 2;
 * @return {string}
 */
proto.zk.gateway.GenerateReceiptProofResponse.prototype.getProofId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.GenerateReceiptProofResponse} returns this
 */
proto.zk.gateway.GenerateReceiptProofResponse.prototype.setProofId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetProofDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetProofDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetProofDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetProofDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetProofDataRequest}
 */
proto.zk.gateway.GetProofDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetProofDataRequest;
  return proto.zk.gateway.GetProofDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetProofDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetProofDataRequest}
 */
proto.zk.gateway.GetProofDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetProofDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetProofDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetProofDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetProofDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetProofDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetProofDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetProofDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetProofDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    graphDataMap: (f = msg.getGraphDataMap()) ? f.toObject(includeInstance, proto.zk.gateway.GraphData.toObject) : [],
    latestBlockMap: (f = msg.getLatestBlockMap()) ? f.toObject(includeInstance, proto.zk.gateway.BlockData.toObject) : [],
    latestProofMap: (f = msg.getLatestProofMap()) ? f.toObject(includeInstance, proto.zk.gateway.Proof.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetProofDataResponse}
 */
proto.zk.gateway.GetProofDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetProofDataResponse;
  return proto.zk.gateway.GetProofDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetProofDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetProofDataResponse}
 */
proto.zk.gateway.GetProofDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getGraphDataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readMessage, proto.zk.gateway.GraphData.deserializeBinaryFromReader, 0, new proto.zk.gateway.GraphData());
         });
      break;
    case 2:
      var value = msg.getLatestBlockMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readMessage, proto.zk.gateway.BlockData.deserializeBinaryFromReader, 0, new proto.zk.gateway.BlockData());
         });
      break;
    case 3:
      var value = msg.getLatestProofMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readMessage, proto.zk.gateway.Proof.deserializeBinaryFromReader, 0, new proto.zk.gateway.Proof());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetProofDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetProofDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetProofDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetProofDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGraphDataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeMessage, proto.zk.gateway.GraphData.serializeBinaryToWriter);
  }
  f = message.getLatestBlockMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeMessage, proto.zk.gateway.BlockData.serializeBinaryToWriter);
  }
  f = message.getLatestProofMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeMessage, proto.zk.gateway.Proof.serializeBinaryToWriter);
  }
};


/**
 * map<uint32, GraphData> graph_data = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.zk.gateway.GraphData>}
 */
proto.zk.gateway.GetProofDataResponse.prototype.getGraphDataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.zk.gateway.GraphData>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.zk.gateway.GraphData));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.zk.gateway.GetProofDataResponse} returns this
 */
proto.zk.gateway.GetProofDataResponse.prototype.clearGraphDataMap = function() {
  this.getGraphDataMap().clear();
  return this;};


/**
 * map<uint32, BlockData> latest_block = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.zk.gateway.BlockData>}
 */
proto.zk.gateway.GetProofDataResponse.prototype.getLatestBlockMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.zk.gateway.BlockData>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.zk.gateway.BlockData));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.zk.gateway.GetProofDataResponse} returns this
 */
proto.zk.gateway.GetProofDataResponse.prototype.clearLatestBlockMap = function() {
  this.getLatestBlockMap().clear();
  return this;};


/**
 * map<uint32, Proof> latest_proof = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.zk.gateway.Proof>}
 */
proto.zk.gateway.GetProofDataResponse.prototype.getLatestProofMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.zk.gateway.Proof>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.zk.gateway.Proof));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.zk.gateway.GetProofDataResponse} returns this
 */
proto.zk.gateway.GetProofDataResponse.prototype.clearLatestProofMap = function() {
  this.getLatestProofMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GraphData.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GraphData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GraphData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GraphData.toObject = function(includeInstance, msg) {
  var f, obj = {
    proofGenerationTimeMap: (f = msg.getProofGenerationTimeMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GraphData}
 */
proto.zk.gateway.GraphData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GraphData;
  return proto.zk.gateway.GraphData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GraphData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GraphData}
 */
proto.zk.gateway.GraphData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getProofGenerationTimeMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readUint32, null, 0, 0);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GraphData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GraphData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GraphData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GraphData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProofGenerationTimeMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeUint32);
  }
};


/**
 * map<uint32, uint32> proof_generation_time = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.zk.gateway.GraphData.prototype.getProofGenerationTimeMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.zk.gateway.GraphData} returns this
 */
proto.zk.gateway.GraphData.prototype.clearProofGenerationTimeMap = function() {
  this.getProofGenerationTimeMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.BlockData.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.BlockData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.BlockData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.BlockData.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    blockHash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    blockStateRoot: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.BlockData}
 */
proto.zk.gateway.BlockData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.BlockData;
  return proto.zk.gateway.BlockData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.BlockData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.BlockData}
 */
proto.zk.gateway.BlockData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockNumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockHash(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockStateRoot(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.BlockData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.BlockData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.BlockData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.BlockData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockNumber();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getBlockHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBlockStateRoot();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint32 block_number = 1;
 * @return {number}
 */
proto.zk.gateway.BlockData.prototype.getBlockNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.BlockData} returns this
 */
proto.zk.gateway.BlockData.prototype.setBlockNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string block_hash = 2;
 * @return {string}
 */
proto.zk.gateway.BlockData.prototype.getBlockHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.BlockData} returns this
 */
proto.zk.gateway.BlockData.prototype.setBlockHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string block_state_root = 3;
 * @return {string}
 */
proto.zk.gateway.BlockData.prototype.getBlockStateRoot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.BlockData} returns this
 */
proto.zk.gateway.BlockData.prototype.setBlockStateRoot = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 timestamp = 4;
 * @return {number}
 */
proto.zk.gateway.BlockData.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.BlockData} returns this
 */
proto.zk.gateway.BlockData.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.Proof.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.Proof.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.Proof} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.Proof.toObject = function(includeInstance, msg) {
  var f, obj = {
    proof: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.Proof}
 */
proto.zk.gateway.Proof.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.Proof;
  return proto.zk.gateway.Proof.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.Proof} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.Proof}
 */
proto.zk.gateway.Proof.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProof(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.Proof.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.Proof.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.Proof} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.Proof.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProof();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string proof = 1;
 * @return {string}
 */
proto.zk.gateway.Proof.prototype.getProof = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.Proof} returns this
 */
proto.zk.gateway.Proof.prototype.setProof = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 timestamp = 2;
 * @return {number}
 */
proto.zk.gateway.Proof.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.Proof} returns this
 */
proto.zk.gateway.Proof.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetTokensRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetTokensRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetTokensRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetTokensRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetTokensRequest}
 */
proto.zk.gateway.GetTokensRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetTokensRequest;
  return proto.zk.gateway.GetTokensRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetTokensRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetTokensRequest}
 */
proto.zk.gateway.GetTokensRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetTokensRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetTokensRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetTokensRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetTokensRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetTokensResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetTokensResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetTokensResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetTokensResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokensMap: (f = msg.getTokensMap()) ? f.toObject(includeInstance, proto.zk.gateway.Tokens.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetTokensResponse}
 */
proto.zk.gateway.GetTokensResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetTokensResponse;
  return proto.zk.gateway.GetTokensResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetTokensResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetTokensResponse}
 */
proto.zk.gateway.GetTokensResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getTokensMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readMessage, proto.zk.gateway.Tokens.deserializeBinaryFromReader, 0, new proto.zk.gateway.Tokens());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetTokensResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetTokensResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetTokensResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetTokensResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokensMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeMessage, proto.zk.gateway.Tokens.serializeBinaryToWriter);
  }
};


/**
 * map<uint32, Tokens> tokens = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.zk.gateway.Tokens>}
 */
proto.zk.gateway.GetTokensResponse.prototype.getTokensMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.zk.gateway.Tokens>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.zk.gateway.Tokens));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.zk.gateway.GetTokensResponse} returns this
 */
proto.zk.gateway.GetTokensResponse.prototype.clearTokensMap = function() {
  this.getTokensMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    addr: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetHistoryRequest}
 */
proto.zk.gateway.GetHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetHistoryRequest;
  return proto.zk.gateway.GetHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetHistoryRequest}
 */
proto.zk.gateway.GetHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAddr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string next_page_token = 1;
 * @return {string}
 */
proto.zk.gateway.GetHistoryRequest.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.GetHistoryRequest} returns this
 */
proto.zk.gateway.GetHistoryRequest.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 page_size = 2;
 * @return {number}
 */
proto.zk.gateway.GetHistoryRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.GetHistoryRequest} returns this
 */
proto.zk.gateway.GetHistoryRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string addr = 3;
 * @return {string}
 */
proto.zk.gateway.GetHistoryRequest.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.GetHistoryRequest} returns this
 */
proto.zk.gateway.GetHistoryRequest.prototype.setAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zk.gateway.GetHistoryResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.zk.gateway.ErrMsg.toObject(includeInstance, f),
    historyList: jspb.Message.toObjectList(msg.getHistoryList(),
    proto.zk.gateway.TransferHistory.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    currentSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetHistoryResponse}
 */
proto.zk.gateway.GetHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetHistoryResponse;
  return proto.zk.gateway.GetHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetHistoryResponse}
 */
proto.zk.gateway.GetHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zk.gateway.ErrMsg;
      reader.readMessage(value,proto.zk.gateway.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = new proto.zk.gateway.TransferHistory;
      reader.readMessage(value,proto.zk.gateway.TransferHistory.deserializeBinaryFromReader);
      msg.addHistory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCurrentSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zk.gateway.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.zk.gateway.TransferHistory.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCurrentSize();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.zk.gateway.ErrMsg}
 */
proto.zk.gateway.GetHistoryResponse.prototype.getErr = function() {
  return /** @type{?proto.zk.gateway.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.ErrMsg, 1));
};


/**
 * @param {?proto.zk.gateway.ErrMsg|undefined} value
 * @return {!proto.zk.gateway.GetHistoryResponse} returns this
*/
proto.zk.gateway.GetHistoryResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.GetHistoryResponse} returns this
 */
proto.zk.gateway.GetHistoryResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.GetHistoryResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated TransferHistory history = 2;
 * @return {!Array<!proto.zk.gateway.TransferHistory>}
 */
proto.zk.gateway.GetHistoryResponse.prototype.getHistoryList = function() {
  return /** @type{!Array<!proto.zk.gateway.TransferHistory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zk.gateway.TransferHistory, 2));
};


/**
 * @param {!Array<!proto.zk.gateway.TransferHistory>} value
 * @return {!proto.zk.gateway.GetHistoryResponse} returns this
*/
proto.zk.gateway.GetHistoryResponse.prototype.setHistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zk.gateway.TransferHistory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zk.gateway.TransferHistory}
 */
proto.zk.gateway.GetHistoryResponse.prototype.addHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zk.gateway.TransferHistory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zk.gateway.GetHistoryResponse} returns this
 */
proto.zk.gateway.GetHistoryResponse.prototype.clearHistoryList = function() {
  return this.setHistoryList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.zk.gateway.GetHistoryResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.GetHistoryResponse} returns this
 */
proto.zk.gateway.GetHistoryResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 current_size = 4;
 * @return {number}
 */
proto.zk.gateway.GetHistoryResponse.prototype.getCurrentSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.GetHistoryResponse} returns this
 */
proto.zk.gateway.GetHistoryResponse.prototype.setCurrentSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetTransferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetTransferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetTransferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetTransferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tx: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetTransferRequest}
 */
proto.zk.gateway.GetTransferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetTransferRequest;
  return proto.zk.gateway.GetTransferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetTransferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetTransferRequest}
 */
proto.zk.gateway.GetTransferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetTransferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetTransferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetTransferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetTransferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTx();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tx = 1;
 * @return {string}
 */
proto.zk.gateway.GetTransferRequest.prototype.getTx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.GetTransferRequest} returns this
 */
proto.zk.gateway.GetTransferRequest.prototype.setTx = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetTransferResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetTransferResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetTransferResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetTransferResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.zk.gateway.ErrMsg.toObject(includeInstance, f),
    transfer: (f = msg.getTransfer()) && proto.zk.gateway.TransferHistory.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetTransferResponse}
 */
proto.zk.gateway.GetTransferResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetTransferResponse;
  return proto.zk.gateway.GetTransferResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetTransferResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetTransferResponse}
 */
proto.zk.gateway.GetTransferResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zk.gateway.ErrMsg;
      reader.readMessage(value,proto.zk.gateway.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = new proto.zk.gateway.TransferHistory;
      reader.readMessage(value,proto.zk.gateway.TransferHistory.deserializeBinaryFromReader);
      msg.setTransfer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetTransferResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetTransferResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetTransferResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetTransferResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zk.gateway.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getTransfer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.zk.gateway.TransferHistory.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.zk.gateway.ErrMsg}
 */
proto.zk.gateway.GetTransferResponse.prototype.getErr = function() {
  return /** @type{?proto.zk.gateway.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.ErrMsg, 1));
};


/**
 * @param {?proto.zk.gateway.ErrMsg|undefined} value
 * @return {!proto.zk.gateway.GetTransferResponse} returns this
*/
proto.zk.gateway.GetTransferResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.GetTransferResponse} returns this
 */
proto.zk.gateway.GetTransferResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.GetTransferResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TransferHistory transfer = 2;
 * @return {?proto.zk.gateway.TransferHistory}
 */
proto.zk.gateway.GetTransferResponse.prototype.getTransfer = function() {
  return /** @type{?proto.zk.gateway.TransferHistory} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.TransferHistory, 2));
};


/**
 * @param {?proto.zk.gateway.TransferHistory|undefined} value
 * @return {!proto.zk.gateway.GetTransferResponse} returns this
*/
proto.zk.gateway.GetTransferResponse.prototype.setTransfer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.GetTransferResponse} returns this
 */
proto.zk.gateway.GetTransferResponse.prototype.clearTransfer = function() {
  return this.setTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.GetTransferResponse.prototype.hasTransfer = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.TransferHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.TransferHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.TransferHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.TransferHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    srcSendAmt: (f = msg.getSrcSendAmt()) && proto.zk.gateway.Amount.toObject(includeInstance, f),
    dstReceivedAmt: (f = msg.getDstReceivedAmt()) && proto.zk.gateway.Amount.toObject(includeInstance, f),
    ct: jspb.Message.getFieldWithDefault(msg, 4, 0),
    ut: jspb.Message.getFieldWithDefault(msg, 5, 0),
    srcTx: jspb.Message.getFieldWithDefault(msg, 6, ""),
    dstTx: jspb.Message.getFieldWithDefault(msg, 7, ""),
    status: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.TransferHistory}
 */
proto.zk.gateway.TransferHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.TransferHistory;
  return proto.zk.gateway.TransferHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.TransferHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.TransferHistory}
 */
proto.zk.gateway.TransferHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferId(value);
      break;
    case 2:
      var value = new proto.zk.gateway.Amount;
      reader.readMessage(value,proto.zk.gateway.Amount.deserializeBinaryFromReader);
      msg.setSrcSendAmt(value);
      break;
    case 3:
      var value = new proto.zk.gateway.Amount;
      reader.readMessage(value,proto.zk.gateway.Amount.deserializeBinaryFromReader);
      msg.setDstReceivedAmt(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUt(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcTx(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstTx(value);
      break;
    case 8:
      var value = /** @type {!proto.zk.gateway.TransferStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.TransferHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.TransferHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.TransferHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.TransferHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSrcSendAmt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.zk.gateway.Amount.serializeBinaryToWriter
    );
  }
  f = message.getDstReceivedAmt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zk.gateway.Amount.serializeBinaryToWriter
    );
  }
  f = message.getCt();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getUt();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getSrcTx();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDstTx();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional string transfer_id = 1;
 * @return {string}
 */
proto.zk.gateway.TransferHistory.prototype.getTransferId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.TransferHistory} returns this
 */
proto.zk.gateway.TransferHistory.prototype.setTransferId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Amount src_send_amt = 2;
 * @return {?proto.zk.gateway.Amount}
 */
proto.zk.gateway.TransferHistory.prototype.getSrcSendAmt = function() {
  return /** @type{?proto.zk.gateway.Amount} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.Amount, 2));
};


/**
 * @param {?proto.zk.gateway.Amount|undefined} value
 * @return {!proto.zk.gateway.TransferHistory} returns this
*/
proto.zk.gateway.TransferHistory.prototype.setSrcSendAmt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.TransferHistory} returns this
 */
proto.zk.gateway.TransferHistory.prototype.clearSrcSendAmt = function() {
  return this.setSrcSendAmt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.TransferHistory.prototype.hasSrcSendAmt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Amount dst_received_amt = 3;
 * @return {?proto.zk.gateway.Amount}
 */
proto.zk.gateway.TransferHistory.prototype.getDstReceivedAmt = function() {
  return /** @type{?proto.zk.gateway.Amount} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.Amount, 3));
};


/**
 * @param {?proto.zk.gateway.Amount|undefined} value
 * @return {!proto.zk.gateway.TransferHistory} returns this
*/
proto.zk.gateway.TransferHistory.prototype.setDstReceivedAmt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.TransferHistory} returns this
 */
proto.zk.gateway.TransferHistory.prototype.clearDstReceivedAmt = function() {
  return this.setDstReceivedAmt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.TransferHistory.prototype.hasDstReceivedAmt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 ct = 4;
 * @return {number}
 */
proto.zk.gateway.TransferHistory.prototype.getCt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.TransferHistory} returns this
 */
proto.zk.gateway.TransferHistory.prototype.setCt = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 ut = 5;
 * @return {number}
 */
proto.zk.gateway.TransferHistory.prototype.getUt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.TransferHistory} returns this
 */
proto.zk.gateway.TransferHistory.prototype.setUt = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string src_tx = 6;
 * @return {string}
 */
proto.zk.gateway.TransferHistory.prototype.getSrcTx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.TransferHistory} returns this
 */
proto.zk.gateway.TransferHistory.prototype.setSrcTx = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string dst_tx = 7;
 * @return {string}
 */
proto.zk.gateway.TransferHistory.prototype.getDstTx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.TransferHistory} returns this
 */
proto.zk.gateway.TransferHistory.prototype.setDstTx = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional TransferStatus status = 8;
 * @return {!proto.zk.gateway.TransferStatus}
 */
proto.zk.gateway.TransferHistory.prototype.getStatus = function() {
  return /** @type {!proto.zk.gateway.TransferStatus} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.zk.gateway.TransferStatus} value
 * @return {!proto.zk.gateway.TransferHistory} returns this
 */
proto.zk.gateway.TransferHistory.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.Amount.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.Amount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.Amount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.Amount.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: (f = msg.getToken()) && proto.zk.gateway.Token.toObject(includeInstance, f),
    amount: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.Amount}
 */
proto.zk.gateway.Amount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.Amount;
  return proto.zk.gateway.Amount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.Amount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.Amount}
 */
proto.zk.gateway.Amount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.zk.gateway.Token;
      reader.readMessage(value,proto.zk.gateway.Token.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.Amount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.Amount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.Amount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.Amount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.zk.gateway.Token.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Token token = 2;
 * @return {?proto.zk.gateway.Token}
 */
proto.zk.gateway.Amount.prototype.getToken = function() {
  return /** @type{?proto.zk.gateway.Token} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.Token, 2));
};


/**
 * @param {?proto.zk.gateway.Token|undefined} value
 * @return {!proto.zk.gateway.Amount} returns this
*/
proto.zk.gateway.Amount.prototype.setToken = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.Amount} returns this
 */
proto.zk.gateway.Amount.prototype.clearToken = function() {
  return this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.Amount.prototype.hasToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string amount = 3;
 * @return {string}
 */
proto.zk.gateway.Amount.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.Amount} returns this
 */
proto.zk.gateway.Amount.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.Chain.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.Chain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.Chain} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.Chain.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 3, ""),
    blockDelay: jspb.Message.getFieldWithDefault(msg, 4, 0),
    gasTokenSymbol: jspb.Message.getFieldWithDefault(msg, 5, ""),
    exploreUrl: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.Chain}
 */
proto.zk.gateway.Chain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.Chain;
  return proto.zk.gateway.Chain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.Chain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.Chain}
 */
proto.zk.gateway.Chain.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockDelay(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGasTokenSymbol(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setExploreUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.Chain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.Chain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.Chain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.Chain.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBlockDelay();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getGasTokenSymbol();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getExploreUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.zk.gateway.Chain.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.Chain} returns this
 */
proto.zk.gateway.Chain.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.zk.gateway.Chain.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.Chain} returns this
 */
proto.zk.gateway.Chain.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string icon = 3;
 * @return {string}
 */
proto.zk.gateway.Chain.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.Chain} returns this
 */
proto.zk.gateway.Chain.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 block_delay = 4;
 * @return {number}
 */
proto.zk.gateway.Chain.prototype.getBlockDelay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.Chain} returns this
 */
proto.zk.gateway.Chain.prototype.setBlockDelay = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string gas_token_symbol = 5;
 * @return {string}
 */
proto.zk.gateway.Chain.prototype.getGasTokenSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.Chain} returns this
 */
proto.zk.gateway.Chain.prototype.setGasTokenSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string explore_url = 6;
 * @return {string}
 */
proto.zk.gateway.Chain.prototype.getExploreUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.Chain} returns this
 */
proto.zk.gateway.Chain.prototype.setExploreUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.Token.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.Token.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.Token} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.Token.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    symbol: jspb.Message.getFieldWithDefault(msg, 2, ""),
    addr: jspb.Message.getFieldWithDefault(msg, 3, ""),
    decimal: jspb.Message.getFieldWithDefault(msg, 4, 0),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 6, ""),
    type: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.Token}
 */
proto.zk.gateway.Token.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.Token;
  return proto.zk.gateway.Token.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.Token} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.Token}
 */
proto.zk.gateway.Token.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDecimal(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 7:
      var value = /** @type {!proto.zk.gateway.TokenType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.Token.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.Token.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.Token} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.Token.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDecimal();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional uint64 chain_id = 1;
 * @return {number}
 */
proto.zk.gateway.Token.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.Token} returns this
 */
proto.zk.gateway.Token.prototype.setChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string symbol = 2;
 * @return {string}
 */
proto.zk.gateway.Token.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.Token} returns this
 */
proto.zk.gateway.Token.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string addr = 3;
 * @return {string}
 */
proto.zk.gateway.Token.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.Token} returns this
 */
proto.zk.gateway.Token.prototype.setAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 decimal = 4;
 * @return {number}
 */
proto.zk.gateway.Token.prototype.getDecimal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.Token} returns this
 */
proto.zk.gateway.Token.prototype.setDecimal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.zk.gateway.Token.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.Token} returns this
 */
proto.zk.gateway.Token.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string icon = 6;
 * @return {string}
 */
proto.zk.gateway.Token.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.Token} returns this
 */
proto.zk.gateway.Token.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional TokenType type = 7;
 * @return {!proto.zk.gateway.TokenType}
 */
proto.zk.gateway.Token.prototype.getType = function() {
  return /** @type {!proto.zk.gateway.TokenType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.zk.gateway.TokenType} value
 * @return {!proto.zk.gateway.Token} returns this
 */
proto.zk.gateway.Token.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zk.gateway.Tokens.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.Tokens.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.Tokens.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.Tokens} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.Tokens.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokensList: jspb.Message.toObjectList(msg.getTokensList(),
    proto.zk.gateway.Token.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.Tokens}
 */
proto.zk.gateway.Tokens.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.Tokens;
  return proto.zk.gateway.Tokens.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.Tokens} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.Tokens}
 */
proto.zk.gateway.Tokens.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zk.gateway.Token;
      reader.readMessage(value,proto.zk.gateway.Token.deserializeBinaryFromReader);
      msg.addTokens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.Tokens.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.Tokens.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.Tokens} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.Tokens.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokensList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zk.gateway.Token.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Token tokens = 1;
 * @return {!Array<!proto.zk.gateway.Token>}
 */
proto.zk.gateway.Tokens.prototype.getTokensList = function() {
  return /** @type{!Array<!proto.zk.gateway.Token>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zk.gateway.Token, 1));
};


/**
 * @param {!Array<!proto.zk.gateway.Token>} value
 * @return {!proto.zk.gateway.Tokens} returns this
*/
proto.zk.gateway.Tokens.prototype.setTokensList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zk.gateway.Token=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zk.gateway.Token}
 */
proto.zk.gateway.Tokens.prototype.addTokens = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zk.gateway.Token, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zk.gateway.Tokens} returns this
 */
proto.zk.gateway.Tokens.prototype.clearTokensList = function() {
  return this.setTokensList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetProofRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetProofRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetProofRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetProofRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    proofId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetProofRequest}
 */
proto.zk.gateway.GetProofRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetProofRequest;
  return proto.zk.gateway.GetProofRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetProofRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetProofRequest}
 */
proto.zk.gateway.GetProofRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProofId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetProofRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetProofRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetProofRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetProofRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProofId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string proof_id = 1;
 * @return {string}
 */
proto.zk.gateway.GetProofRequest.prototype.getProofId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.GetProofRequest} returns this
 */
proto.zk.gateway.GetProofRequest.prototype.setProofId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetProofResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetProofResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetProofResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetProofResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.zk.gateway.ErrMsg.toObject(includeInstance, f),
    proofWithPublicInputs: msg.getProofWithPublicInputs_asB64(),
    auxiBlkVerifyInfo: msg.getAuxiBlkVerifyInfo_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetProofResponse}
 */
proto.zk.gateway.GetProofResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetProofResponse;
  return proto.zk.gateway.GetProofResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetProofResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetProofResponse}
 */
proto.zk.gateway.GetProofResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zk.gateway.ErrMsg;
      reader.readMessage(value,proto.zk.gateway.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProofWithPublicInputs(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAuxiBlkVerifyInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetProofResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetProofResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetProofResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetProofResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zk.gateway.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getProofWithPublicInputs_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAuxiBlkVerifyInfo_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.zk.gateway.ErrMsg}
 */
proto.zk.gateway.GetProofResponse.prototype.getErr = function() {
  return /** @type{?proto.zk.gateway.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.ErrMsg, 1));
};


/**
 * @param {?proto.zk.gateway.ErrMsg|undefined} value
 * @return {!proto.zk.gateway.GetProofResponse} returns this
*/
proto.zk.gateway.GetProofResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.GetProofResponse} returns this
 */
proto.zk.gateway.GetProofResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.GetProofResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes proof_with_public_inputs = 2;
 * @return {!(string|Uint8Array)}
 */
proto.zk.gateway.GetProofResponse.prototype.getProofWithPublicInputs = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes proof_with_public_inputs = 2;
 * This is a type-conversion wrapper around `getProofWithPublicInputs()`
 * @return {string}
 */
proto.zk.gateway.GetProofResponse.prototype.getProofWithPublicInputs_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProofWithPublicInputs()));
};


/**
 * optional bytes proof_with_public_inputs = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProofWithPublicInputs()`
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetProofResponse.prototype.getProofWithPublicInputs_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProofWithPublicInputs()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zk.gateway.GetProofResponse} returns this
 */
proto.zk.gateway.GetProofResponse.prototype.setProofWithPublicInputs = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes auxi_blk_verify_info = 3;
 * @return {!(string|Uint8Array)}
 */
proto.zk.gateway.GetProofResponse.prototype.getAuxiBlkVerifyInfo = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes auxi_blk_verify_info = 3;
 * This is a type-conversion wrapper around `getAuxiBlkVerifyInfo()`
 * @return {string}
 */
proto.zk.gateway.GetProofResponse.prototype.getAuxiBlkVerifyInfo_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAuxiBlkVerifyInfo()));
};


/**
 * optional bytes auxi_blk_verify_info = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAuxiBlkVerifyInfo()`
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetProofResponse.prototype.getAuxiBlkVerifyInfo_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAuxiBlkVerifyInfo()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zk.gateway.GetProofResponse} returns this
 */
proto.zk.gateway.GetProofResponse.prototype.setAuxiBlkVerifyInfo = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GenerateSlotValueProofRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GenerateSlotValueProofRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GenerateSlotValueProofRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GenerateSlotValueProofRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    contractAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    slotKey: jspb.Message.getFieldWithDefault(msg, 3, ""),
    slotValue: jspb.Message.getFieldWithDefault(msg, 4, ""),
    blockNum: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GenerateSlotValueProofRequest}
 */
proto.zk.gateway.GenerateSlotValueProofRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GenerateSlotValueProofRequest;
  return proto.zk.gateway.GenerateSlotValueProofRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GenerateSlotValueProofRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GenerateSlotValueProofRequest}
 */
proto.zk.gateway.GenerateSlotValueProofRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSlotKey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSlotValue(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockNum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GenerateSlotValueProofRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GenerateSlotValueProofRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GenerateSlotValueProofRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GenerateSlotValueProofRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getContractAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSlotKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSlotValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBlockNum();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional uint64 chain_id = 1;
 * @return {number}
 */
proto.zk.gateway.GenerateSlotValueProofRequest.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.GenerateSlotValueProofRequest} returns this
 */
proto.zk.gateway.GenerateSlotValueProofRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string contract_address = 2;
 * @return {string}
 */
proto.zk.gateway.GenerateSlotValueProofRequest.prototype.getContractAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.GenerateSlotValueProofRequest} returns this
 */
proto.zk.gateway.GenerateSlotValueProofRequest.prototype.setContractAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string slot_key = 3;
 * @return {string}
 */
proto.zk.gateway.GenerateSlotValueProofRequest.prototype.getSlotKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.GenerateSlotValueProofRequest} returns this
 */
proto.zk.gateway.GenerateSlotValueProofRequest.prototype.setSlotKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string slot_value = 4;
 * @return {string}
 */
proto.zk.gateway.GenerateSlotValueProofRequest.prototype.getSlotValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.GenerateSlotValueProofRequest} returns this
 */
proto.zk.gateway.GenerateSlotValueProofRequest.prototype.setSlotValue = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 block_num = 5;
 * @return {number}
 */
proto.zk.gateway.GenerateSlotValueProofRequest.prototype.getBlockNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.GenerateSlotValueProofRequest} returns this
 */
proto.zk.gateway.GenerateSlotValueProofRequest.prototype.setBlockNum = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GenerateSlotValueProofResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GenerateSlotValueProofResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GenerateSlotValueProofResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GenerateSlotValueProofResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.zk.gateway.ErrMsg.toObject(includeInstance, f),
    proofId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GenerateSlotValueProofResponse}
 */
proto.zk.gateway.GenerateSlotValueProofResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GenerateSlotValueProofResponse;
  return proto.zk.gateway.GenerateSlotValueProofResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GenerateSlotValueProofResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GenerateSlotValueProofResponse}
 */
proto.zk.gateway.GenerateSlotValueProofResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zk.gateway.ErrMsg;
      reader.readMessage(value,proto.zk.gateway.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProofId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GenerateSlotValueProofResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GenerateSlotValueProofResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GenerateSlotValueProofResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GenerateSlotValueProofResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zk.gateway.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getProofId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.zk.gateway.ErrMsg}
 */
proto.zk.gateway.GenerateSlotValueProofResponse.prototype.getErr = function() {
  return /** @type{?proto.zk.gateway.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.ErrMsg, 1));
};


/**
 * @param {?proto.zk.gateway.ErrMsg|undefined} value
 * @return {!proto.zk.gateway.GenerateSlotValueProofResponse} returns this
*/
proto.zk.gateway.GenerateSlotValueProofResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.GenerateSlotValueProofResponse} returns this
 */
proto.zk.gateway.GenerateSlotValueProofResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.GenerateSlotValueProofResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string proof_id = 2;
 * @return {string}
 */
proto.zk.gateway.GenerateSlotValueProofResponse.prototype.getProofId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.GenerateSlotValueProofResponse} returns this
 */
proto.zk.gateway.GenerateSlotValueProofResponse.prototype.setProofId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetRecentAttestedSlotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetRecentAttestedSlotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetRecentAttestedSlotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetRecentAttestedSlotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetRecentAttestedSlotRequest}
 */
proto.zk.gateway.GetRecentAttestedSlotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetRecentAttestedSlotRequest;
  return proto.zk.gateway.GetRecentAttestedSlotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetRecentAttestedSlotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetRecentAttestedSlotRequest}
 */
proto.zk.gateway.GetRecentAttestedSlotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetRecentAttestedSlotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetRecentAttestedSlotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetRecentAttestedSlotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetRecentAttestedSlotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zk.gateway.GetRecentAttestedSlotResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetRecentAttestedSlotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetRecentAttestedSlotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetRecentAttestedSlotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetRecentAttestedSlotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.zk.gateway.ErrMsg.toObject(includeInstance, f),
    recentAttestedSlotsList: jspb.Message.toObjectList(msg.getRecentAttestedSlotsList(),
    proto.zk.gateway.AttestedSlot.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetRecentAttestedSlotResponse}
 */
proto.zk.gateway.GetRecentAttestedSlotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetRecentAttestedSlotResponse;
  return proto.zk.gateway.GetRecentAttestedSlotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetRecentAttestedSlotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetRecentAttestedSlotResponse}
 */
proto.zk.gateway.GetRecentAttestedSlotResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zk.gateway.ErrMsg;
      reader.readMessage(value,proto.zk.gateway.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = new proto.zk.gateway.AttestedSlot;
      reader.readMessage(value,proto.zk.gateway.AttestedSlot.deserializeBinaryFromReader);
      msg.addRecentAttestedSlots(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetRecentAttestedSlotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetRecentAttestedSlotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetRecentAttestedSlotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetRecentAttestedSlotResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zk.gateway.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getRecentAttestedSlotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.zk.gateway.AttestedSlot.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.zk.gateway.ErrMsg}
 */
proto.zk.gateway.GetRecentAttestedSlotResponse.prototype.getErr = function() {
  return /** @type{?proto.zk.gateway.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.ErrMsg, 1));
};


/**
 * @param {?proto.zk.gateway.ErrMsg|undefined} value
 * @return {!proto.zk.gateway.GetRecentAttestedSlotResponse} returns this
*/
proto.zk.gateway.GetRecentAttestedSlotResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.GetRecentAttestedSlotResponse} returns this
 */
proto.zk.gateway.GetRecentAttestedSlotResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.GetRecentAttestedSlotResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated AttestedSlot recent_attested_slots = 2;
 * @return {!Array<!proto.zk.gateway.AttestedSlot>}
 */
proto.zk.gateway.GetRecentAttestedSlotResponse.prototype.getRecentAttestedSlotsList = function() {
  return /** @type{!Array<!proto.zk.gateway.AttestedSlot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zk.gateway.AttestedSlot, 2));
};


/**
 * @param {!Array<!proto.zk.gateway.AttestedSlot>} value
 * @return {!proto.zk.gateway.GetRecentAttestedSlotResponse} returns this
*/
proto.zk.gateway.GetRecentAttestedSlotResponse.prototype.setRecentAttestedSlotsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zk.gateway.AttestedSlot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zk.gateway.AttestedSlot}
 */
proto.zk.gateway.GetRecentAttestedSlotResponse.prototype.addRecentAttestedSlots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zk.gateway.AttestedSlot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zk.gateway.GetRecentAttestedSlotResponse} returns this
 */
proto.zk.gateway.GetRecentAttestedSlotResponse.prototype.clearRecentAttestedSlotsList = function() {
  return this.setRecentAttestedSlotsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.AttestedSlot.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.AttestedSlot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.AttestedSlot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.AttestedSlot.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    blockNum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    attestedChainId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    attestedLink: jspb.Message.getFieldWithDefault(msg, 5, ""),
    slotKey: jspb.Message.getFieldWithDefault(msg, 6, ""),
    slotValue: jspb.Message.getFieldWithDefault(msg, 7, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.AttestedSlot}
 */
proto.zk.gateway.AttestedSlot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.AttestedSlot;
  return proto.zk.gateway.AttestedSlot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.AttestedSlot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.AttestedSlot}
 */
proto.zk.gateway.AttestedSlot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockNum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAttestedChainId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttestedLink(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSlotKey(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSlotValue(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.AttestedSlot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.AttestedSlot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.AttestedSlot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.AttestedSlot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBlockNum();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getAttestedChainId();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getAttestedLink();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSlotKey();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSlotValue();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
};


/**
 * optional uint64 chain_id = 1;
 * @return {number}
 */
proto.zk.gateway.AttestedSlot.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.AttestedSlot} returns this
 */
proto.zk.gateway.AttestedSlot.prototype.setChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.zk.gateway.AttestedSlot.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.AttestedSlot} returns this
 */
proto.zk.gateway.AttestedSlot.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 block_num = 3;
 * @return {number}
 */
proto.zk.gateway.AttestedSlot.prototype.getBlockNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.AttestedSlot} returns this
 */
proto.zk.gateway.AttestedSlot.prototype.setBlockNum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 attested_chain_id = 4;
 * @return {number}
 */
proto.zk.gateway.AttestedSlot.prototype.getAttestedChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.AttestedSlot} returns this
 */
proto.zk.gateway.AttestedSlot.prototype.setAttestedChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string attested_link = 5;
 * @return {string}
 */
proto.zk.gateway.AttestedSlot.prototype.getAttestedLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.AttestedSlot} returns this
 */
proto.zk.gateway.AttestedSlot.prototype.setAttestedLink = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string slot_key = 6;
 * @return {string}
 */
proto.zk.gateway.AttestedSlot.prototype.getSlotKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.AttestedSlot} returns this
 */
proto.zk.gateway.AttestedSlot.prototype.setSlotKey = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string slot_value = 7;
 * @return {string}
 */
proto.zk.gateway.AttestedSlot.prototype.getSlotValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.AttestedSlot} returns this
 */
proto.zk.gateway.AttestedSlot.prototype.setSlotValue = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint64 timestamp = 8;
 * @return {number}
 */
proto.zk.gateway.AttestedSlot.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.AttestedSlot} returns this
 */
proto.zk.gateway.AttestedSlot.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GenerateTransactionProofRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GenerateTransactionProofRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GenerateTransactionProofRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GenerateTransactionProofRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    transactionHash: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GenerateTransactionProofRequest}
 */
proto.zk.gateway.GenerateTransactionProofRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GenerateTransactionProofRequest;
  return proto.zk.gateway.GenerateTransactionProofRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GenerateTransactionProofRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GenerateTransactionProofRequest}
 */
proto.zk.gateway.GenerateTransactionProofRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GenerateTransactionProofRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GenerateTransactionProofRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GenerateTransactionProofRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GenerateTransactionProofRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTransactionHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 chain_id = 1;
 * @return {number}
 */
proto.zk.gateway.GenerateTransactionProofRequest.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.GenerateTransactionProofRequest} returns this
 */
proto.zk.gateway.GenerateTransactionProofRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string transaction_hash = 2;
 * @return {string}
 */
proto.zk.gateway.GenerateTransactionProofRequest.prototype.getTransactionHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.GenerateTransactionProofRequest} returns this
 */
proto.zk.gateway.GenerateTransactionProofRequest.prototype.setTransactionHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GenerateTransactionProofResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GenerateTransactionProofResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GenerateTransactionProofResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GenerateTransactionProofResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.zk.gateway.ErrMsg.toObject(includeInstance, f),
    proofId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GenerateTransactionProofResponse}
 */
proto.zk.gateway.GenerateTransactionProofResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GenerateTransactionProofResponse;
  return proto.zk.gateway.GenerateTransactionProofResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GenerateTransactionProofResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GenerateTransactionProofResponse}
 */
proto.zk.gateway.GenerateTransactionProofResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zk.gateway.ErrMsg;
      reader.readMessage(value,proto.zk.gateway.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProofId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GenerateTransactionProofResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GenerateTransactionProofResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GenerateTransactionProofResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GenerateTransactionProofResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zk.gateway.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getProofId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.zk.gateway.ErrMsg}
 */
proto.zk.gateway.GenerateTransactionProofResponse.prototype.getErr = function() {
  return /** @type{?proto.zk.gateway.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.ErrMsg, 1));
};


/**
 * @param {?proto.zk.gateway.ErrMsg|undefined} value
 * @return {!proto.zk.gateway.GenerateTransactionProofResponse} returns this
*/
proto.zk.gateway.GenerateTransactionProofResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.GenerateTransactionProofResponse} returns this
 */
proto.zk.gateway.GenerateTransactionProofResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.GenerateTransactionProofResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string proof_id = 2;
 * @return {string}
 */
proto.zk.gateway.GenerateTransactionProofResponse.prototype.getProofId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.GenerateTransactionProofResponse} returns this
 */
proto.zk.gateway.GenerateTransactionProofResponse.prototype.setProofId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.AttestedTransactionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.AttestedTransactionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.AttestedTransactionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.AttestedTransactionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.AttestedTransactionsRequest}
 */
proto.zk.gateway.AttestedTransactionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.AttestedTransactionsRequest;
  return proto.zk.gateway.AttestedTransactionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.AttestedTransactionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.AttestedTransactionsRequest}
 */
proto.zk.gateway.AttestedTransactionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.AttestedTransactionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.AttestedTransactionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.AttestedTransactionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.AttestedTransactionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zk.gateway.AttestedTransactionsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.AttestedTransactionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.AttestedTransactionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.AttestedTransactionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.AttestedTransactionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.zk.gateway.ErrMsg.toObject(includeInstance, f),
    attestedTransactionsList: jspb.Message.toObjectList(msg.getAttestedTransactionsList(),
    proto.zk.gateway.AttestedTransaction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.AttestedTransactionsResponse}
 */
proto.zk.gateway.AttestedTransactionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.AttestedTransactionsResponse;
  return proto.zk.gateway.AttestedTransactionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.AttestedTransactionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.AttestedTransactionsResponse}
 */
proto.zk.gateway.AttestedTransactionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zk.gateway.ErrMsg;
      reader.readMessage(value,proto.zk.gateway.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = new proto.zk.gateway.AttestedTransaction;
      reader.readMessage(value,proto.zk.gateway.AttestedTransaction.deserializeBinaryFromReader);
      msg.addAttestedTransactions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.AttestedTransactionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.AttestedTransactionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.AttestedTransactionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.AttestedTransactionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zk.gateway.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getAttestedTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.zk.gateway.AttestedTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.zk.gateway.ErrMsg}
 */
proto.zk.gateway.AttestedTransactionsResponse.prototype.getErr = function() {
  return /** @type{?proto.zk.gateway.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.ErrMsg, 1));
};


/**
 * @param {?proto.zk.gateway.ErrMsg|undefined} value
 * @return {!proto.zk.gateway.AttestedTransactionsResponse} returns this
*/
proto.zk.gateway.AttestedTransactionsResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.AttestedTransactionsResponse} returns this
 */
proto.zk.gateway.AttestedTransactionsResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.AttestedTransactionsResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated AttestedTransaction attested_transactions = 2;
 * @return {!Array<!proto.zk.gateway.AttestedTransaction>}
 */
proto.zk.gateway.AttestedTransactionsResponse.prototype.getAttestedTransactionsList = function() {
  return /** @type{!Array<!proto.zk.gateway.AttestedTransaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zk.gateway.AttestedTransaction, 2));
};


/**
 * @param {!Array<!proto.zk.gateway.AttestedTransaction>} value
 * @return {!proto.zk.gateway.AttestedTransactionsResponse} returns this
*/
proto.zk.gateway.AttestedTransactionsResponse.prototype.setAttestedTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zk.gateway.AttestedTransaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zk.gateway.AttestedTransaction}
 */
proto.zk.gateway.AttestedTransactionsResponse.prototype.addAttestedTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zk.gateway.AttestedTransaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zk.gateway.AttestedTransactionsResponse} returns this
 */
proto.zk.gateway.AttestedTransactionsResponse.prototype.clearAttestedTransactionsList = function() {
  return this.setAttestedTransactionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.AttestedTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.AttestedTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.AttestedTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.AttestedTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    attestedChainId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    attestedLink: jspb.Message.getFieldWithDefault(msg, 3, ""),
    transactionHash: jspb.Message.getFieldWithDefault(msg, 4, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.AttestedTransaction}
 */
proto.zk.gateway.AttestedTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.AttestedTransaction;
  return proto.zk.gateway.AttestedTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.AttestedTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.AttestedTransaction}
 */
proto.zk.gateway.AttestedTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAttestedChainId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttestedLink(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionHash(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.AttestedTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.AttestedTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.AttestedTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.AttestedTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAttestedChainId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAttestedLink();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTransactionHash();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional uint64 chain_id = 1;
 * @return {number}
 */
proto.zk.gateway.AttestedTransaction.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.AttestedTransaction} returns this
 */
proto.zk.gateway.AttestedTransaction.prototype.setChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 attested_chain_id = 2;
 * @return {number}
 */
proto.zk.gateway.AttestedTransaction.prototype.getAttestedChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.AttestedTransaction} returns this
 */
proto.zk.gateway.AttestedTransaction.prototype.setAttestedChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string attested_link = 3;
 * @return {string}
 */
proto.zk.gateway.AttestedTransaction.prototype.getAttestedLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.AttestedTransaction} returns this
 */
proto.zk.gateway.AttestedTransaction.prototype.setAttestedLink = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string transaction_hash = 4;
 * @return {string}
 */
proto.zk.gateway.AttestedTransaction.prototype.getTransactionHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.AttestedTransaction} returns this
 */
proto.zk.gateway.AttestedTransaction.prototype.setTransactionHash = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 timestamp = 5;
 * @return {number}
 */
proto.zk.gateway.AttestedTransaction.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.AttestedTransaction} returns this
 */
proto.zk.gateway.AttestedTransaction.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.CheckUniNFTEligibilityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.CheckUniNFTEligibilityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.CheckUniNFTEligibilityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.CheckUniNFTEligibilityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.CheckUniNFTEligibilityRequest}
 */
proto.zk.gateway.CheckUniNFTEligibilityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.CheckUniNFTEligibilityRequest;
  return proto.zk.gateway.CheckUniNFTEligibilityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.CheckUniNFTEligibilityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.CheckUniNFTEligibilityRequest}
 */
proto.zk.gateway.CheckUniNFTEligibilityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.CheckUniNFTEligibilityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.CheckUniNFTEligibilityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.CheckUniNFTEligibilityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.CheckUniNFTEligibilityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.zk.gateway.CheckUniNFTEligibilityRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.CheckUniNFTEligibilityRequest} returns this
 */
proto.zk.gateway.CheckUniNFTEligibilityRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.CheckUniNFTEligibilityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.CheckUniNFTEligibilityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.CheckUniNFTEligibilityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.CheckUniNFTEligibilityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    errmsg: (f = msg.getErrmsg()) && proto.zk.gateway.ErrMsg.toObject(includeInstance, f),
    checkStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
    resp: (f = msg.getResp()) && proto.zk.gateway.UniNFTEligibilityResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.CheckUniNFTEligibilityResponse}
 */
proto.zk.gateway.CheckUniNFTEligibilityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.CheckUniNFTEligibilityResponse;
  return proto.zk.gateway.CheckUniNFTEligibilityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.CheckUniNFTEligibilityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.CheckUniNFTEligibilityResponse}
 */
proto.zk.gateway.CheckUniNFTEligibilityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zk.gateway.ErrMsg;
      reader.readMessage(value,proto.zk.gateway.ErrMsg.deserializeBinaryFromReader);
      msg.setErrmsg(value);
      break;
    case 2:
      var value = /** @type {!proto.zk.gateway.CheckStatus} */ (reader.readEnum());
      msg.setCheckStatus(value);
      break;
    case 3:
      var value = new proto.zk.gateway.UniNFTEligibilityResponse;
      reader.readMessage(value,proto.zk.gateway.UniNFTEligibilityResponse.deserializeBinaryFromReader);
      msg.setResp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.CheckUniNFTEligibilityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.CheckUniNFTEligibilityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.CheckUniNFTEligibilityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.CheckUniNFTEligibilityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrmsg();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zk.gateway.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getCheckStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getResp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zk.gateway.UniNFTEligibilityResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrMsg errmsg = 1;
 * @return {?proto.zk.gateway.ErrMsg}
 */
proto.zk.gateway.CheckUniNFTEligibilityResponse.prototype.getErrmsg = function() {
  return /** @type{?proto.zk.gateway.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.ErrMsg, 1));
};


/**
 * @param {?proto.zk.gateway.ErrMsg|undefined} value
 * @return {!proto.zk.gateway.CheckUniNFTEligibilityResponse} returns this
*/
proto.zk.gateway.CheckUniNFTEligibilityResponse.prototype.setErrmsg = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.CheckUniNFTEligibilityResponse} returns this
 */
proto.zk.gateway.CheckUniNFTEligibilityResponse.prototype.clearErrmsg = function() {
  return this.setErrmsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.CheckUniNFTEligibilityResponse.prototype.hasErrmsg = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CheckStatus check_status = 2;
 * @return {!proto.zk.gateway.CheckStatus}
 */
proto.zk.gateway.CheckUniNFTEligibilityResponse.prototype.getCheckStatus = function() {
  return /** @type {!proto.zk.gateway.CheckStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zk.gateway.CheckStatus} value
 * @return {!proto.zk.gateway.CheckUniNFTEligibilityResponse} returns this
 */
proto.zk.gateway.CheckUniNFTEligibilityResponse.prototype.setCheckStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional UniNFTEligibilityResponse resp = 3;
 * @return {?proto.zk.gateway.UniNFTEligibilityResponse}
 */
proto.zk.gateway.CheckUniNFTEligibilityResponse.prototype.getResp = function() {
  return /** @type{?proto.zk.gateway.UniNFTEligibilityResponse} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.UniNFTEligibilityResponse, 3));
};


/**
 * @param {?proto.zk.gateway.UniNFTEligibilityResponse|undefined} value
 * @return {!proto.zk.gateway.CheckUniNFTEligibilityResponse} returns this
*/
proto.zk.gateway.CheckUniNFTEligibilityResponse.prototype.setResp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.CheckUniNFTEligibilityResponse} returns this
 */
proto.zk.gateway.CheckUniNFTEligibilityResponse.prototype.clearResp = function() {
  return this.setResp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.CheckUniNFTEligibilityResponse.prototype.hasResp = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.UniNFTEligibilityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.UniNFTEligibilityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.UniNFTEligibilityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.UniNFTEligibilityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    swapsizedollars: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    tier: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nft: (f = msg.getNft()) && proto.zk.gateway.TierNFT.toObject(includeInstance, f),
    transactionHash: jspb.Message.getFieldWithDefault(msg, 4, ""),
    chainId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    txProofId: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.UniNFTEligibilityResponse}
 */
proto.zk.gateway.UniNFTEligibilityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.UniNFTEligibilityResponse;
  return proto.zk.gateway.UniNFTEligibilityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.UniNFTEligibilityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.UniNFTEligibilityResponse}
 */
proto.zk.gateway.UniNFTEligibilityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSwapsizedollars(value);
      break;
    case 2:
      var value = /** @type {!proto.zk.gateway.Tier} */ (reader.readEnum());
      msg.setTier(value);
      break;
    case 3:
      var value = new proto.zk.gateway.TierNFT;
      reader.readMessage(value,proto.zk.gateway.TierNFT.deserializeBinaryFromReader);
      msg.setNft(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionHash(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChainId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxProofId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.UniNFTEligibilityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.UniNFTEligibilityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.UniNFTEligibilityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.UniNFTEligibilityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwapsizedollars();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getTier();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getNft();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zk.gateway.TierNFT.serializeBinaryToWriter
    );
  }
  f = message.getTransactionHash();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getChainId();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getTxProofId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional double swapSizeDollars = 1;
 * @return {number}
 */
proto.zk.gateway.UniNFTEligibilityResponse.prototype.getSwapsizedollars = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.UniNFTEligibilityResponse} returns this
 */
proto.zk.gateway.UniNFTEligibilityResponse.prototype.setSwapsizedollars = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional Tier tier = 2;
 * @return {!proto.zk.gateway.Tier}
 */
proto.zk.gateway.UniNFTEligibilityResponse.prototype.getTier = function() {
  return /** @type {!proto.zk.gateway.Tier} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zk.gateway.Tier} value
 * @return {!proto.zk.gateway.UniNFTEligibilityResponse} returns this
 */
proto.zk.gateway.UniNFTEligibilityResponse.prototype.setTier = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional TierNFT nft = 3;
 * @return {?proto.zk.gateway.TierNFT}
 */
proto.zk.gateway.UniNFTEligibilityResponse.prototype.getNft = function() {
  return /** @type{?proto.zk.gateway.TierNFT} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.TierNFT, 3));
};


/**
 * @param {?proto.zk.gateway.TierNFT|undefined} value
 * @return {!proto.zk.gateway.UniNFTEligibilityResponse} returns this
*/
proto.zk.gateway.UniNFTEligibilityResponse.prototype.setNft = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.UniNFTEligibilityResponse} returns this
 */
proto.zk.gateway.UniNFTEligibilityResponse.prototype.clearNft = function() {
  return this.setNft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.UniNFTEligibilityResponse.prototype.hasNft = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string transaction_hash = 4;
 * @return {string}
 */
proto.zk.gateway.UniNFTEligibilityResponse.prototype.getTransactionHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.UniNFTEligibilityResponse} returns this
 */
proto.zk.gateway.UniNFTEligibilityResponse.prototype.setTransactionHash = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 chain_id = 5;
 * @return {number}
 */
proto.zk.gateway.UniNFTEligibilityResponse.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.UniNFTEligibilityResponse} returns this
 */
proto.zk.gateway.UniNFTEligibilityResponse.prototype.setChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string tx_proof_id = 6;
 * @return {string}
 */
proto.zk.gateway.UniNFTEligibilityResponse.prototype.getTxProofId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.UniNFTEligibilityResponse} returns this
 */
proto.zk.gateway.UniNFTEligibilityResponse.prototype.setTxProofId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.TierNFT.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.TierNFT.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.TierNFT} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.TierNFT.toObject = function(includeInstance, msg) {
  var f, obj = {
    nftId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nftName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nftAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    image: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.TierNFT}
 */
proto.zk.gateway.TierNFT.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.TierNFT;
  return proto.zk.gateway.TierNFT.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.TierNFT} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.TierNFT}
 */
proto.zk.gateway.TierNFT.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNftId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNftName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNftAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.TierNFT.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.TierNFT.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.TierNFT} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.TierNFT.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNftId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNftName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNftAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 nft_id = 1;
 * @return {number}
 */
proto.zk.gateway.TierNFT.prototype.getNftId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.TierNFT} returns this
 */
proto.zk.gateway.TierNFT.prototype.setNftId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string nft_name = 2;
 * @return {string}
 */
proto.zk.gateway.TierNFT.prototype.getNftName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.TierNFT} returns this
 */
proto.zk.gateway.TierNFT.prototype.setNftName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nft_address = 3;
 * @return {string}
 */
proto.zk.gateway.TierNFT.prototype.getNftAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.TierNFT} returns this
 */
proto.zk.gateway.TierNFT.prototype.setNftAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string image = 4;
 * @return {string}
 */
proto.zk.gateway.TierNFT.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.TierNFT} returns this
 */
proto.zk.gateway.TierNFT.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetSocialGraphDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetSocialGraphDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetSocialGraphDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetSocialGraphDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetSocialGraphDataRequest}
 */
proto.zk.gateway.GetSocialGraphDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetSocialGraphDataRequest;
  return proto.zk.gateway.GetSocialGraphDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetSocialGraphDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetSocialGraphDataRequest}
 */
proto.zk.gateway.GetSocialGraphDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetSocialGraphDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetSocialGraphDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetSocialGraphDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetSocialGraphDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zk.gateway.GetSocialGraphDataResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetSocialGraphDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetSocialGraphDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetSocialGraphDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetSocialGraphDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodesList: jspb.Message.toObjectList(msg.getNodesList(),
    proto.zk.gateway.UserNode.toObject, includeInstance),
    connectionsList: jspb.Message.toObjectList(msg.getConnectionsList(),
    proto.zk.gateway.SocialConnection.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetSocialGraphDataResponse}
 */
proto.zk.gateway.GetSocialGraphDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetSocialGraphDataResponse;
  return proto.zk.gateway.GetSocialGraphDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetSocialGraphDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetSocialGraphDataResponse}
 */
proto.zk.gateway.GetSocialGraphDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zk.gateway.UserNode;
      reader.readMessage(value,proto.zk.gateway.UserNode.deserializeBinaryFromReader);
      msg.addNodes(value);
      break;
    case 2:
      var value = new proto.zk.gateway.SocialConnection;
      reader.readMessage(value,proto.zk.gateway.SocialConnection.deserializeBinaryFromReader);
      msg.addConnections(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetSocialGraphDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetSocialGraphDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetSocialGraphDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetSocialGraphDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zk.gateway.UserNode.serializeBinaryToWriter
    );
  }
  f = message.getConnectionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.zk.gateway.SocialConnection.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UserNode nodes = 1;
 * @return {!Array<!proto.zk.gateway.UserNode>}
 */
proto.zk.gateway.GetSocialGraphDataResponse.prototype.getNodesList = function() {
  return /** @type{!Array<!proto.zk.gateway.UserNode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zk.gateway.UserNode, 1));
};


/**
 * @param {!Array<!proto.zk.gateway.UserNode>} value
 * @return {!proto.zk.gateway.GetSocialGraphDataResponse} returns this
*/
proto.zk.gateway.GetSocialGraphDataResponse.prototype.setNodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zk.gateway.UserNode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zk.gateway.UserNode}
 */
proto.zk.gateway.GetSocialGraphDataResponse.prototype.addNodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zk.gateway.UserNode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zk.gateway.GetSocialGraphDataResponse} returns this
 */
proto.zk.gateway.GetSocialGraphDataResponse.prototype.clearNodesList = function() {
  return this.setNodesList([]);
};


/**
 * repeated SocialConnection connections = 2;
 * @return {!Array<!proto.zk.gateway.SocialConnection>}
 */
proto.zk.gateway.GetSocialGraphDataResponse.prototype.getConnectionsList = function() {
  return /** @type{!Array<!proto.zk.gateway.SocialConnection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zk.gateway.SocialConnection, 2));
};


/**
 * @param {!Array<!proto.zk.gateway.SocialConnection>} value
 * @return {!proto.zk.gateway.GetSocialGraphDataResponse} returns this
*/
proto.zk.gateway.GetSocialGraphDataResponse.prototype.setConnectionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zk.gateway.SocialConnection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zk.gateway.SocialConnection}
 */
proto.zk.gateway.GetSocialGraphDataResponse.prototype.addConnections = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zk.gateway.SocialConnection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zk.gateway.GetSocialGraphDataResponse} returns this
 */
proto.zk.gateway.GetSocialGraphDataResponse.prototype.clearConnectionsList = function() {
  return this.setConnectionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.UserNode.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.UserNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.UserNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.UserNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.UserNode}
 */
proto.zk.gateway.UserNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.UserNode;
  return proto.zk.gateway.UserNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.UserNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.UserNode}
 */
proto.zk.gateway.UserNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.UserNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.UserNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.UserNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.UserNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.zk.gateway.UserNode.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.UserNode} returns this
 */
proto.zk.gateway.UserNode.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string avatar_url = 2;
 * @return {string}
 */
proto.zk.gateway.UserNode.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.UserNode} returns this
 */
proto.zk.gateway.UserNode.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.zk.gateway.UserNode.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.UserNode} returns this
 */
proto.zk.gateway.UserNode.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.SocialConnection.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.SocialConnection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.SocialConnection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.SocialConnection.toObject = function(includeInstance, msg) {
  var f, obj = {
    address1: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address2: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.SocialConnection}
 */
proto.zk.gateway.SocialConnection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.SocialConnection;
  return proto.zk.gateway.SocialConnection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.SocialConnection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.SocialConnection}
 */
proto.zk.gateway.SocialConnection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress1(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress2(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.SocialConnection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.SocialConnection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.SocialConnection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.SocialConnection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress1();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress2();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string address_1 = 1;
 * @return {string}
 */
proto.zk.gateway.SocialConnection.prototype.getAddress1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.SocialConnection} returns this
 */
proto.zk.gateway.SocialConnection.prototype.setAddress1 = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address_2 = 2;
 * @return {string}
 */
proto.zk.gateway.SocialConnection.prototype.getAddress2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.SocialConnection} returns this
 */
proto.zk.gateway.SocialConnection.prototype.setAddress2 = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetAttestedFriendShipRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetAttestedFriendShipRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetAttestedFriendShipRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetAttestedFriendShipRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetAttestedFriendShipRequest}
 */
proto.zk.gateway.GetAttestedFriendShipRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetAttestedFriendShipRequest;
  return proto.zk.gateway.GetAttestedFriendShipRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetAttestedFriendShipRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetAttestedFriendShipRequest}
 */
proto.zk.gateway.GetAttestedFriendShipRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetAttestedFriendShipRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetAttestedFriendShipRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetAttestedFriendShipRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetAttestedFriendShipRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zk.gateway.GetAttestedFriendShipResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetAttestedFriendShipResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetAttestedFriendShipResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetAttestedFriendShipResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetAttestedFriendShipResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recentFriendshipsList: jspb.Message.toObjectList(msg.getRecentFriendshipsList(),
    proto.zk.gateway.FriendShipHistory.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetAttestedFriendShipResponse}
 */
proto.zk.gateway.GetAttestedFriendShipResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetAttestedFriendShipResponse;
  return proto.zk.gateway.GetAttestedFriendShipResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetAttestedFriendShipResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetAttestedFriendShipResponse}
 */
proto.zk.gateway.GetAttestedFriendShipResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zk.gateway.FriendShipHistory;
      reader.readMessage(value,proto.zk.gateway.FriendShipHistory.deserializeBinaryFromReader);
      msg.addRecentFriendships(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetAttestedFriendShipResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetAttestedFriendShipResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetAttestedFriendShipResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetAttestedFriendShipResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecentFriendshipsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zk.gateway.FriendShipHistory.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FriendShipHistory recent_friendships = 1;
 * @return {!Array<!proto.zk.gateway.FriendShipHistory>}
 */
proto.zk.gateway.GetAttestedFriendShipResponse.prototype.getRecentFriendshipsList = function() {
  return /** @type{!Array<!proto.zk.gateway.FriendShipHistory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zk.gateway.FriendShipHistory, 1));
};


/**
 * @param {!Array<!proto.zk.gateway.FriendShipHistory>} value
 * @return {!proto.zk.gateway.GetAttestedFriendShipResponse} returns this
*/
proto.zk.gateway.GetAttestedFriendShipResponse.prototype.setRecentFriendshipsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zk.gateway.FriendShipHistory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zk.gateway.FriendShipHistory}
 */
proto.zk.gateway.GetAttestedFriendShipResponse.prototype.addRecentFriendships = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zk.gateway.FriendShipHistory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zk.gateway.GetAttestedFriendShipResponse} returns this
 */
proto.zk.gateway.GetAttestedFriendShipResponse.prototype.clearRecentFriendshipsList = function() {
  return this.setRecentFriendshipsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.FriendShipHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.FriendShipHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.FriendShipHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.FriendShipHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    address1: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address2: jspb.Message.getFieldWithDefault(msg, 2, ""),
    verificationLink: jspb.Message.getFieldWithDefault(msg, 3, ""),
    time: jspb.Message.getFieldWithDefault(msg, 4, 0),
    attestedChainId: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.FriendShipHistory}
 */
proto.zk.gateway.FriendShipHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.FriendShipHistory;
  return proto.zk.gateway.FriendShipHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.FriendShipHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.FriendShipHistory}
 */
proto.zk.gateway.FriendShipHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress1(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress2(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerificationLink(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAttestedChainId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.FriendShipHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.FriendShipHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.FriendShipHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.FriendShipHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress1();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress2();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVerificationLink();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getAttestedChainId();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional string address_1 = 1;
 * @return {string}
 */
proto.zk.gateway.FriendShipHistory.prototype.getAddress1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.FriendShipHistory} returns this
 */
proto.zk.gateway.FriendShipHistory.prototype.setAddress1 = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address_2 = 2;
 * @return {string}
 */
proto.zk.gateway.FriendShipHistory.prototype.getAddress2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.FriendShipHistory} returns this
 */
proto.zk.gateway.FriendShipHistory.prototype.setAddress2 = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string verification_link = 3;
 * @return {string}
 */
proto.zk.gateway.FriendShipHistory.prototype.getVerificationLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.FriendShipHistory} returns this
 */
proto.zk.gateway.FriendShipHistory.prototype.setVerificationLink = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 time = 4;
 * @return {number}
 */
proto.zk.gateway.FriendShipHistory.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.FriendShipHistory} returns this
 */
proto.zk.gateway.FriendShipHistory.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 attested_chain_id = 5;
 * @return {number}
 */
proto.zk.gateway.FriendShipHistory.prototype.getAttestedChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.FriendShipHistory} returns this
 */
proto.zk.gateway.FriendShipHistory.prototype.setAttestedChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.CheckFriendShipRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.CheckFriendShipRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.CheckFriendShipRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.CheckFriendShipRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address1: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address2: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.CheckFriendShipRequest}
 */
proto.zk.gateway.CheckFriendShipRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.CheckFriendShipRequest;
  return proto.zk.gateway.CheckFriendShipRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.CheckFriendShipRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.CheckFriendShipRequest}
 */
proto.zk.gateway.CheckFriendShipRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress1(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress2(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.CheckFriendShipRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.CheckFriendShipRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.CheckFriendShipRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.CheckFriendShipRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress1();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress2();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string address_1 = 1;
 * @return {string}
 */
proto.zk.gateway.CheckFriendShipRequest.prototype.getAddress1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.CheckFriendShipRequest} returns this
 */
proto.zk.gateway.CheckFriendShipRequest.prototype.setAddress1 = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address_2 = 2;
 * @return {string}
 */
proto.zk.gateway.CheckFriendShipRequest.prototype.getAddress2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.CheckFriendShipRequest} returns this
 */
proto.zk.gateway.CheckFriendShipRequest.prototype.setAddress2 = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.CheckFriendShipResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.CheckFriendShipResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.CheckFriendShipResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.CheckFriendShipResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    errmsg: (f = msg.getErrmsg()) && proto.zk.gateway.ErrMsg.toObject(includeInstance, f),
    checkStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
    resp: (f = msg.getResp()) && proto.zk.gateway.FriendShipResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.CheckFriendShipResponse}
 */
proto.zk.gateway.CheckFriendShipResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.CheckFriendShipResponse;
  return proto.zk.gateway.CheckFriendShipResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.CheckFriendShipResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.CheckFriendShipResponse}
 */
proto.zk.gateway.CheckFriendShipResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zk.gateway.ErrMsg;
      reader.readMessage(value,proto.zk.gateway.ErrMsg.deserializeBinaryFromReader);
      msg.setErrmsg(value);
      break;
    case 2:
      var value = /** @type {!proto.zk.gateway.CheckStatus} */ (reader.readEnum());
      msg.setCheckStatus(value);
      break;
    case 3:
      var value = new proto.zk.gateway.FriendShipResponse;
      reader.readMessage(value,proto.zk.gateway.FriendShipResponse.deserializeBinaryFromReader);
      msg.setResp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.CheckFriendShipResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.CheckFriendShipResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.CheckFriendShipResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.CheckFriendShipResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrmsg();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zk.gateway.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getCheckStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getResp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zk.gateway.FriendShipResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrMsg errmsg = 1;
 * @return {?proto.zk.gateway.ErrMsg}
 */
proto.zk.gateway.CheckFriendShipResponse.prototype.getErrmsg = function() {
  return /** @type{?proto.zk.gateway.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.ErrMsg, 1));
};


/**
 * @param {?proto.zk.gateway.ErrMsg|undefined} value
 * @return {!proto.zk.gateway.CheckFriendShipResponse} returns this
*/
proto.zk.gateway.CheckFriendShipResponse.prototype.setErrmsg = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.CheckFriendShipResponse} returns this
 */
proto.zk.gateway.CheckFriendShipResponse.prototype.clearErrmsg = function() {
  return this.setErrmsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.CheckFriendShipResponse.prototype.hasErrmsg = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CheckStatus check_status = 2;
 * @return {!proto.zk.gateway.CheckStatus}
 */
proto.zk.gateway.CheckFriendShipResponse.prototype.getCheckStatus = function() {
  return /** @type {!proto.zk.gateway.CheckStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zk.gateway.CheckStatus} value
 * @return {!proto.zk.gateway.CheckFriendShipResponse} returns this
 */
proto.zk.gateway.CheckFriendShipResponse.prototype.setCheckStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional FriendShipResponse resp = 3;
 * @return {?proto.zk.gateway.FriendShipResponse}
 */
proto.zk.gateway.CheckFriendShipResponse.prototype.getResp = function() {
  return /** @type{?proto.zk.gateway.FriendShipResponse} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.FriendShipResponse, 3));
};


/**
 * @param {?proto.zk.gateway.FriendShipResponse|undefined} value
 * @return {!proto.zk.gateway.CheckFriendShipResponse} returns this
*/
proto.zk.gateway.CheckFriendShipResponse.prototype.setResp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.CheckFriendShipResponse} returns this
 */
proto.zk.gateway.CheckFriendShipResponse.prototype.clearResp = function() {
  return this.setResp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.CheckFriendShipResponse.prototype.hasResp = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.FriendShipResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.FriendShipResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.FriendShipResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.FriendShipResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    transactionHash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    txProofId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.FriendShipResponse}
 */
proto.zk.gateway.FriendShipResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.FriendShipResponse;
  return proto.zk.gateway.FriendShipResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.FriendShipResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.FriendShipResponse}
 */
proto.zk.gateway.FriendShipResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionHash(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxProofId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.FriendShipResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.FriendShipResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.FriendShipResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.FriendShipResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTransactionHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTxProofId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint64 chain_id = 1;
 * @return {number}
 */
proto.zk.gateway.FriendShipResponse.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.FriendShipResponse} returns this
 */
proto.zk.gateway.FriendShipResponse.prototype.setChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string transaction_hash = 2;
 * @return {string}
 */
proto.zk.gateway.FriendShipResponse.prototype.getTransactionHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.FriendShipResponse} returns this
 */
proto.zk.gateway.FriendShipResponse.prototype.setTransactionHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tx_proof_id = 3;
 * @return {string}
 */
proto.zk.gateway.FriendShipResponse.prototype.getTxProofId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.FriendShipResponse} returns this
 */
proto.zk.gateway.FriendShipResponse.prototype.setTxProofId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.ErrMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.ErrMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.ErrMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.ErrMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.ErrMsg}
 */
proto.zk.gateway.ErrMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.ErrMsg;
  return proto.zk.gateway.ErrMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.ErrMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.ErrMsg}
 */
proto.zk.gateway.ErrMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.zk.gateway.ErrCode} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.ErrMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.ErrMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.ErrMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.ErrMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ErrCode code = 1;
 * @return {!proto.zk.gateway.ErrCode}
 */
proto.zk.gateway.ErrMsg.prototype.getCode = function() {
  return /** @type {!proto.zk.gateway.ErrCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.zk.gateway.ErrCode} value
 * @return {!proto.zk.gateway.ErrMsg} returns this
 */
proto.zk.gateway.ErrMsg.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.zk.gateway.ErrMsg.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.ErrMsg} returns this
 */
proto.zk.gateway.ErrMsg.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetUniswapLeaderboardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetUniswapLeaderboardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetUniswapLeaderboardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetUniswapLeaderboardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetUniswapLeaderboardRequest}
 */
proto.zk.gateway.GetUniswapLeaderboardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetUniswapLeaderboardRequest;
  return proto.zk.gateway.GetUniswapLeaderboardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetUniswapLeaderboardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetUniswapLeaderboardRequest}
 */
proto.zk.gateway.GetUniswapLeaderboardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetUniswapLeaderboardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetUniswapLeaderboardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetUniswapLeaderboardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetUniswapLeaderboardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zk.gateway.GetUniswapLeaderboardResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GetUniswapLeaderboardResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GetUniswapLeaderboardResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GetUniswapLeaderboardResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetUniswapLeaderboardResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.zk.gateway.LeaderboardItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GetUniswapLeaderboardResponse}
 */
proto.zk.gateway.GetUniswapLeaderboardResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GetUniswapLeaderboardResponse;
  return proto.zk.gateway.GetUniswapLeaderboardResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GetUniswapLeaderboardResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GetUniswapLeaderboardResponse}
 */
proto.zk.gateway.GetUniswapLeaderboardResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zk.gateway.LeaderboardItem;
      reader.readMessage(value,proto.zk.gateway.LeaderboardItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GetUniswapLeaderboardResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GetUniswapLeaderboardResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GetUniswapLeaderboardResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GetUniswapLeaderboardResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zk.gateway.LeaderboardItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LeaderboardItem items = 1;
 * @return {!Array<!proto.zk.gateway.LeaderboardItem>}
 */
proto.zk.gateway.GetUniswapLeaderboardResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.zk.gateway.LeaderboardItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zk.gateway.LeaderboardItem, 1));
};


/**
 * @param {!Array<!proto.zk.gateway.LeaderboardItem>} value
 * @return {!proto.zk.gateway.GetUniswapLeaderboardResponse} returns this
*/
proto.zk.gateway.GetUniswapLeaderboardResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zk.gateway.LeaderboardItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zk.gateway.LeaderboardItem}
 */
proto.zk.gateway.GetUniswapLeaderboardResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zk.gateway.LeaderboardItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zk.gateway.GetUniswapLeaderboardResponse} returns this
 */
proto.zk.gateway.GetUniswapLeaderboardResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.LeaderboardItem.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.LeaderboardItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.LeaderboardItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.LeaderboardItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    volume: jspb.Message.getFieldWithDefault(msg, 2, ""),
    attestedLink: jspb.Message.getFieldWithDefault(msg, 3, ""),
    attestedChainId: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.LeaderboardItem}
 */
proto.zk.gateway.LeaderboardItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.LeaderboardItem;
  return proto.zk.gateway.LeaderboardItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.LeaderboardItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.LeaderboardItem}
 */
proto.zk.gateway.LeaderboardItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolume(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttestedLink(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAttestedChainId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.LeaderboardItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.LeaderboardItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.LeaderboardItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.LeaderboardItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVolume();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAttestedLink();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAttestedChainId();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.zk.gateway.LeaderboardItem.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.LeaderboardItem} returns this
 */
proto.zk.gateway.LeaderboardItem.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string volume = 2;
 * @return {string}
 */
proto.zk.gateway.LeaderboardItem.prototype.getVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.LeaderboardItem} returns this
 */
proto.zk.gateway.LeaderboardItem.prototype.setVolume = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string attested_link = 3;
 * @return {string}
 */
proto.zk.gateway.LeaderboardItem.prototype.getAttestedLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.LeaderboardItem} returns this
 */
proto.zk.gateway.LeaderboardItem.prototype.setAttestedLink = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 attested_chain_id = 4;
 * @return {number}
 */
proto.zk.gateway.LeaderboardItem.prototype.getAttestedChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.LeaderboardItem} returns this
 */
proto.zk.gateway.LeaderboardItem.prototype.setAttestedChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.CheckUniswapSumVolumeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.CheckUniswapSumVolumeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.CheckUniswapSumVolumeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.CheckUniswapSumVolumeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.CheckUniswapSumVolumeRequest}
 */
proto.zk.gateway.CheckUniswapSumVolumeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.CheckUniswapSumVolumeRequest;
  return proto.zk.gateway.CheckUniswapSumVolumeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.CheckUniswapSumVolumeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.CheckUniswapSumVolumeRequest}
 */
proto.zk.gateway.CheckUniswapSumVolumeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.CheckUniswapSumVolumeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.CheckUniswapSumVolumeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.CheckUniswapSumVolumeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.CheckUniswapSumVolumeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.zk.gateway.CheckUniswapSumVolumeRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.CheckUniswapSumVolumeRequest} returns this
 */
proto.zk.gateway.CheckUniswapSumVolumeRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.CheckUniswapSumVolumeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.CheckUniswapSumVolumeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.CheckUniswapSumVolumeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.CheckUniswapSumVolumeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    errmsg: (f = msg.getErrmsg()) && proto.zk.gateway.ErrMsg.toObject(includeInstance, f),
    checkStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
    resp: (f = msg.getResp()) && proto.zk.gateway.UniswapSumVolumeResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.CheckUniswapSumVolumeResponse}
 */
proto.zk.gateway.CheckUniswapSumVolumeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.CheckUniswapSumVolumeResponse;
  return proto.zk.gateway.CheckUniswapSumVolumeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.CheckUniswapSumVolumeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.CheckUniswapSumVolumeResponse}
 */
proto.zk.gateway.CheckUniswapSumVolumeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zk.gateway.ErrMsg;
      reader.readMessage(value,proto.zk.gateway.ErrMsg.deserializeBinaryFromReader);
      msg.setErrmsg(value);
      break;
    case 2:
      var value = /** @type {!proto.zk.gateway.CheckStatus} */ (reader.readEnum());
      msg.setCheckStatus(value);
      break;
    case 3:
      var value = new proto.zk.gateway.UniswapSumVolumeResponse;
      reader.readMessage(value,proto.zk.gateway.UniswapSumVolumeResponse.deserializeBinaryFromReader);
      msg.setResp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.CheckUniswapSumVolumeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.CheckUniswapSumVolumeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.CheckUniswapSumVolumeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.CheckUniswapSumVolumeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrmsg();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zk.gateway.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getCheckStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getResp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zk.gateway.UniswapSumVolumeResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrMsg errmsg = 1;
 * @return {?proto.zk.gateway.ErrMsg}
 */
proto.zk.gateway.CheckUniswapSumVolumeResponse.prototype.getErrmsg = function() {
  return /** @type{?proto.zk.gateway.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.ErrMsg, 1));
};


/**
 * @param {?proto.zk.gateway.ErrMsg|undefined} value
 * @return {!proto.zk.gateway.CheckUniswapSumVolumeResponse} returns this
*/
proto.zk.gateway.CheckUniswapSumVolumeResponse.prototype.setErrmsg = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.CheckUniswapSumVolumeResponse} returns this
 */
proto.zk.gateway.CheckUniswapSumVolumeResponse.prototype.clearErrmsg = function() {
  return this.setErrmsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.CheckUniswapSumVolumeResponse.prototype.hasErrmsg = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CheckStatus check_status = 2;
 * @return {!proto.zk.gateway.CheckStatus}
 */
proto.zk.gateway.CheckUniswapSumVolumeResponse.prototype.getCheckStatus = function() {
  return /** @type {!proto.zk.gateway.CheckStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zk.gateway.CheckStatus} value
 * @return {!proto.zk.gateway.CheckUniswapSumVolumeResponse} returns this
 */
proto.zk.gateway.CheckUniswapSumVolumeResponse.prototype.setCheckStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional UniswapSumVolumeResponse resp = 3;
 * @return {?proto.zk.gateway.UniswapSumVolumeResponse}
 */
proto.zk.gateway.CheckUniswapSumVolumeResponse.prototype.getResp = function() {
  return /** @type{?proto.zk.gateway.UniswapSumVolumeResponse} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.UniswapSumVolumeResponse, 3));
};


/**
 * @param {?proto.zk.gateway.UniswapSumVolumeResponse|undefined} value
 * @return {!proto.zk.gateway.CheckUniswapSumVolumeResponse} returns this
*/
proto.zk.gateway.CheckUniswapSumVolumeResponse.prototype.setResp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.CheckUniswapSumVolumeResponse} returns this
 */
proto.zk.gateway.CheckUniswapSumVolumeResponse.prototype.clearResp = function() {
  return this.setResp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.CheckUniswapSumVolumeResponse.prototype.hasResp = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zk.gateway.UniswapSumVolumeResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.UniswapSumVolumeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.UniswapSumVolumeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.UniswapSumVolumeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.UniswapSumVolumeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sumVolume: jspb.Message.getFieldWithDefault(msg, 1, ""),
    txHashesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    chainId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    proofId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.UniswapSumVolumeResponse}
 */
proto.zk.gateway.UniswapSumVolumeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.UniswapSumVolumeResponse;
  return proto.zk.gateway.UniswapSumVolumeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.UniswapSumVolumeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.UniswapSumVolumeResponse}
 */
proto.zk.gateway.UniswapSumVolumeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSumVolume(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTxHashes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChainId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProofId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.UniswapSumVolumeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.UniswapSumVolumeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.UniswapSumVolumeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.UniswapSumVolumeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSumVolume();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTxHashesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getChainId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getProofId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string sum_volume = 1;
 * @return {string}
 */
proto.zk.gateway.UniswapSumVolumeResponse.prototype.getSumVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.UniswapSumVolumeResponse} returns this
 */
proto.zk.gateway.UniswapSumVolumeResponse.prototype.setSumVolume = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string tx_hashes = 2;
 * @return {!Array<string>}
 */
proto.zk.gateway.UniswapSumVolumeResponse.prototype.getTxHashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zk.gateway.UniswapSumVolumeResponse} returns this
 */
proto.zk.gateway.UniswapSumVolumeResponse.prototype.setTxHashesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zk.gateway.UniswapSumVolumeResponse} returns this
 */
proto.zk.gateway.UniswapSumVolumeResponse.prototype.addTxHashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zk.gateway.UniswapSumVolumeResponse} returns this
 */
proto.zk.gateway.UniswapSumVolumeResponse.prototype.clearTxHashesList = function() {
  return this.setTxHashesList([]);
};


/**
 * optional uint64 chain_id = 3;
 * @return {number}
 */
proto.zk.gateway.UniswapSumVolumeResponse.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.UniswapSumVolumeResponse} returns this
 */
proto.zk.gateway.UniswapSumVolumeResponse.prototype.setChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string proof_id = 4;
 * @return {string}
 */
proto.zk.gateway.UniswapSumVolumeResponse.prototype.getProofId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.UniswapSumVolumeResponse} returns this
 */
proto.zk.gateway.UniswapSumVolumeResponse.prototype.setProofId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GenerateUniswapSumProofRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GenerateUniswapSumProofRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GenerateUniswapSumProofRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GenerateUniswapSumProofRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    address: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GenerateUniswapSumProofRequest}
 */
proto.zk.gateway.GenerateUniswapSumProofRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GenerateUniswapSumProofRequest;
  return proto.zk.gateway.GenerateUniswapSumProofRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GenerateUniswapSumProofRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GenerateUniswapSumProofRequest}
 */
proto.zk.gateway.GenerateUniswapSumProofRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GenerateUniswapSumProofRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GenerateUniswapSumProofRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GenerateUniswapSumProofRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GenerateUniswapSumProofRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 chain_id = 1;
 * @return {number}
 */
proto.zk.gateway.GenerateUniswapSumProofRequest.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.zk.gateway.GenerateUniswapSumProofRequest} returns this
 */
proto.zk.gateway.GenerateUniswapSumProofRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.zk.gateway.GenerateUniswapSumProofRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.GenerateUniswapSumProofRequest} returns this
 */
proto.zk.gateway.GenerateUniswapSumProofRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zk.gateway.GenerateUniswapSumProofResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zk.gateway.GenerateUniswapSumProofResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zk.gateway.GenerateUniswapSumProofResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GenerateUniswapSumProofResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.zk.gateway.ErrMsg.toObject(includeInstance, f),
    proofId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zk.gateway.GenerateUniswapSumProofResponse}
 */
proto.zk.gateway.GenerateUniswapSumProofResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zk.gateway.GenerateUniswapSumProofResponse;
  return proto.zk.gateway.GenerateUniswapSumProofResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zk.gateway.GenerateUniswapSumProofResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zk.gateway.GenerateUniswapSumProofResponse}
 */
proto.zk.gateway.GenerateUniswapSumProofResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zk.gateway.ErrMsg;
      reader.readMessage(value,proto.zk.gateway.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProofId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zk.gateway.GenerateUniswapSumProofResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zk.gateway.GenerateUniswapSumProofResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zk.gateway.GenerateUniswapSumProofResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zk.gateway.GenerateUniswapSumProofResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zk.gateway.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getProofId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.zk.gateway.ErrMsg}
 */
proto.zk.gateway.GenerateUniswapSumProofResponse.prototype.getErr = function() {
  return /** @type{?proto.zk.gateway.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.zk.gateway.ErrMsg, 1));
};


/**
 * @param {?proto.zk.gateway.ErrMsg|undefined} value
 * @return {!proto.zk.gateway.GenerateUniswapSumProofResponse} returns this
*/
proto.zk.gateway.GenerateUniswapSumProofResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zk.gateway.GenerateUniswapSumProofResponse} returns this
 */
proto.zk.gateway.GenerateUniswapSumProofResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zk.gateway.GenerateUniswapSumProofResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string proof_id = 2;
 * @return {string}
 */
proto.zk.gateway.GenerateUniswapSumProofResponse.prototype.getProofId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zk.gateway.GenerateUniswapSumProofResponse} returns this
 */
proto.zk.gateway.GenerateUniswapSumProofResponse.prototype.setProofId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.zk.gateway.TransferStatus = {
  TS_UNKNOWN: 0,
  TS_GENERATING_PROOF: 1,
  TS_RELEASING_FUND: 2,
  TS_COMPLETED: 3
};

/**
 * @enum {number}
 */
proto.zk.gateway.TokenType = {
  TP_UNKNOWN: 0,
  TP_VAULT: 1,
  TP_PEG: 2
};

/**
 * @enum {number}
 */
proto.zk.gateway.Tier = {
  STONE: 0,
  BRONZE: 1,
  SILVER: 2,
  GOLD: 3,
  PLATINUM: 4,
  DIAMOND: 5
};

/**
 * @enum {number}
 */
proto.zk.gateway.ErrCode = {
  ERROR_CODE_UNDEFINED: 0,
  ERROR_CODE_SLOT_VALUE_PROOF_GENERATION_FAILED: 1,
  ERROR_CODE_TRANSACTION_PROOF_GENERATION_FAILED: 2
};

/**
 * @enum {number}
 */
proto.zk.gateway.CheckStatus = {
  IN_PROGRESS: 0,
  COMPLETE: 1
};

goog.object.extend(exports, proto.zk.gateway);
