import {
  BaseConditionDto,
  BaseDto,
  BasePaginationDto,
  BaseQueryResponseDto,
} from '@shared/domain';
import { SourceCodeDto } from '../../source-code';
import { CategoryDto } from '../../category';

export type SourceTypeDto = BaseDto & {
  source: SourceCodeDto;
  category: CategoryDto;
};

export type SourceTypeDetailDto = SourceTypeDto & {};

export type SourceTypeConditionDto = BaseConditionDto & {};

export type SourceTypePaginationDto = BasePaginationDto & {};

export type SourceTypeQueryResponseDto = BaseQueryResponseDto<
  SourceTypeDto,
  SourceTypeConditionDto,
  SourceTypePaginationDto
>;
