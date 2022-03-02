import { Injectable } from '@angular/core';
import { Transferencia } from '../../interfaces/Transferencia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private url = 'http://localhost:5000/transferencias';

  constructor(private httpClient: HttpClient) {}

  public obterTodas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  public adicionar(transferencia: Transferencia): Observable<Transferencia> {
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }
}
