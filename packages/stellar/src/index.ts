import {
  Account,
  Asset,
  BASE_FEE,
  Horizon,
  Keypair,
  Networks,
  Operation,
  Transaction,
  TransactionBuilder
} from "@stellar/stellar-sdk";

export interface StellarConfig { network: "testnet"; horizonUrl: string; assetCode: string; assetIssuer?: string; }
export interface StellarBalance { assetCode: string; balance: string; issuer?: string; }

export class StellarService {
  private readonly server: Horizon.Server;
  private readonly networkPassphrase: string;
  constructor(private readonly config: StellarConfig = {
    network: "testnet",
    horizonUrl: process.env.STELLAR_HORIZON_URL ?? "https://horizon-testnet.stellar.org",
    assetCode: process.env.STELLAR_ASSET_CODE ?? "USDC",
    assetIssuer: process.env.STELLAR_ASSET_ISSUER || undefined
  }) {
    this.server = new Horizon.Server(config.horizonUrl);
    this.networkPassphrase = Networks.TESTNET;
  }

  createTestnetAccount(): { publicKey: string; secretKey: string } {
    const keypair = Keypair.random();
    return { publicKey: keypair.publicKey(), secretKey: keypair.secret() };
  }

  async loadAccount(publicKey: string) { return this.server.loadAccount(publicKey); }

  async readBalances(publicKey: string): Promise<StellarBalance[]> {
    const account = await this.loadAccount(publicKey);
    return account.balances.map((balance) => {
      if (balance.asset_type === "native") return { assetCode: "XLM", balance: balance.balance };
      if (balance.asset_type === "liquidity_pool_shares") return { assetCode: "LIQUIDITY_POOL", balance: balance.balance };
      const issuedBalance = balance as { asset_code: string; asset_issuer: string; balance: string };
      return { assetCode: issuedBalance.asset_code, balance: issuedBalance.balance, issuer: issuedBalance.asset_issuer };
    });
  }

  buildPayment(sourcePublicKey: string, destination: string, amount: string, assetCode = this.config.assetCode): Transaction {
    const asset = assetCode === "XLM" ? Asset.native() : new Asset(assetCode, this.config.assetIssuer ?? "");
    return new TransactionBuilder(new Account(sourcePublicKey, "0"), { fee: BASE_FEE, networkPassphrase: this.networkPassphrase })
      .addOperation(Operation.payment({ destination, asset, amount }))
      .setTimeout(180)
      .build();
  }

  signAndSerialize(transaction: Transaction, secretKey: string): string {
    const keypair = Keypair.fromSecret(secretKey);
    transaction.sign(keypair);
    return transaction.toXDR();
  }

  async submit(transaction: Transaction) { return this.server.submitTransaction(transaction); }
  async getTransaction(hash: string) { return this.server.transactions().transaction(hash).call(); }
}

export const stellarService = new StellarService();