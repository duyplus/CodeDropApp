import { BaseConditionDto, BaseDto, BasePaginationDto, BaseQueryResponseDto } from "@shared/domain";
export type RoleDto = BaseDto & {
   name: string;
  };

export type RoleDetailDto = RoleDto & {};

export type RoleConditionDto = BaseConditionDto & {};

export type RolePaginationDto = BasePaginationDto & {};

export type RoleQueryResponseDto = BaseQueryResponseDto<
  RoleDto,
  RoleConditionDto,
  RolePaginationDto
>;
