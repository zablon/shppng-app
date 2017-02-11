import angular from 'angular';

export default class ListPageController {
    constructor(PhoneApiService, SaveService) {
        this._phoneApiService = PhoneApiService;
        this._saveService = SaveService;
        this.phoneList = [];
        this.cartItems = [];
        this.getPhoneList();
        this.isShowMyCart = false;
    }

    getPhoneList() {
        this._phoneApiService.getPhones().then((response)=> {
            this.phoneList = response;
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
