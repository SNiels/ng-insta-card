/* global angular */
/* global instgrm */
'use strict';

/**
 * @ngdoc directive
 * @name ng-insta-card:instaCard
 * @description
 * # instaCard
 */
angular.module('portfolioApp')
  .directive('instaCard',['$window', function ($window) {
    return {
      templateUrl: 'ngInstaCard.html',
      restrict: 'AEC',
      link:function(scope, element, attrs){
        element.find('a').attr('href','https://instagram.com/p/'+(attrs.instaId?attrs.instaId:attrs.instaCard)+'/');
		instgrm.Embeds.process();
      }
    };
  }]);