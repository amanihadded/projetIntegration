import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageProduct } from '../models/ImageProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ImageProductService {

  private apiUrl = 'http://localhost:8087/api/boycott/imageProduct';

  constructor(private http: HttpClient) { }

  uploadImage(file: File, idProduct: number): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('imageFile', file);

    return this.http.post<string>(`${this.apiUrl}/upload/${idProduct}`, formData);
  }

  getImageByProductId(idProduct: number): Observable<ImageProduct> {
    return this.http.get<ImageProduct>(`${this.apiUrl}/get/${idProduct}`);
  }

  updateImage(file: File, idProduct: number): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('imageFile', file);

    return this.http.put<string>(`${this.apiUrl}/update/${idProduct}`, formData);
  }

  deleteImage(idProduct: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/delete/${idProduct}`);
  }

}
