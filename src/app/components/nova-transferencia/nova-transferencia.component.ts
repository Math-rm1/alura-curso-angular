import { ComunicacaoService } from './../../services/comunicacao/comunicacao.service';
import { TransferenciaService } from '../../services/transferencia/transferencia.service';
import { Transferencia } from '../../interfaces/Transferencia';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  public valor: number;
  public contaDestino: number;

  constructor(
    private transferenciaService: TransferenciaService,
    private comunicacaoService: ComunicacaoService,
    private router: Router
  ) {}

  @Output()
  aoTransferir: EventEmitter<string> = new EventEmitter();

  public transferir(): void {
    if (this.ehValido()) {
      const transferenciaEmitida: Transferencia = {
        valor: this.valor,
        contaDestino: this.contaDestino,
        data: new Date(),
      };

      this.transferenciaService.adicionar(transferenciaEmitida).subscribe({
        next: () => console.log('Requisição feita com sucesso'),
        error: (err) => console.log('Requisição com erro', err),
        complete: () => {
          this.aoTransferir.emit('Evento emitido');
          this.limparCampos();
          this.router.navigateByUrl('/extrato');
        },
      });
    }
  }

  public limparCampos(): void {
    this.valor = undefined;
    this.contaDestino = undefined;
  }

  public ehValido(): boolean {
    return this.valor > 0 ? true : false;
  }
}
