﻿NavigationItemDetailCtrl.$inject = ['$rootScope', '$scope', 'logger', '$state', 'localize', '$resource', '$stateParams'];

function NavigationItemDetailCtrl($rootScope, $scope, logger, $state, localize, $resource, $stateParams) {
    $scope.exit = function () {
        $state.transitionTo('SubList', { Module: 'Metadata', SubModule: 'Perspective', Id: $stateParams.Id, View: 'List' });
    };
}

//@ sourceURL=Coevery.Metadata/navigationitemdetailcontroller.js