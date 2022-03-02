import { Component, ViewChild } from '@angular/core';
import { ExtratoComponent } from './components/extrato/extrato.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  @ViewChild(ExtratoComponent)
  private child: ExtratoComponent;

  public lidaComTransferencia = () => {
    this.child.obterTransferencias();
  };
}
