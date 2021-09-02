/* P O L I M O R F I S M O */
//3

import Place from "./Place";

export default class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }
  public getResidentsQuantity() {
    return this.residentsQuantity
  }
}