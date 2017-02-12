import HeaderCtrl from './header.controller';

export default {
    bindings: {
        search: '=',
        cartItems: '<'
    },
    template: require('./header.html'),
    controller: HeaderCtrl,
    controllerAs: 'vmHeader'
};
