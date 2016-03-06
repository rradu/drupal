'use strict';

/**
 * @ngdoc function
 * @name drupalAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the drupalAngularApp
 */
angular.module('drupalAngularApp')
    .controller('MainCtrl', function ($scope, localStorageService, getContent) {

        var todosInStore = localStorageService.get('todos');

        $scope.todos = todosInStore || [];

        $scope.$watch('todos', function () {
            localStorageService.set('todos', $scope.todos);
        }, true);

        $scope.addTodo = function () {
            $scope.todos.push($scope.todo);
            $scope.todo = '';
        };

        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };

        getContent.aboutUs(function(data){
           $scope.aboutUs = data[0].body[0].value;
        });
    });
