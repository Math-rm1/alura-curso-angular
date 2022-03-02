import { ComunicacaoService } from './../../services/comunicacao/comunicacao.service';
import { TransferenciaService } from '../../services/transferencia/transferencia.service';
import { Transferencia } from '../../interfaces/Transferencia';
import { Component, OnInit, OnDestroy, Output, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit, OnDestroy {
  public transferencias: readonly Transferencia[];
  public subscription: Subscription;

  public obterTransferencias(): void {
    this.transferenciaService
      .obterTodas()
      .subscribe((transferencias: Transferencia[]) => {
        this.transferencias = transferencias;
        console.log('Printando lista do componente extrato');
        console.table(this.transferencias);
      });
  }

  constructor(
    private transferenciaService: TransferenciaService,
    private comunicacaoService: ComunicacaoService
  ) {}

  ngOnInit() {
    this.obterTransferencias();
    // this.subscription = this.comunicacaoService.escutar().subscribe((a) => {
    //   this.obterTransferencias();
    // });
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
