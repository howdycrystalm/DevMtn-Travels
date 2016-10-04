angular.module('devmtnTravel')
  .controller('locationsCtrl', function($scope, mainSrv){
    $scope.locationsData = mainSrv.travelInfo;
  })
