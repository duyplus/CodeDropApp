import { BaseConditionDto, BaseDto, BasePaginationDto, BaseQueryResponseDto } from "@shared/domain";
import { UserDto } from "../../user";
import { CommentDto } from "../../comment/domain";

export type CommentSourceDto = BaseDto & {
    user: UserDto;
    comment: CommentDto;
  };

export type CommentSourceDetailDto = CommentSourceDto & {};

export type CommentSourceConditionDto = BaseConditionDto & {};

export type CommentSourcePaginationDto = BasePaginationDto & {};

export type CommentSourceQueryResponseDto = BaseQueryResponseDto<
  CommentSourceDto,
  CommentSourceConditionDto,
  CommentSourcePaginationDto
>;
