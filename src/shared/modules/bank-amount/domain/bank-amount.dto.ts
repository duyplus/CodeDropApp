import { BaseConditionDto, BaseDto, BasePaginationDto, BaseQueryResponseDto } from "@shared/domain";
import { BankAccountDto } from "@shared/modules/bank-account";
import { UserDto } from "../../user";

export type BankAmountDto = BaseDto & {
    user : UserDto;
    amount: number;
  };

export type BankAmountDetailDto = BankAmountDto & {};

export type BankAmountConditionDto = BaseConditionDto & {};

export type BankAmountPaginationDto = BasePaginationDto & {};

export type BankAmountQueryResponseDto = BaseQueryResponseDto<
  BankAmountDto,
  BankAmountConditionDto,
  BankAmountPaginationDto
>;
