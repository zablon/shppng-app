import angular from 'angular';

export default class ListController {
    constructor(PhoneApiService, SaveService, $state) {
        this._phoneApiService = PhoneApiService;
        this._saveService = SaveService;
        this._state = $state;
        this.phoneList = [];
        this.cartItems = [];
        this.getPhoneList();
        this.isShowMyCart = false;
    }

    getPhoneList() {
        this._phoneApiService.getPhones().then((response)=> {
            this.phoneList = response.data;
        })
    }

    addToCart(index) {
        if (this.cartItems.indexOf(this.cartItems[index]) == -1) {
            this._saveService.addToSavedCartItems(this.phoneList[index])
        }

    }

    showCartItems() {
        this.isShowMyCart = true;
        console.log(this.cartItems)
    }
}
