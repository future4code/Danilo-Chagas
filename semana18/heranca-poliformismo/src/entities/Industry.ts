/* P O L I M O R F I S M O */
//3

import Place from "./Place";

export default class Industry extends Place {
  constructor(
    protected machinesQuantity: number,
    // Refere-se à quantidade de máquinas do local 

    cep: string
  ) {
    super(cep);
  }
  getMachinesQuantity() {
    return this.machinesQuantity
  }
}