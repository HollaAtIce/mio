/* global angular */
'use strict'

angular.module('public.home')
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
