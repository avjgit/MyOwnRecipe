angular.module('common') //accessing a module
    .controller('contentController', ['$scope', function ($scope) { //creating new controller
        $scope.browseRecipesVariable = "Browse all the goodies"
        $scope.searchRecipesVariable = "Search recipes!"
    }])