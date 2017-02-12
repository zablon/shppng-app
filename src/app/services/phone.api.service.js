export default class PhoneApiService {
    constructor($http) {
        this._http = $http;
    }

    getPhones(id) {
        return this._http.get('http://cdn.rawgit.com/angular/angular-phonecat/master/app/phones/phones.json').then((response)=> {
            response.data.forEach(function (obj) {
                obj.price = Math.floor(Math.random() * 1000) + 500;
            });
            if (id) {
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].id === id) {
                        return response.data[i];
                    }
                }
                return null;
            }
            return response.data;
        });
    }
}