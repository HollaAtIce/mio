/* global angular */
'use strict'

angular.module('public.about', [])
.controller('AboutController', AboutController)

AboutController.$inject = ['AboutService']

function AboutController(AboutService) {
    var vm = this
    vm.tagline = 'Hello Bout'

    function onError(err) {
        console.log(err)
    }
}
