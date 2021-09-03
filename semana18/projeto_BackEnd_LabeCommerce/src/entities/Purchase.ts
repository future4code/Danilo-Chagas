import { ITEM } from "../type";

export default class Purchase {
    constructor(
        protected id: string,
        public item_type: ITEM,
        public product_id: string,
        public travel_id: string,
        public user_id: string,
        public quantity: number,
        public total_value: number
    ) {

    }
    setPurchase(
        item_type: ITEM,
        product_id: string,
        travel_id: string,
        user_id: string,
        quantity: number,
        total_value: number
    ): Purchase | void {
        this.id = String(Number(new Date()))
        this.item_type = item_type
        this.product_id = product_id
        this.travel_id = travel_id
        this.user_id = user_id
        this.quantity = quantity
        this.total_value = total_value
    }
}