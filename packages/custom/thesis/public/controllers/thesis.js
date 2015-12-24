'use strict';

/* jshint -W098 */
angular.module('mean.thesis').controller('ThesisController', ['$scope', 'Global', 'Thesis',
  function($scope, Global, Thesis) {
    $scope.global = Global;
    $scope.package = {
      name: 'thesis'
    };
  }
]);
