/* global angular */
'use strict'

angular.module('public.home', [])
.controller('HomeController', HomeController)

HomeController.$inject = ['HomeService']

function HomeController(HomeService) {
    var vm = this
    vm.tagline = 'Check app'

    function onError(err) {
        console.log(err)
    }
}
