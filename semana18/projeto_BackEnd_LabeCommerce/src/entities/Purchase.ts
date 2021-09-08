// export default class Purchase {
//     private total_price: number
    
//     constructor(
//         public user_id: string,
//         public product_id: string,
//         public quantity: number,
//         public purchase_id?: string
//     ) {
//         this.user_id = user_id
//         this.product_id = product_id
//         this.quantity = quantity
//         this.total_price = 0
//         purchase_id && (this.purchase_id = purchase_id)
//     }

//     setId(): void {
//         this.purchase_id = String(Number(new Date()))
//     }

//     setTotalPrice(unityPrice: number): void {
//         this.total_price = this.quantity * unityPrice
//     }


// }