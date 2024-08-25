import {
  BaseConditionDto,
  BaseDto,
  BasePaginationDto,
  BaseQueryResponseDto,
} from '@shared/domain';
import { UserDto } from '../../user';
import { SourceCodeDto } from '../../source-code';

export type FavoriteDto = BaseDto & {
  source: SourceCodeDto;
  user: UserDto;
};

export type FavoriteDetailDto = FavoriteDto & {};

export type FavoriteConditionDto = BaseConditionDto & {};

export type FavoritePaginationDto = BasePaginationDto & {};

export type FavoriteQueryResponseDto = BaseQueryResponseDto<
  FavoriteDto,
  FavoriteConditionDto,
  FavoritePaginationDto
>;
