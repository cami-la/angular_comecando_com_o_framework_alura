import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencias: any[];

  constructor() {
    this.listaTransferencias = [];
  }

  public get transferencias(): any[]{
    return this.listaTransferencias;
  }

  public adicionar(transferencia: any) : void {
    this.hidratar(transferencia);
    this.listaTransferencias.push(transferencia);
  }

  private hidratar(transferencia: any) : void {
    transferencia.data = new Date();
  }

}
