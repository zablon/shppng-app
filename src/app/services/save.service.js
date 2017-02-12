export default class SaveService {
    constructor() {
       this.savedCartItems = [];
    }

    addToSavedCartItems(item, index) {

        if (this.savedCartItems.indexOf(this.savedCartItems[index]) == -1) {
            this.savedCartItems.push(item);
        }
    }

}
