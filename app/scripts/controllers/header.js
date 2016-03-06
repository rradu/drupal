'use strict';

angular.module('drupalAngularApp')
    .controller('HeaderCtrl', function ($scope, getContent) {
        getContent.logo(function(data){
            $scope.logoSrc = data[0].image;
            $scope.logoAlt = data[0].title;
        });
    });