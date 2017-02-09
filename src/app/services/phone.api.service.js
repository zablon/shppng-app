export default class PhoneApiService {
    constructor($http) {
        this._http = $http;
    }

    getPhones() {
        return this._http.get('http://cdn.rawgit.com/angular/angular-phonecat/master/app/phones/phones.json').then((response)=>{
            return response.data;
        });
    }

    getPhone(id) {
        return this._http.get('http://cdn.rawgit.com/angular/angular-phonecat/master/app/phones/phones.json').then((response)=> {
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].id === id) {
                    return response.data[i];
                }
            }
            return null;
        });
    }
}