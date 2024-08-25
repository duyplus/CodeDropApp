import {
  BaseConditionDto,
  BaseDto,
  BasePaginationDto,
  BaseQueryResponseDto,
} from '@shared/domain';
import { BankAccountDto } from '@shared/modules/bank-account';
import { UserDto } from '../../user';

export type BankHistoryDto = BaseDto & {
  total: number;
  status: number;
  user: UserDto;
  bankAccount: BankAccountDto;
};

export type BankHistoryDetailDto = BankHistoryDto & {};

export type BankHistoryConditionDto = BaseConditionDto & {};

export type BankHistoryPaginationDto = BasePaginationDto & {};

export type BankHistoryQueryResponseDto = BaseQueryResponseDto<
  BankHistoryDto,
  BankHistoryConditionDto,
  BankHistoryPaginationDto
>;
