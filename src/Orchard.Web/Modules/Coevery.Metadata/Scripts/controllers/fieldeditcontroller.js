﻿function FieldEditCtrl($http, $timeout, $scope, logger, $state, $stateParams, $element) {
    $('.itemsview').hide();

    var fieldColumnDefs = [
        { field: 'ContentId', displayName: 'Actions', width: 100, cellTemplate: '<button class="btn btn-small"><i class="icon-remove"></i></button>' },
        { field: 'Value', displayName: 'Value', enableCellEdit: true },
        { field: 'IsDefault', displayName: 'Is Default', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><span ng-cell-text><input type="checkbox" ng-checked="row.entity[col.field]"></span></div>' },
        { field: 'ModifiedBy', displayName: 'Modified By' }
    ];

    $scope.gridOptions = {
        data: 'myData',
        multiSelect: false,
        columnDefs: fieldColumnDefs
    };

    $scope.myData = [
        { Value: 'China', ModifiedBy: 'John 2013/5/14', IsDefault: true },
        { Value: 'America', ModifiedBy: 'John 2013/5/14' }
    ];

    $scope.exit = function () {
        $state.transitionTo('Detail', { Module: 'Metadata', Id: $stateParams.Id });
    };

    $scope.add = function () {

    };

    $scope.change = function () {

    };

    $scope.viewItems = function () {
        $('.editview').hide();
        $('.itemsview').show();
    };

    $scope.back = function () {
        $('.editview').show();
        $('.itemsview').hide();
    };
}