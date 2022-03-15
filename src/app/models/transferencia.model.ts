export interface Transferencia {
  id?: string;
  valor: number;
  destino: number | string;
  data?: Date;
}
