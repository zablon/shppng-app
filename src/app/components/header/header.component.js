import HeaderCtrl from './header.controller';

export default {
    binding: {
        onSearch: '='
    },
    template: require('./header.html'),
    controller: HeaderCtrl,
    controllerAs: 'vmHeader'
};
