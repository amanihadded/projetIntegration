import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageCategory } from '../models/imageCategory.model';

@Injectable({
  providedIn: 'root'
})
export class ImageCategoryService {

  
  private apiUrl = 'http://localhost:8087/api/boycott/imageCategory';

  constructor(private http: HttpClient) { }

  uploadImage(file: File, idCategory: number): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('imageFile', file);

    return this.http.post<string>(`${this.apiUrl}/upload/${idCategory}`, formData);
  }

  getImageByCategoryId(idCategory: number): Observable<ImageCategory> {
    return this.http.get<ImageCategory>(`${this.apiUrl}/get/${idCategory}`);
  }

  updateImage(file: File, idCategory: number): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('imageFile', file);

    return this.http.put<string>(`${this.apiUrl}/update/${idCategory}`, formData);
  }

  deleteImage(idCategory: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/delete/${idCategory}`);
  }
}


