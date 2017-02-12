import ListCtrl from './list.controller';

export default {
    bindings: {
        phones: '<phoneList',
        search: '<'
    },
    template: require('./list.html'),
    controller: ListCtrl,
    controllerAs: 'vmList'
};

