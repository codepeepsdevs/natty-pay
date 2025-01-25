export type IAirtimePlan = {
  phone: string;
  currency: string;
};

export type IAirtimeVariation = {
  operatorId: number;
};

export type IAirtimePayPayload = {
  phone: string;
  currency: string;
  operatorId: number;
  amount: number;
  addBeneficiary?: boolean;
  walletPin: string;
};
