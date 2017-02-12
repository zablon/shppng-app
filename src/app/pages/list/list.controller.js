import angular from 'angular';

export default class ListPageController {
    constructor(PhoneApiService, SaveService) {
        this._phoneApiService = PhoneApiService;
        this._saveService = SaveService;
        this.phoneList = [];
        this.cartItems = [];
        this.getPhoneList();
        this.isShowMyCart = false;
        this.search = '';
    }

    getPhoneList() {
        this._phoneApiService.getPhones().then((response)=> {
            this.phoneList = response;
        })
    }



    showCartItems() {
        this.isShowMyCart = true;
        console.log(this.cartItems)
    }
}
