'use strict';

angular.module('drupalAngularApp')
    .service('getContent', function($http){
       this.logo = getLogo;

       function getLogo(callback) {
           $http({
               url: 'http://drupal-8-0-5.dd:8083/api/dentist/logo',
               method: 'GET',
               headers: {
                   'Content-Type': 'application/x-www-form-urlencoded'
               }
           }).success(function(data){
               callback(data);
           });
       }
});