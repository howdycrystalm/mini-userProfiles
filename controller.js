angular.module('userProfiles').controller('MainController', function($scope, MainService){
    
    $scope.thisAppIsBroken = "This angular app is working";
    $scope.users = MainService.getUsers();

    /*long hand way to write line 4
     $scope.getUsers = function(){
        $scope.users = MainService.getUsers();
    }
    $scope.getUsers();*/
    
    $scope.toggleFavorite = MainService.toggleFavorite;

})