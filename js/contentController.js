angular.module('common') //accessing a module
    .controller('contentController', ['$scope', function ($scope) { //creating new controller
        $scope.browseRecipesVariable = "Testing!"
    }])