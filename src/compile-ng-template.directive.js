/**
 * Defines ng-kit-compile-ng-template attribute
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.compile-ng-template')
    .directive('ngKitCompileNgTemplate', function(
        $compile
    ) {
        return {
            restrict: 'A',
            replace: true,
            link: function($scope, $element, $attr) {
                $scope.$watch($attr.ngKitCompileNgTemplate, function(html) {
                    $element.html(html);
                    $compile($element.contents())($scope);
                });
            }
        };
    });
})(angular);