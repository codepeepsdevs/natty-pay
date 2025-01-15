export interface User {
  id: string;
  email: string;
  username: string;
  fullname: string;
  createdAt: string;
  updatedAt: string;
  currency: string;
  businessName: string | null;
  isBusiness: boolean;
  phoneNumber: string | null;
  isPasscodeSet: boolean;
  isPhoneVerified: boolean;
  isEmailVerified: boolean;
  isBvnVerified: boolean;
  accountType: "PERSONAL" | "BUSINESS";
  profileImageFilename: string;
  profileImageUrl: string;
}
