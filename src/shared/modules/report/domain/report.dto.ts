import {
  BaseConditionDto,
  BaseDto,
  BasePaginationDto,
  BaseQueryResponseDto,
} from '@shared/domain';

export type ReportDto = BaseDto & {
  link_original: string;
  link_report: string;
  description: string;
};

export type ReportDetailDto = ReportDto & {};

export type ReportConditionDto = BaseConditionDto & {};

export type ReportPaginationDto = BasePaginationDto & {};

export type ReportQueryResponseDto = BaseQueryResponseDto<
  ReportDto,
  ReportConditionDto,
  ReportPaginationDto
>;
