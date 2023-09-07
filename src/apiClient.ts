import { WebClient } from "./proto/GatewayServiceClientPb";

const baseUrl = "https://cbridge-v2-test.celer.network/zkpocv1";

export const grpcApiClient = new WebClient(baseUrl, null, null);
