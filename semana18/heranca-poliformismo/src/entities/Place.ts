/* P O L I M O R F I S M O */

//2A
export default abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }