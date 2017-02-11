export default function routing($stateProvider, $urlRouterProvider, $locationProvider,$qProvider) {
    $urlRouterProvider.otherwise('/list');

    $stateProvider
        .state(require('../pages/list'))
        .state(require('../pages/detail'));

    $qProvider.errorOnUnhandledRejections(false);
}

