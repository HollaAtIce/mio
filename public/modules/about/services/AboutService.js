/* global angular */
'use strict'

angular.module('public.about')
    .factory('AboutService', AboutServiceFactory)

AboutServiceFactory.$inject = ['$http']

function AboutServiceFactory($http) {
    return {
        getAll
    }

    function getAll(onSuccess, onError) {
        return $http.get('/api/about')
            .then(function(response) {
                onSuccess(response.data)
            })
            .catch(function(response) {
                onError(response.data)
            })
    }
}
