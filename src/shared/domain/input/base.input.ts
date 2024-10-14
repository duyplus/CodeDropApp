/**
 * Base Input type with common properties.
 */
export type BaseInput = {};

/**
 * Input for pagination.
 */
export type BasePaginationInput = {
  page?: number;
  pageSize?: number;
};

export type BaseConditionInput = {
  keyword?: string;
  // Add other condition fields if needed
};

export type BaseQueryInput<
  Condition extends BaseConditionInput,
  Pagination extends BasePaginationInput
> = {
  condition?: Condition;
  pagination?: Pagination;
};
