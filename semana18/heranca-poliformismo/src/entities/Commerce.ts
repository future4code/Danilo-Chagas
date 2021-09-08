/* P O L I M O R F I S M O */
//3

import Place from "./Place";

export default class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }

  public getFloorsQuantity() {
    return this.floorsQuantity
  }

}