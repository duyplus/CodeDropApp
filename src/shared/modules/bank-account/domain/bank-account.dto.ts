export type BankAccountDto = {
    bankNumber: string;
    bankName: string;
    fullname: string;
    createdAt: Date;
    updatedAt?: Date;
    isDelete?: boolean;
  };