import ListPageCtrl from './list.controller';

module.exports = {
    name:'list',
    url: '/list',
    template: require('./list.html'),
    controller: ListPageCtrl,
    controllerAs: 'vmListPage'
};