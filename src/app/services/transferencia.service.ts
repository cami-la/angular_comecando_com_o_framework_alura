import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpCliente: HttpClient) {
    this.listaTransferencias = [];
  }

  public todas() : Observable<Transferencia[]> {
    return this.httpCliente.get<Transferencia[]>(this.url);
  }

  public get transferencias(): any[]{
    return this.listaTransferencias;
  }

  public adicionar(transferencia: Transferencia) : Observable<Transferencia> {
    this.hidratar(transferencia);
    return this.httpCliente.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any) : void {
    transferencia.data = new Date();
  }

}
