export interface IInitiateBvnVerification {
  bvn: string;
}

export interface IValidateBvnVerification {
  bvn: string;
  verificationId: string;
  otpCode: string;
}
