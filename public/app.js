/* global angular */

angular.module('app', ['ui.router'])
        .config(RouteConfig)

RouteConfig.$inject = ['$stateProvider', '$locationProvider']

// STATES

function RouteConfig($stateProvider, $locationProvider) {
    $stateProvider
            .state('about', {
                url: '/isaac',
                templateUrl: 'public/modules/home/views/about.html',
                controller: 'HomeController as $ctrl'

            })
            .state('thedime', {
                url: '/thedime',
                templateUrl: 'public/modules/home/views/thedime.html',
                controller: 'HomeController as $ctrl'

            })
            .state('home', {
                url: '/'
            })

    $locationProvider.html5Mode(true)
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
