export default class SaveService {
    constructor() {
        this.savedCartItems = [];
        this.phone = {};
    }

    addToSavedCartItems(item) {
        this.savedCartItems.push(item);
    }

    phoneDetail(phone) {
        this.phone = phone;
    }

}
