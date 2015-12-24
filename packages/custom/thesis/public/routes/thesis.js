'use strict';

angular.module('mean.thesis').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('thesis example page', {
      url: '/thesis/example',
      templateUrl: 'thesis/views/index.html'
    });
  }
]);
