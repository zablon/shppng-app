require('./global.css');

import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import 'bootstrap-css';
import routing from './configs/routing';
import SaveService from './services/save.service';
import StorageService from './services/storage.service';
import PhoneApiService from './services/phone.api.service';
import header from './components/header/header.component';
import list from './components/list/list.component';

export default angular
    .module('shppngApp', [angularUiRouter])
    .config(routing)
    .service('SaveService', SaveService)
    .service('StorageService', StorageService)
    .service('PhoneApiService', PhoneApiService)
    .component('header', header)
    .component('list', list);

