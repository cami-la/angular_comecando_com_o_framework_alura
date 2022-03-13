import { Component } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: number;

  public transferir(): void {
    console.log(`Solicitada uma nova transferência valor = ${this.valor} destino = ${this.destino}`);
  }
}

