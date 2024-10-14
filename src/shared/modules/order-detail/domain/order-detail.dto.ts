import { BaseConditionDto, BaseDto, BasePaginationDto, BaseQueryResponseDto } from "@shared/domain";
import { UserDto } from "../../user";
import { SourceCodeDto } from "../../source-code/domain";


export type OrderDetailDto = BaseDto & {
    source: SourceCodeDto;
    buyer: UserDto;
  };

export type OrderDetailDetailDto = OrderDetailDto & {};

export type OrderDetailConditionDto = BaseConditionDto & {};

export type OrderDetailPaginationDto = BasePaginationDto & {};

export type OrderDetailQueryResponseDto = BaseQueryResponseDto<
  OrderDetailDto,
  OrderDetailConditionDto,
  OrderDetailPaginationDto
>;
