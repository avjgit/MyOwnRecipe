angular.module('common') //accessing a module
    .directive('recipeFooter', [function () { //creating new directive
        return {
            templateUrl: 'footer.html'
        };
    }])