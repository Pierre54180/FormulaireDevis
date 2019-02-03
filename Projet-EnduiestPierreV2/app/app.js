'use strict';

/**
 * @ngdoc overview
 * @name storeApp
 * @description
 * # store
 *
 * Main module of the application.
 */
(function() {
    angular
        .module('store', ['ngRoute', 'product-components']).controller('StoreController', ['$http', function($http) {
            var store = this;

        }]);

})();