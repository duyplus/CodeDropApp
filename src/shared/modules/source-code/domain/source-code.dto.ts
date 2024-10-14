import { BaseConditionDto, BaseDto, BasePaginationDto, BaseQueryResponseDto } from "@shared/domain";
import { UserDto } from "../../user";

export type SourceCodeDto = BaseDto & {
  title: string;
  image?: string[];
  price: number;
  slug: string;
  linkDownload: string;
  linkDemo: string;
  commited?: string;
  seoKeyword?: string[];
  shortDesc?: string;
  description?: string;
  tutorial: string;
  contract: boolean;
  viewCount?: number;
  seller: UserDto;
  };

export type SourceCodeDetailDto = SourceCodeDto & {};

export type SourceCodeConditionDto = BaseConditionDto & {};

export type SourceCodePaginationDto = BasePaginationDto & {};

export type SourceCodeQueryResponseDto = BaseQueryResponseDto<
  SourceCodeDto,
  SourceCodeConditionDto,
  SourceCodePaginationDto
>;
