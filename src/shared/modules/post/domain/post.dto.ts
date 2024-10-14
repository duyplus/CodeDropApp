import {
  BaseConditionDto,
  BaseDto,
  BasePaginationDto,
  BaseQueryResponseDto,
} from '@shared/domain';

export type PostDto = BaseDto & {
  title: string;
  content: string;
  type: number;
};

export type PostDetailDto = PostDto & {};

export type PostConditionDto = BaseConditionDto & {};

export type PostPaginationDto = BasePaginationDto & {};

export type PostQueryResponseDto = BaseQueryResponseDto<
  PostDto,
  PostConditionDto,
  PostPaginationDto
>;
