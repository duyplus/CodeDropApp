import { BaseConditionDto, BaseDto, BasePaginationDto, BaseQueryResponseDto } from "@shared/domain";
import { UserDto } from "../../user";

export type CommentDto = BaseDto & {
  content: string;
  type: number;
  replyFor?: number;
  user: UserDto;
  };

export type CommentDetailDto = CommentDto & {};

export type CommentConditionDto = BaseConditionDto & {};

export type CommentPaginationDto = BasePaginationDto & {};

export type CommentQueryResponseDto = BaseQueryResponseDto<
  CommentDto,
  CommentConditionDto,
  CommentPaginationDto
>;
