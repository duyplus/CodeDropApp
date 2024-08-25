import {
  BaseConditionDto,
  BaseDto,
  BasePaginationDto,
  BaseQueryResponseDto,
} from '@shared/domain';
import { BankAccountDto } from '@shared/modules/bank-account';
import { UserDto } from '../../user';
import { RoleDto } from '../../roles';
import { SourceCodeDto } from '../../source-code';

export type FeedbackDto = BaseDto & {
  rate: number;
  source: SourceCodeDto;
  user: UserDto;
};

export type FeedbackDetailDto = FeedbackDto & {};

export type FeedbackConditionDto = BaseConditionDto & {};

export type FeedbackPaginationDto = BasePaginationDto & {};

export type FeedbackQueryResponseDto = BaseQueryResponseDto<
  FeedbackDto,
  FeedbackConditionDto,
  FeedbackPaginationDto
>;
