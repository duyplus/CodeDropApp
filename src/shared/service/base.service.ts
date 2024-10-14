import { StorageUtil, isBrowser } from "@core/utils";
import { axiosInstance } from "@infrastructure/axios";
import type {
  BaseConditionDto,
  BaseConditionInput,
  BaseDto,
  BaseInput,
  BasePaginationDto,
  BasePaginationInput,
  BaseQueryInput,
  BaseQueryResponseDto,
} from "@shared/domain";

export class BaseService<
  Dto extends BaseDto,
  DetailDto extends BaseDto,
  ConditionDto extends BaseConditionDto,
  PaginationDto extends BasePaginationDto,
  CreateInput extends BaseInput,
  UpdateInput extends BaseInput,
  ConditionInput extends BaseConditionInput,
  PaginationInput extends BasePaginationInput
> {
  protected apiPath: string = "";

  protected getAuthHeaders() {
    const token = isBrowser ? StorageUtil.getAccessToken() : "";
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  create = async (params: { input: CreateInput }): Promise<Dto> => {
    const { input } = params;
    return axiosInstance
      .post<Dto>(this.apiPath, input, { headers: this.getAuthHeaders() })
      .then((res) => res.data);
  };

  query = async (params: {
    input: BaseQueryInput<ConditionInput, PaginationInput>;
  }): Promise<BaseQueryResponseDto<Dto, ConditionDto, PaginationDto>> => {
    return axiosInstance
      .post<BaseQueryResponseDto<Dto, ConditionDto, PaginationDto>>(
        `${this.apiPath}/query`,
        params,
        { headers: this.getAuthHeaders() }
      )
      .then((res) => res.data);
  };

  findById = async (params: { id: string }): Promise<DetailDto> => {
    const { id } = params;
    return axiosInstance
      .get<DetailDto>(`${this.apiPath}/${id}`, {
        headers: this.getAuthHeaders(),
      })
      .then((res) => res.data);
  };

  update = async (params: { id: string; input: UpdateInput }): Promise<Dto> => {
    const { id, input } = params;
    return axiosInstance
      .put<Dto>(`${this.apiPath}/${id}`, input, {
        headers: this.getAuthHeaders(),
      })
      .then((res) => res.data);
  };

  delete = async (params: { id: string }): Promise<Dto> => {
    const { id } = params;
    return axiosInstance
      .delete<Dto>(`${this.apiPath}/${id}`, {
        headers: this.getAuthHeaders(),
      })
      .then((res) => res.data);
  };
}
