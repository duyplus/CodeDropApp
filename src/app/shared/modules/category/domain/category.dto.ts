import {
  BaseConditionDto,
  BaseDto,
  BasePaginationDto,
  BaseQueryResponseDto,
} from '@shared/domain';

export type CategoryDto = BaseDto & {
  label: string;
  type: String;
};

export type CategoryDetailDto = CategoryDto & {};

export type CategoryConditionDto = BaseConditionDto & {};

export type CategoryPaginationDto = BasePaginationDto & {};

export type CategoryQueryResponseDto = BaseQueryResponseDto<
  CategoryDto,
  CategoryConditionDto,
  CategoryPaginationDto
>;
