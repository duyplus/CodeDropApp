import { BankAccountDto } from "@shared/modules/bank-account";

export type UserInput ={
    userCode: string;
    email?: string;
    fullname?: string;
    phone?: string;
    photo?: string;
    bank?: BankAccountDto;
  };