export default class PhoneApiService {
    constructor($http) {
        this._http = $http;
    }

    getPhones(){
       return this._http.get('http://cdn.rawgit.com/angular/angular-phonecat/master/app/phones/phones.json');
    }
}