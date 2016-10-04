angular.module('devmtnTravel')
  .controller('packagesCtrl', function($scope, mainSrv){
    $scope.packagesData = mainSrv.travelInfo;
  })