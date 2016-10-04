angular.module('devmtnTravel')
  .controller('bookedCtrl', function($scope, $stateParams, mainSrv) {
    var id = parseInt($stateParams.id);

    for(var i = 0; i < mainSrv.travelInfo.length; i++) {
      if(mainSrv.travelInfo[i].id === id) {
        $scope.location = mainSrv.travelInfo[i];
      }
    }

  });
