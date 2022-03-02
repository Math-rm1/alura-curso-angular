export interface Transferencia {
  id?: number | string;
  valor: number;
  contaDestino: number | string;
  data?: Date | string;
}
