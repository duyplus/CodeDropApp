import { BaseConditionDto, BaseDto, BasePaginationDto, BaseQueryResponseDto } from "@shared/domain";
import { BankAccountDto } from "@shared/modules/bank-account";

export type UserDto = BaseDto & {
    userCode: string;
    email?: string;
    fullname?: string;
    phone?: string;
    photo?: string;
    bank?: BankAccountDto;
  };

export type UserDetailDto = UserDto & {};

export type UserConditionDto = BaseConditionDto & {};

export type UserPaginationDto = BasePaginationDto & {};

export type UserQueryResponseDto = BaseQueryResponseDto<
  UserDto,
  UserConditionDto,
  UserPaginationDto
>;
