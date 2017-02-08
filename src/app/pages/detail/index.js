import DetailCtrl from './detail.controller';

module.exports = {
    name:'detail',
    url: '/detail/:phoneId',
    template: require('./detail.html'),
    controller: DetailCtrl,
    controllerAs: 'vmDetail'
};
