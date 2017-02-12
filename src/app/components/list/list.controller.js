export default class ListController {
    constructor(SaveService) {
        this.saveService = SaveService;
    }

    addToCart(index) {
        this.saveService.addToSavedCartItems(this.phones[index], index);
    }


}

