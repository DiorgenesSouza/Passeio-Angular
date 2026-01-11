import { Injectable, model } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './categoria-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

    salvar(categoria: Categoria) : Observable<Categoria>{
      return this.http.post<Categoria>('http: 3000/categorias', categoria);

    }
  
    obterTodas() : Observable<Categoria[]>{
      return this.http.get<Categoria[]>('http: 3000/categorias');

    }
}
