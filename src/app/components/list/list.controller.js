export default class ListController {
    constructor() {
        this.cartItems = [];
    }

    addToCart(index) {
        if (this.cartItems.indexOf(this.cartItems[index]) == -1) {
            this.cartItems.push(this.phones[index]);
            console.log(this.cartItems)
        }

    }


}

