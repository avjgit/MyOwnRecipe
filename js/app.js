'use strict';

angular.module('common', []); //defines module

angular.module('recipesApp', ['common']); //defines module

var myApp = angular.module('recipesApp' ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "home.html"
    })
    .state('browse', {
      url: "/browse",
      templateUrl: "browse.html"
    })
    .state('search', {
      url: "/search",
      templateUrl: "search.html"
    });
});