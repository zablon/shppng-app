import ListCtrl from './list.controller';

export default {
    binding: {
        phones : '<'
    },
    template: require('./list.html'),
    controller: ListCtrl,
    controllerAs: 'vmList'
};

