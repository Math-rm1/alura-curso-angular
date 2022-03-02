import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComunicacaoService {
  private subject = new Subject<any>();

  emitir() {
    this.subject.next(null);
  }

  escutar() {
    return this.subject.asObservable();
  }
}
