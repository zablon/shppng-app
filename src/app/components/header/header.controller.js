export default class HeaderController{
    constructor(SaveService){
        this.saveService = SaveService;
        this.isShowCartItems = false;
    }

    $onInit(){
        this.cartItems = this.saveService.savedCartItems;
    }

    showCartItems(flag){
        this.isShowCartItems = flag;
    }
}
