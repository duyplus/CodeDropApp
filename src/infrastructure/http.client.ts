import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { appConfig } from '@app/app.config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = appConfig.API_URL;

  constructor(private http: HttpClient) {}

  /**
   * @param endpoint Đường dẫn API tương đối để lấy dữ liệu.
   * @param params Các tham số query option (tùy chọn).
   * @param id ID của item.
   * @param data Dữ liệu truyền mới.
   * @param operation Tên của hoạt động.
   * @param result Kết quả mặc định khi có lỗi xảy ra.
   * @return Observable với dữ liệu từ API.
   */

  // Lấy tất cả các item từ API.
  getAll<T>(
    endpoint: string,
    params?: { [key: string]: string | number }
  ): Observable<T[]> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.set(key, params[key].toString());
      });
    }
    return this.http
      .get<T[]>(`${this.apiUrl}/${endpoint}`, { params: httpParams })
      .pipe(catchError(this.handleError<T[]>('getAll', [])));
  }

  // Lấy một item theo ID từ API.
  getById<T>(endpoint: string, id: number | string): Observable<T> {
    return this.http
      .get<T>(`${this.apiUrl}/${endpoint}/${id}`)
      .pipe(catchError(this.handleError<T>('getById')));
  }

  // Tạo một item mới bằng POST.
  post<T>(endpoint: string, data: T): Observable<T> {
    return this.http
      .post<T>(`${this.apiUrl}/${endpoint}`, data)
      .pipe(catchError(this.handleError<T>('post')));
  }

  // Cập nhật một item bằng PUT.
  put<T>(endpoint: string, id: number | string, data: T): Observable<T> {
    return this.http
      .put<T>(`${this.apiUrl}/${endpoint}/${id}`, data)
      .pipe(catchError(this.handleError<T>('put')));
  }


  // Xóa một item theo ID bằng DELETE.
  deleteById(endpoint: string, id: number | string): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${endpoint}/${id}`)
      .pipe(catchError(this.handleError<void>('deleteById')));
  }

  
  // Xử lý lỗi trong các yêu cầu HTTP.
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
