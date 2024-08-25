import { BaseConditionDto, BaseDto, BasePaginationDto, BaseQueryResponseDto } from "@shared/domain";
import { BankAccountDto } from "@shared/modules/bank-account";
import { UserDto } from "../../user";
import { RoleDto } from "../../roles";

export type AuthorityDto = BaseDto & {
    user: UserDto;
    role: RoleDto;
  };

export type AuthorityDetailDto = AuthorityDto & {};

export type AuthorityConditionDto = BaseConditionDto & {};

export type AuthorityPaginationDto = BasePaginationDto & {};

export type AuthorityQueryResponseDto = BaseQueryResponseDto<
  AuthorityDto,
  AuthorityConditionDto,
  AuthorityPaginationDto
>;
