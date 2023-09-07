import "./App.css";
import { GetProofRequest } from "./proto/gateway_pb";
import { grpcApiClient } from "./apiClient";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState<string | Uint8Array>();

  const getProof = async (proofId: string) => {
    if (!proofId) return;
    const req = new GetProofRequest();
    req.setProofId(proofId);
    const response = await grpcApiClient.getProof(req, {
      "Cache-Control": "no-cache",
    });
    const obj = response.toObject();
    setMessage(JSON.stringify(obj));
  };

  return (
    <div className="App" style={{ width: "100%", wordBreak: "break-word" }}>
      <p>Click button to get zk-snark proof </p>

      <button
        style={{ width: 300 }}
        onClick={() =>
          getProof(
            "0x03e116c769f29a765d71d339ce7fc85c6cabeff33c2fa02b9bf181d65b33a14d"
          )
        }
      >
        Call GetProof API
      </button>
      <pre>response: {message}</pre>
    </div>
  );
}

export default App;
