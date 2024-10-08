import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://localhost:3000/api/categories'; // Ajuste conforme sua API

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> { // Ensure this method is defined correctly
    return this.http.get<Category[]>(this.apiUrl); // Fetch categories from the API
  }

  getCategoriesByPostId(postId: number): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}?postId=${postId}`);
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category); // Ajuste a URL conforme necessário
  }

  // Atualizar a assinatura do método updateCategory
  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/${id}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
