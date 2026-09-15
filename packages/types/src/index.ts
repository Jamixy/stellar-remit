export type Network = "testnet";
export type TransactionStatus = "pending" | "successful" | "failed";
export type TransactionDirection = "sent" | "received";

export interface Balance { assetCode: string; balance: string; issuer?: string; }
export interface WalletSummary { publicKey: string; network: Network; balances: Balance[]; }
export interface TransactionSummary {
  id: string;
  direction: TransactionDirection;
  status: TransactionStatus;
  amount: string;
  assetCode: string;
  destination: string;
  transactionHash?: string;
  createdAt: string;
}