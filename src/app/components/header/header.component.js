import HeaderCtrl from './header.controller';

export default {
    bindings: {
        onSearch: '<'
    },
    template: require('./header.html'),
    controller: HeaderCtrl,
    controllerAs: 'vmHeader'
};
