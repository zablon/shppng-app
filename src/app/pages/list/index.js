import ListCtrl from './list.controller';

module.exports = {
    name:'list',
    url: '/list',
    template: require('./list.html'),
    controller: ListCtrl,
    controllerAs: 'vmList'
};