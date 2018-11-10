(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.lunchmenu = "";
  $scope.lunchresult = "inital";

  $scope.checkmenu = function () {
    var lunchresultout = determineresult($scope.lunchmenu);
    $scope.lunchresult = lunchresultout;
  };


  function determineresult(string) {
    if ( string.length > 0)
    {
      var lunchresultout = "test";
      var words = string.split(',');
      if ( words.length <= 3 )

      {
           lunchresultout = 'Enjoy!'
        }
      else {
        lunchresultout ='Too Much!'
      }

    }

   else {
     lunchresultout = 'Enter some value'
   }

    return lunchresultout;
  }

});


})();
