export default class ListController {
    constructor(PhoneApiService, $state) {
        this._phoneApiService = PhoneApiService;
        this._state = $state;
        this.phonesList = [];
        this.getPhoneList();
    }

    getPhoneList(){
        this._phoneApiService.getPhones().then((response)=>{
            this.phonesList = response.data;
        })
    }
}
