/* global angular */

angular.module('app', ['ui.router'])
        .config(RouteConfig)

RouteConfig.$inject = ['$stateProvider']

// STATES

function RouteConfig($stateProvider) {
    $stateProvider
            .state('about', {
                url: '/isaac',
                templateUrl: 'public/modules/home/views/about.html',
                controller: 'HomeController as $ctrl'
                // views: {
                //     'root@app': {
                //         templateUrl: 'public/modules/home/views/casa.html',
                //         controller: 'HomeController as HomeCtrl'
                //     }
                // }

            })
            .state('thedime', {
                url: '/thedime',
                templateUrl: 'public/modules/home/views/thedime.html',
                controller: 'HomeController as $ctrl'
                // views: {
                //     'root@app': {
                //         templateUrl: 'public/modules/home/views/about.html',
                //         controller: 'HomeController as HomeCtrl'
                //     }
                // }

            })
            .state('home', {
                url: '/'
            })
}

// CTRL

angular.module('app')
.controller('HomeController', HomeController)

HomeController.$inject = ['HomeService']

function HomeController(HomeService) {
    var vm = this
    vm.tagline = 'Isaac Cuchilla'

    function onError(err) {
        console.log(err)
    }
}

// SERVICE

angular.module('app')
    .factory('HomeService', HomeServiceFactory)

HomeServiceFactory.$inject = ['$http']

function HomeServiceFactory($http) {
    return {
        getAll
    }

    function getAll(onSuccess, onError) {
        return $http.get('/api/casa')
            .then(function(response) {
                onSuccess(response.data)
            })
            .catch(function(response) {
                onError(response.data)
            })
    }
}
