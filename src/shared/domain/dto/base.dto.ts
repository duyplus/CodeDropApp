export type BaseDto = {
    id: string;
    createdAt?: Date;
    updatedAt?: Date;
    isDelete?: boolean;
  };
  
  export type BasePaginationDto = {
    page?: number;
    pageSize?: number;
  };
  
  export type BaseConditionDto = {
    keyword?: string;
    // Add other condition fields if needed
  };
  
  export type BaseQueryResponseDto<
    Dto extends BaseDto,
    Condition extends BaseConditionDto,
    Pagination extends BasePaginationDto
  > = {
    condition?: Condition;
    pagination?: Pagination;
    totalItems: number;
    totalPages: number;
    content: Dto[];
  };
  