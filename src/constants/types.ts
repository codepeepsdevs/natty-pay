/* eslint-disable @typescript-eslint/no-explicit-any */

export enum CURRENCY {
  NGN = "NGN",
  USD = "USD",
  EUR = "EUR",
  GBP = "GBP",
}

export enum ACCOUNT_TYPE {
  PERSONAL = "PERSONAL",
  BUSINESS = "BUSINESS",
}

export enum SCAM_TICKET_STATUS {
  opened = "opened",
  closed = "closed",
}

export enum USER_ACCOUNT_STATUS {
  active = "active",
  restricted = "restricted",
  frozen = "frozen",
}

export enum USER_ROLE {
  USER = "USER",
  ADMIN = "ADMIN",
}

export enum TIER_LEVEL {
  notSet = "notSet",
  one = "one",
  two = "two",
  three = "three",
}

export interface User {
  id: string;
  email: string;
  username: string;
  fullname: string;
  createdAt: string;
  updatedAt: string;
  currency: CURRENCY;
  businessName: string | null;
  isBusiness: boolean | null;
  phoneNumber: string | null;
  isPasscodeSet: boolean;
  isPhoneVerified: boolean;
  isEmailVerified: boolean;
  isBvnVerified: boolean;
  isNinVerified: boolean;
  nin: string | null;
  selfieBase64Image: string | null;
  accountType: ACCOUNT_TYPE;
  isWalletPinSet: boolean;
  profileImageFilename: string | null;
  profileImageUrl: string | null;
  referralCode: string | null;
  dateOfBirth: string | null;
  status: USER_ACCOUNT_STATUS;
  role: USER_ROLE;
  dailyCummulativeTransactionLimit: number;
  cummulativeBalanceLimit: number;
  tierLevel: TIER_LEVEL;
  wallet?: Wallet;
  scamTicket?: ScamTicket[];
}

export interface Wallet {
  id: string;
  userId: string;
  balance: number;
  currency: CURRENCY;
  accountNumber: string;
  accountName: string | null;
  bankName: string | null;
  bankCode: string | null;
  createdAt: string;
  updatedAt: string;
  accountRef: string | null;
  user: User;
  transactions?: Transaction[]; // You might need to create a Transaction interface
}

export interface ScamTicket {
  id: string;
  userId: string;
  ref_number: number;
  title: string;
  screenshotImageUrl: string;
  status: SCAM_TICKET_STATUS;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  user: User;
}

export enum TRANSACTION_TYPE {
  DEBIT = "DEBIT",
  CREDIT = "CREDIT",
}

export enum TRANSACTION_STATUS {
  pending = "pending",
  success = "success",
  failed = "failed",
}

export enum TRANSACTION_CATEGORY {
  TRANSFER = "TRANSFER",
}

export interface Transaction {
  id: string;
  walletId: string;
  transactionRef: string | null;
  type: TRANSACTION_TYPE;
  category: TRANSACTION_CATEGORY;
  currency: string;
  status: TRANSACTION_STATUS;
  description: string | null;
  previousBalance: number;
  currentBalance: number;
  reference: string | null;
  billDetails: any | null;
  transferDetails: any | null;
  depositDetails: any | null;
  createdAt: string;
  updatedAt: string;
  wallet: Wallet;
}
