'use strict';

angular.module('erpApp')
    .factory('Productcategory', function ($resource) {
        return $resource('api/productcategorys/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
