import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../Stock';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private apiBaseUrl: string = "http://127.0.0.1:8000/api/stocks/";

  constructor(private http: HttpClient) { }

  // error handler for http client
  private errorHandler(error: HttpErrorResponse) {    
    return throwError(error.error);
  }

  // Get
  getAllStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.apiBaseUrl)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getStockById(stock: Stock): Observable<Stock> {
    return this.http.get<Stock>(`${this.apiBaseUrl}${stock.id}`)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // Post
  addStock(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(this.apiBaseUrl, stock)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // Put
  updateStock(stock: Stock): Observable<Stock> {
    const endpointUrl: string = `${this.apiBaseUrl}${stock.id}/`;
    return this.http.put<Stock>(endpointUrl, stock)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // Delete
  deleteStock(stock: Stock): Observable<Stock> {
    const endpointUrl: string = `${this.apiBaseUrl}${stock.id}/`;
    return this.http.delete<Stock>(endpointUrl)
      .pipe(
        catchError(this.errorHandler)
      );  
  }
}
