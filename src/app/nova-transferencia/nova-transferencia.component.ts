import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Transferencia } from "../models/transferencia.model";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router){}

  public transferir(): void {
    console.log(`Solicitada uma nova transferência valor = ${this.valor} destino = ${this.destino}`);
    const valorEmitir : Transferencia = {
      valor: this.valor,
      destino: this.destino
    };
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparFormulario();
      this.router.navigateByUrl('extrato');
    },
    (error) => console.error(error));
  }

  private limparFormulario(): void {
    this.valor = 0;
    this.destino = 0;
  }
}

