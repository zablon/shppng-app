export default function routing($stateProvider, $urlRouterProvider, $locationProvider,$qProvider) {
    $urlRouterProvider.otherwise('/list');

    $stateProvider
        .state(require('../pages/list'))
        .state(require('../pages/detail'));
        //.state(require('../pages/add.liquid'))
        //.state(require('../pages/add.tabacco'))
        //.state(require('../pages/finish'));

    $locationProvider.html5Mode(true);
    $qProvider.errorOnUnhandledRejections(false);
}

